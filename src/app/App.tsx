import { Providers } from './providers/Providers';
import { AppRouter } from './routers';

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
