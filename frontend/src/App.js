import './App.css';
import { NewTaskCard } from './Card';
import { Form } from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {NewTaskCard()}
        {Form()}
      </header>
    </div>
  );
}

export default App;
