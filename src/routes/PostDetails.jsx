import { Link, useParams } from 'react-router-dom';

import classes from './PostDetails.module.css';
import { Modal } from '../components/Modal';
import { usePostById } from '../api/api';

export const PostDetails = () => {
  let { id } = useParams();

  const { data: post, isPending } = usePostById(id);

  if (!post && !isPending) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to='..' className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  if (isPending) {
    return (
      <Modal>
        <main className={classes.details}>
          <p>Loading...</p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.text}</p>
      </main>
    </Modal>
  );
};
