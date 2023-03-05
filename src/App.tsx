import Login from 'components/ui/auth/Login';
import CreateSchool from 'components/ui/home/CreateSchool';
import Generate from 'components/ui/home/Generate';
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
