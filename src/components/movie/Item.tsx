interface ItemProps {
  name: string;
}

const Item = ({ name }: ItemProps) => {
  return <p className="credits-name">{name}</p>;
};

export default Item;
