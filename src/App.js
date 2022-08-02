import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
