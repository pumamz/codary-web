import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
