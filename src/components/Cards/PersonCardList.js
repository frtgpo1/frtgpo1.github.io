import React from 'react';
import PersonCard from './PersonCard';

const PersonCardList = ({ persons }) => {
  return (
    <div>
      {
        persons.map((user, i) => {
          return (
            <PersonCard
              key={i}
              firstName={persons[i].firstName}
              lastName={persons[i].lastName}
              />
          );
        })
      }
    </div>
  );
}

export default PersonCardList;