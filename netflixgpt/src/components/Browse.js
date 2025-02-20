import useNowPlayingMovies from '../hooks/UseNowPlayingMovies'
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();

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