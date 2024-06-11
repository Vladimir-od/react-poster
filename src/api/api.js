import { useQuery } from '@tanstack/react-query';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      return data.posts;
    },
  });
};

export const createNewPost = async (post) => {
  const response = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error('Failed to create new post', response);
  }
  return await response.json();
};

export const usePostById = (postId) => {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/posts/${postId}`);
      const data = await response.json();
      return data.post;
    },
  });
};
