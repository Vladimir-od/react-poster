import { useState } from 'react';
import classes from './NewPost.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewPost } from '../api/api';
import { Modal } from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';

export const NewPost = () => {
  const [enteredBody, setEnteredBody] = useState('');

  const [enteredName, setEnteredName] = useState('');

  const client = useQueryClient();

  const navigate = useNavigate();

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: createNewPost,
    onSuccess: () => {
      client.invalidateQueries(['posts']);
      navigate('..');
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    createPost({ author: enteredName, text: enteredBody, id: Math.floor(Math.random() * 100) });
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' required rows={3} onChange={(e) => setEnteredBody(e.target.value)} />
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' required onChange={(e) => setEnteredName(e.target.value)} />
        </p>
        <p className={classes.actions}>
          <Link to='..'>Cancel</Link>
          <button disabled={isPending}> {isPending ? 'Loading...' : 'Create'}</button>
        </p>
      </form>
    </Modal>
  );
};
