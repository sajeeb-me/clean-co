import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/publicRoute';
import './App.css';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './authentication/PrivateRoute';
import { privateRoute } from './routes/privateRoute';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import AddService from './pages/Dashboard/AddService';
import AddAdmin from './pages/Dashboard/AddAdmin';

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <Navbar >
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          <Route element={<PrivateRoute />}>
            {
              privateRoute.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))
            }
          </Route>
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='add-service' element={<AddService />} />
              <Route path='add-admin' element={<AddAdmin />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
