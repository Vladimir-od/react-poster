import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';

export const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};
