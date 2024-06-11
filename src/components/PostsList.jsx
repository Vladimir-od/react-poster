import { Post } from './Post';
import classes from './PostsList.module.css';
import { usePosts } from '../api/api';

export const PostsList = () => {
  const { isPending, data: posts } = usePosts();

  return (
    <>
      {!isPending && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(({ author, text, id }) => (
            <Post key={id} author={author} text={text} id={id} />
          ))}
        </ul>
      )}
      {!isPending && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isPending && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};
