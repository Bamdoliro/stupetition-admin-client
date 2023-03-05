import Login from 'components/layout/auth/Login';
import CreateSchool from 'components/layout/home/CreateSchool';
import Generate from 'components/layout/home/Generate';
import MainLayout from 'components/common/Layouts/MainLayout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<MainLayout />}>
        <Route path="/main/genrate" element={<Generate />} />
        <Route path="/main/create/school" element={<CreateSchool />} />
      </Route>
    </Routes>
  );
};

export default App;
