import './App.css';
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import DevPage from "./components/DevPage/DevPage";
import CompPage from './components/CompPage/CompPage';
import LocatPage  from "./components/LocatPage/LocatPage";
import FieldPage from './components/FieldPage/FieldPage';
import RandPage from './components/RandPage/RandPage';
import PfootPage from './components/PfootPage/PfootPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <DevPage />
      <CompPage />
      <LocatPage />
      <FieldPage />
      <RandPage />
      <PfootPage />
      <Footer />

    </div>
  );
}

export default App;
