import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/UseNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearchPage';
import Header from './Header'
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();

  return (

    <div>
        <Header/>
        {
          showGptSearch ? <GptSearch/> 
          :<>
           <Maincontainer/>
           <SecondaryContainer/>
          </>
        }

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