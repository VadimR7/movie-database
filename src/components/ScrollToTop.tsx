import { useEffect } from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import { withRouter } from 'react-router-dom';

function ScrollToTop({
  history,
}: React.PropsWithChildren<RouteComponentProps<any, StaticContext, unknown>>) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter((history) => ScrollToTop(history));
