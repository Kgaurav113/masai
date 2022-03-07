import './App.css';
import Books from './components/books';
import Pens from './components/pens';
import Notebooks from './components/notebooks';
import Inkpens from './components/ink';

function App() {
  return (
    <div className='App'>
      <Books />
      <Pens />
      <Notebooks />
      <Inkpens />
    </div>
  );
}

export default App;
