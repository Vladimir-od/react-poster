import { Outlet } from 'react-router-dom';
import { PostsList } from '../components/PostsList';

export const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};
