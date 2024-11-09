import './index.css';
import Sidepanel from './components/scenes/sidepanel/Sidepanel';
import Toppanel from './components/scenes/toppanel/Toppanel';

function App() {
  return (
    <div className="app">
      <Toppanel />
      <Sidepanel />
    </div>
  );
}

export default App;
