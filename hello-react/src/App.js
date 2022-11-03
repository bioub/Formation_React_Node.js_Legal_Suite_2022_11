import './App.css';
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';

function App() {
  const prenom = 'Romain';
  return (
    <div className="App">
      <Hello name={prenom} /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Hello name={"Romain"} />
      <Hello name="Romain" age={20} active />
      <Clock format="HH:mm" />
      <Counter />
      <Counter />
      <Counter />
      <ExHelloWorld />
      <ExMultiStateButton items={['Rouge', 'Vert', 'Bleu']} />
    </div>
  );
}

export default App;
