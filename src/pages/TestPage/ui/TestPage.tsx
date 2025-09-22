import { Container } from 'app/layout';
import { useGetTestQuery } from 'entities/Tests';
import React from 'react';
import { useParams } from 'react-router-dom';

export const TestPage = () => {
  const { id } = useParams();

  const { data } = useGetTestQuery(id);

  return (
    <div>
      <Container>{data.author_id}</Container>
    </div>
  );
};
