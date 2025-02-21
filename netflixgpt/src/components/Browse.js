import useNowPlayingMovies from '../hooks/UseNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
        <Header/>
        <Maincontainer/>
        <SecondaryContainer/>
         {/* Main Container
              - vedio background
              - vedio title
            Secondary Container
              - movies lust *n
              - movies card*n
              */}
    </div>
  )
}

export default Browse