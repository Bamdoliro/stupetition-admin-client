import Login from 'components/layout/auth/Login';
import CreateSchool from 'components/layout/home/CreateSchool';
import Join from 'components/layout/home/Join';
import Main from 'components/layout/home/Main';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />}>
        <Route path="/main/genrator" element={<Join />} />
        <Route path="/main/create/school" element={<CreateSchool />} />
      </Route>
    </Routes>
  );
};

export default App;
