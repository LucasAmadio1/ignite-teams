import { useState } from 'react'
import { GroupCard } from '../../components/GroupCard'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { Container } from './styles'
import { FlatList } from 'react-native'
import { ListEmpty } from '../../components/ListEmpty'
import { Button } from '../../components/Button'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  )
}
