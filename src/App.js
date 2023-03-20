import './App.css';
import Store from './components/store/Store';
import { products } from './mock/data';

function App() {
  return (
    <div>
      <header>
        <Store products={products}/>
      </header>
    </div>
  );
}

export default App;
