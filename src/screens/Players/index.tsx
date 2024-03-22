import { useCallback, useEffect, useState, useRef } from "react"
import { Alert, FlatList, Text, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"

import { Button } from "@components/Button"
import { ButtonIcon } from "@components/ButtonIcon"
import { Filter } from "@components/Filter"
import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { Input } from "@components/Input"
import { PlayerCard } from "@components/PlayerCard"

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { ListEmpty } from "@components/ListEmpty"
import { playerAddByGroup } from "@storage/player/playerAddByGroup"
import { AppError } from "@utils/AppError"
import { RequiredMessage } from "@components/RequiredMessage"
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam"
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO"
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup"
import { groupRemove } from "@storage/group/groupRemove"


type RouteParams = {
    group: string;
}


export const Players: React.FC = () => {
    const [team, setTeam] = useState('Time A');
    const [newPlayerName, setNewPlayerName] = useState('');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const [required, setRequired] = useState(false);

    const { navigate } = useNavigation();

    const { params: { group } } = useRoute() as { params: RouteParams };

    const newPlayerNameInputRef = useRef<TextInput>(null);

    const handleAddPlayer = useCallback(async () => {
        try {
            if (newPlayerName.trim().length === 0) {
                return setRequired(true)
            }

            const newPlayer = {
                name: newPlayerName,
                team,
            }

            await playerAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur();

            setNewPlayerName('')

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo pessoa', error.message)
            } else {
                Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
            }
        }

    }, [newPlayerName]);

    const handlePlayerRemove = useCallback(async (name: string) => {
        try {
            await playerRemoveByGroup(name, group);
            fetchPlayersByTeam();
        } catch (error) {
            Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
        }

    }, [team]);

    const removedGroup = useCallback(async () => {
        try {
            await groupRemove(group);
            navigate('Groups');

        } catch (error) {
            Alert.alert('Remover grupo', 'Não foi possível remover esse grupo.');
        }
    }, [])

    const handleGroupRemove = useCallback(async () => {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => removedGroup() }
            ]
        )
    }, [])

    const fetchPlayersByTeam = useCallback(async () => {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam)
        } catch (error) {
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado');
        }
    }, [team])

    useEffect(() => {
        newPlayerName.length > 0 && setRequired(false)
        fetchPlayersByTeam()

    }, [newPlayerName, team])

    return (
        <Container>
            <Header
                showBackButton
            />

            <Highlight
                title={group}
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder="Nome da pessoa"
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />
            </Form>
            <RequiredMessage required={required} />

            <HeaderList >
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard name={item.name} handlePlayerRemove={() => handlePlayerRemove(item.name)} />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />

            <Button
                title="Remover Turma"
                type="REMOVE"
                onPress={handleGroupRemove}
            />
        </Container>
    )
}