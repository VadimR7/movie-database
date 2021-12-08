import { imgBg } from '../../common/helpers';
import { getMainPoster } from '../../common/urls';

interface MainPosterProps {
  posterUrl: string;
}

const MainPoster = ({ posterUrl }: MainPosterProps) => {
  let poster;
  posterUrl ? (poster = getMainPoster(posterUrl)) : (poster = getMainPoster());

  return (
    <div className="backdrop-container">
      <div className="poster-wrapper">
        {imgBg(poster, 'backdrop-image-container')}
      </div>
      <div className="backdrop-fade" />
    </div>
  );
};

export default MainPoster;
