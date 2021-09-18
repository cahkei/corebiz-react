
import './App.css';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Navigation from './components/Navigation';
import { data } from "./data.js";


const App = () => {
  return (
   <main className="main">
      <Profile {...data.user}/>
      <Navigation {...data.navigation}/>
      <Posts content={data.content}/>
   </main>
  );
}

export default App;
