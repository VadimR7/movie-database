import { CreditsCrewAndCastInt, CrewMembers } from '../../common/ts/types';
import { FilteredCrewMembers } from '../../common/helpers';
import { useMemo } from 'react';
import ItemWithTitle from './ItemWithTitle';

interface CrewListProps {
  crewMembers: CreditsCrewAndCastInt[];
}

const CrewList = ({ crewMembers }: CrewListProps) => {
  const crewFilter: CrewMembers[] = useMemo(
    () => [
      {
        position: 'Director',
        filterBy: 'job',
        filterName: 'Director',
      },
      {
        position: 'Producers',
        filterBy: 'department',
        filterName: 'Production',
      },
      {
        position: 'Writers',
        filterBy: 'job',
        filterName: 'Screenplay',
      },
      {
        position: 'Editors',
        filterBy: 'job',
        filterName: 'Editor',
      },
      {
        position: 'Cinematography',
        filterBy: 'job',
        filterName: 'Director of Photography',
      },
      {
        position: 'Production design',
        filterBy: 'job',
        filterName: 'Production Design',
      },
      {
        position: 'Art direction',
        filterBy: 'job',
        filterName: 'Art Direction',
      },
      {
        position: 'Set decoration',
        filterBy: 'job',
        filterName: 'Set Decoration',
      },
      {
        position: 'Visual effects',
        filterBy: 'department',
        filterName: 'Visual Effects',
      },
      {
        position: 'Composer',
        filterBy: 'job',
        filterName: 'Original Music Composer',
      },
      {
        position: 'Costumes',
        filterBy: 'job',
        filterName: 'Costume Design',
      },
    ],
    [],
  );

  const filteredCrewMembers = FilteredCrewMembers(crewMembers, crewFilter);

  if (!filteredCrewMembers.length) return <h3>No crew info</h3>;

  return (
    <div className="crew-member__list">
      {filteredCrewMembers.map((category) => (
        <ItemWithTitle key={category.title} itemsData={category} />
      ))}
    </div>
  );
};

export default CrewList;
