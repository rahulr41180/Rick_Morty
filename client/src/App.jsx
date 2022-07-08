
import './App.css';

import { Search } from "./components/Search";
import { BasicUserCard } from "./components/BasicUserCard";
import DetailsUserCard from "./components/DetailsUserCard";

function App() {
  return (
    <div className="App">
      <h1 className="title">Rick and Morty Search</h1>
      <Search />
      <BasicUserCard />
      <DetailsUserCard />
    </div>
  );
}

export default App;
