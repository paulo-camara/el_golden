import './App.css';
import { Layout } from './components/Layout/Layout';
import { WithRouter } from './components/WithRouter';

function App(props) {
  return (
    <Layout>
      <WithRouter />
    </Layout>
  )
};

export default App;
