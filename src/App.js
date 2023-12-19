import './App.css';
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import DevPage from "./components/DevPage/DevPage";
import CompPage from './components/CompPage/CompPage';
import LocatPage  from "./components/LocatPage/LocatPage"

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <DevPage />
      <CompPage />
      <LocatPage />
    </div>
  );
}

export default App;
