import { useState } from 'react';
import { LocationContext } from 'components/LocationContext';
/** with bootstrap? */
// import './main.scss';
import './styles.css';

function MyApp({ Component, pageProps }) {
  const [location, setLocation] = useState({
    selectedId: null,
    isEditing: false,
    searchText: '',
  });
  const props = { ...pageProps, ...location };

  return (
    <LocationContext.Provider value={[location, setLocation]}>
      <Component {...props} />
    </LocationContext.Provider>
  );
}

export default MyApp;
