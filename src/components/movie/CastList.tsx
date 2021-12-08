import Item from './Item';
import { CreditsCrewAndCastInt } from '../../common/ts/types';
import { useState } from 'react';

interface CastListProps {
  castMembers: CreditsCrewAndCastInt[];
}

const CastList = ({ castMembers }: CastListProps) => {
  const [showAll, setShowAll] = useState(false);

  if (!castMembers.length) return <h3>No cast info</h3>;

  return (
    <>
      {showAll ? (
        <>
          {castMembers.map((member) => (
            <Item key={member.id} name={member.name} />
          ))}
        </>
      ) : (
        <>
          {castMembers.map((member, i) => {
            if (i < 29) {
              return <Item key={member.id} name={member.name} />;
            }
            return null;
          })}
          {castMembers.length > 29 && (
            <p id="cast-member__showAll" onClick={() => setShowAll(true)}>
              Show All...
            </p>
          )}
        </>
      )}
    </>
  );
};

export default CastList;
