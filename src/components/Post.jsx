import { useNavigate } from 'react-router-dom';
import classes from './Post.module.css';

export const Post = ({ author, text, id }) => {
  const navigate = useNavigate();
  return (
    <li className={classes.post} onClick={() => navigate(`/${id}`)}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{text}</p>
    </li>
  );
};
