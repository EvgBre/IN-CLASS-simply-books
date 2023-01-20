import React, { useState, useEffect } from 'react';
import { getFavoriteAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [authors, setAuthors] = useState([]);

  const getAllFavoriteAuthors = () => {
    getFavoriteAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllFavoriteAuthors();
  }, []);

  return (
    <div>{authors.map((author) => (
      <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllFavoriteAuthors} />
    ))}
    </div>
  );
}
