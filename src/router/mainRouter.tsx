import { Route, Routes } from 'react-router-dom';
import Main from '@pages/main/main.page';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
