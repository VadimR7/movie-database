import { ItemWithTitleInt } from '../../common/ts/types';
import ItemWithTitle from './ItemWithTitle';

interface DetailsListProsp {
  detailsData: ItemWithTitleInt[];
}

const DetailsList = ({ detailsData }: DetailsListProsp) => {
  detailsData.forEach((detail) => {
    if (!detail.items.length) {
      detail.items.push('No info');
    }
  });

  return (
    <div>
      {detailsData.map((category) => (
        <ItemWithTitle key={category.title} itemsData={category} />
      ))}
    </div>
  );
};

export default DetailsList;
