import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './styles/style.scss';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
