import Login from 'components/layout/auth/Login';
import CreateSchool from 'components/layout/home/CreateSchool';
import Generate from 'components/layout/home/Generate';
import Main from 'layouts/MainLayout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />}>
        <Route path="/main/genrate" element={<Generate />} />
        <Route path="/main/create/school" element={<CreateSchool />} />
      </Route>
    </Routes>
  );
};

export default App;
