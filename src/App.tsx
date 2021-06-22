import GlobalStyles from 'styles/GlobalStyles';
import Home from 'pages/Home';
import { DebitProvider } from 'context/DebitContext';

function App() {
  return (
    <DebitProvider>
      <GlobalStyles />
      <Home />
    </DebitProvider>
  );
}

export default App;