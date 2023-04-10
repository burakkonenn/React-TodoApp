import './App.css';
import Navbar from './components/Header'
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;
