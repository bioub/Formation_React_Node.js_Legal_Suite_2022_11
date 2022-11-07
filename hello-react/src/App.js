import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import CounterControlled from './CounterControlled';
import CounterUncontrolled from './CounterUncontrolled';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';
import Todos from './todos/Todos';

function App() {
  const [prenom, setPrenom] = useState('Romain');
  const [color, setColor] = useState('Bleu');
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hello name={prenom} /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Hello name={"Romain"} />
      <Hello name="Romain" age={20} isTrainer />
      <Clock format="HH:mm" />
      <h2>CounterControlled</h2>
      <CounterControlled count={count} step={step} onIncrement={setCount} onStepChange={setStep} />
      <CounterControlled count={count} step={step} onIncrement={setCount} onStepChange={setStep} />
      <CounterControlled count={count} step={step} onIncrement={setCount} onStepChange={setStep} />
      <h2>CounterUncontrolled</h2>
      <CounterUncontrolled />
      <CounterUncontrolled />
      <CounterUncontrolled />
      <ExHelloWorld />
      <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} />
      <Select items={['Rouge', 'Vert', 'Bleu']} selected={color} onSelected={(newColor) => setColor(newColor)} />
      <p>Vous avez sélectionné : {color}</p>
      <Todos />
    </div>
  );
}

export default App;
