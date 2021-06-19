import { PageContainer, Container, DebitList, DebitDetails, Title, LineSpacer } from './styles';
import { AddButton } from 'components/Button';
import { Select, Input, TextArea, Button } from 'components/FormItem';
import List from 'components/List';

export default function Home() {
  return (
    <PageContainer>
      <Title size="xx-large" isSpaced>Gerenciamento de Dívidas</Title>
      <AddButton />
      <div>
        <Container>
          <DebitList className="panels">
            <Title size="x-large" color="var(--black)">Usuários</Title>
            <LineSpacer />
            <List />
          </DebitList>
          <DebitDetails className="panels">
            <Title size="x-large" color="var(--black)">Detalhes da dívida</Title>
            <LineSpacer />
            <div>
              <span>
                <Select />
                <div>
                  <Input placeholder="Testando" type="number" />
                  <Input placeholder="Testando" type="number" />
                </div>
                <TextArea placeholder="Testando tb" />
              </span>
              <span>
                <Button />
                <Button />
              </span>
            </div>
          </DebitDetails>
        </Container>
      </div>
    </PageContainer>
  )
}
