import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';
import Todos from './todos/Todos';

function App() {
  const prenom = 'Romain';
  const [color, setColor] = useState('Bleu');
  return (
    <div className="App">
      <Hello name={prenom} /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Hello name={"Romain"} />
      <Hello name="Romain" age={20} isTrainer />
      <Clock format="HH:mm" />
      <Counter />
      <Counter />
      <Counter />
      <ExHelloWorld />
      <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} />
      <Select items={['Rouge', 'Vert', 'Bleu']} selected={color} onSelected={(newColor) => setColor(newColor)} />
      <p>Vous avez sélectionné : {color}</p>
      <Todos />
    </div>
  );
}

export default App;
