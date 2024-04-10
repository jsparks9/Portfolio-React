import TitleBar from './components/topmost/TitleBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/topmost/NavBar';
import { LocationProvider } from './router/LocationProvider';
import RoutesWithAnimation from './router/RoutesWithAnimation';
import { useEffect, useState } from 'react';
import GitProfile from './models/GitProfile';
import { apiGetUser } from './remote/GitService';

function App() {
  const [profile, setProfile] = useState<GitProfile>({
    login: '',
    id: 0,
    avatar_url: '',
    html_url: '',
    bio: '',
  });

  useEffect(() => {
    const fetchData = async () => {
        const result = await apiGetUser();
        setProfile(result.payload);
    };
    fetchData();
  }, []);

  return (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic|Droid+Serif:400,700,400italic,700italic"
      rel="stylesheet"
      type="text/css"
    />
    <title>Newspaper Style Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Router>
        <TitleBar/>
        <Navbar profile={profile}/>
        <LocationProvider>
          <RoutesWithAnimation profile={profile}/>
        </LocationProvider>
    </Router>
</>

  );
}

export default App;
