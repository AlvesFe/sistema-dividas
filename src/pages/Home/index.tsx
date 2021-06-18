import { PageContainer, Container, DebitList, DebitDetails, Title, LineSpacer } from './styles';
import AddButton from 'components/Button/AddButton';
import List from 'components/List';

export default function Home() {
  return (
    <PageContainer>
      <Title size="xx-large" >Gerenciamento de Dívidas</Title>
      <AddButton />
      <Container>
        <DebitList className="panels">
          <Title size="x-large" color="var(--black)">Usuários</Title>
          <LineSpacer />
          <List />
        </DebitList>
        <DebitDetails className="panels">
          <Title size="x-large" color="var(--black)">Detalhes da dívida</Title>
          <LineSpacer />
        </DebitDetails>
      </Container>
    </PageContainer>
  )
}
