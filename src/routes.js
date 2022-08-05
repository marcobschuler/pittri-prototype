import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import useGlobal from './hooks/useGlobal';

import Header from './components/Header';
import Home from './pages/Home';

function ProtectedRoutes({ redirectTo }) {
  const { token } = useGlobal();
  const isAuthenticated = token;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/about" element={<Home />} />

        <Route element={<ProtectedRoutes redirectTo="/" />}>
          <Route path="/example" element={<h1>Example</h1>} />
        </Route>

        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </GlobalProvider>
  );
}

export default MainRoutes;
