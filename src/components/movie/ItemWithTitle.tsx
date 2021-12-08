import { ItemWithTitleInt } from '../../common/ts/types';
import Item from './Item';

interface ItemWithTitleProps {
  itemsData: ItemWithTitleInt;
}

const ItemWithTitle = ({ itemsData }: ItemWithTitleProps) => {
  const { title, items } = itemsData;
  return (
    <div className="item-with-title">
      <div className="item-with-title__title">
        <h3>
          <span>{title}</span>
        </h3>
      </div>
      <div className="item-with-title__names">
        {items.map((name) => (
          <Item key={name} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ItemWithTitle;
