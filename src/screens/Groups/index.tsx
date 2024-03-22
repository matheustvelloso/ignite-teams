import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';



export const Groups: React.FC = () => {
    const [groups, setGroups] = useState<string[]>([]);

    const { navigate } = useNavigation();

    const handleNewGroupScreen = useCallback(() => {
        navigate('NewGroup')
    }, []);

    const fetchGroups = useCallback(async () => {
        try {
            const data = await groupsGetAll();
            data && setGroups(data)
        } catch (e) {
            console.log(e)
        }
    }, []);

    const handleOpenGroup = useCallback((group: string) => {
        navigate('Players', { group })
    }, [])

    useFocusEffect(useCallback(() => {
        fetchGroups();
    }, []));

    return (
        <Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                        onPress={() => handleOpenGroup(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar a primeira turma?" />
                )}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    groups.length === 0 && { flex: 1 }
                ]}
                showsVerticalScrollIndicator={false}
            />
            <Button
                title="Criar nova turma"
                onPress={handleNewGroupScreen}
            />
        </Container>
    );
}




