import { FaStar } from 'react-icons/fa';

const createArray = (length: number) => [...Array(length)];

const Star = ({ selected = false }) => (
  <FaStar color={selected ? '#00e054' : 'grey'} />
);

interface StarRatingProps {
  totalStars?: number;
  selectedStars: number;
  totalVotes: number;
}

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  totalVotes,
}: StarRatingProps) {
  return (
    <div style={{ padding: '5px', lineHeight: 1.5 }}>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={Math.round(selectedStars) > i} />
      ))}
      <p>
        {selectedStars} based on {totalVotes} ratings.
      </p>
    </div>
  );
}
