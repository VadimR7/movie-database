import { CSSProperties } from 'react';
import {
  CreditsCrewAndCastInt,
  CrewMembers,
  ItemWithTitleInt,
} from '../ts/types';

export const imgBg = (img: string, className: string = '') => {
  const divStyle: CSSProperties = {
    position: 'relative',
  };

  const imgStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    objectFit: 'cover',
  };

  return (
    <div style={divStyle} className={className}>
      <img src={img} alt="" style={imgStyle} />
    </div>
  );
};

export const createArr = (N: number) => {
  let a = Array(N),
    b = 0;
  while (b < N) a[b++] = b;
  return a;
};

export const FilteredCrewMembers = (
  crew: CreditsCrewAndCastInt[],
  filters: CrewMembers[],
): ItemWithTitleInt[] => {
  const filteredCrew = crew.reduce((acc: ItemWithTitleInt[], value) => {
    filters.forEach((filter, i) => {
      if (
        value[filter.filterBy] === filter.filterName &&
        !acc[i]?.items.includes(value.name)
      ) {
        if (!acc[i]) {
          return [
            ...acc,
            (acc[i] = {
              title: filter.position,
              items: [value.name],
            }),
          ];
        } else {
          return [
            ...acc,
            (acc[i] = {
              ...acc[i],
              items: [...acc[i].items, value.name],
            }),
          ];
        }
      }
      return acc;
    });
    return acc;
  }, []);
  return filteredCrew;
};
