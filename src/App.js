import LoginForm from "./components/LoginForm/LoginForm.js"
import { styles } from './App.style'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Prices from "./components/Prices/Prices.js";

function App() {
  return (
    <div className={styles.container}>
      <LoginForm />
      <Prices/>
    </div>
  );
}

export default App;
