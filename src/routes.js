import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import useGlobal from './hooks/useGlobal';

import Home from './pages/Home';
import Header from './components/Header';

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
        <Route path="/events" element={<Header />} />
        <Route path="/gallery" element={<Header />} />
        <Route path="/about" element={<Header />} />

        <Route element={<ProtectedRoutes redirectTo="/" />}>
          <Route path="/example" element={<h1>Example</h1>} />
        </Route>

        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </GlobalProvider>
  );
}

export default MainRoutes;
