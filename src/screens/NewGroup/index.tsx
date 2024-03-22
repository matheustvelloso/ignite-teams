import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
import { RequiredMessage } from "@components/RequiredMessage";

export const NewGroup: React.FC = () => {
    const [group, setGroup] = useState('');
    const [required, setRequired] = useState(false);

    const { navigate } = useNavigation()

    const handleGoPlayersScreenAndCreateTeam = useCallback(async () => {
        try {
            if (group.trim().length === 0) {
                return setRequired(true)
            }
            await groupCreate(group)
            navigate('Players', { group })
            setGroup('')
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
            }

        }

    }, [group])

    useEffect(() => {
        group.length > 0 && setRequired(false)
    }, [group])

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                    value={group}

                />
                <RequiredMessage required={required} />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleGoPlayersScreenAndCreateTeam}
                />
            </Content>
        </Container>
    )
}