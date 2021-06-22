import {
  PageContainer,
  Container,
  DebitList,
  DebitDetails,
  Title,
  LineSpacer,
  Header,
  Section,
  Application
} from './styles';

import Form from 'components/Form';

import { AddButton } from 'components/Button';
import List from 'components/List';
import { useContext } from 'react';
import { DebitContext } from 'context/DebitContext';

export default function Home() {
  const { isCreating, newDebit } = useContext(DebitContext);

  return (
    <PageContainer>
      <AddButton 
        onClick={newDebit} 
        title="Nova dívida"
      />

      <Application>
        <Title size="xx-large" spaced>Gerenciamento de Dívidas</Title>

        <Container>
          <DebitList className="panels">

            <Header>
              <Title size="x-large" color="var(--black)">Usuários</Title>
              <LineSpacer />
            </Header>

            <Section>
              <List/>
            </Section>
          </DebitList>

          <DebitDetails className="panels">

            <Header>
              <Title size="x-large" color="var(--black)">{isCreating? "Criar nova dívida" : "Detalhes da dívida"}</Title>
              <LineSpacer />
            </Header>

            <Section centered>
              <Form type={isCreating? "create" : "edit"}/>
            </Section>
          </DebitDetails>

        </Container>
      </Application>
    </PageContainer>
  )
}