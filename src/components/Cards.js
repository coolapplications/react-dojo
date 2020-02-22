import React from 'react';
import { Card } from './Card';
import useFetch from '../tasks/task';

function Cards() {
  const [data] = useFetch([]);
  return (
    <div>
      {data.map(tasks => (
        <Card
          title={tasks.title}
          content={tasks.content}
          responsible={tasks.responsible}
        />
      ))}
    </div>
  );
}
export default Cards;
