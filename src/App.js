import logo from './logo.svg';
import './App.css';
import APiRouters from './components/GajulaRouterComponent';


const apiUrl = process.env.REACT_APP_API_URL;
console.log(`API URL: ${apiUrl}`);
const envname = process.env.REACT_APP_ENV_NAME;
console.log(`ENV NAME: ${envname}`);
const reactjslogo = require('./images/reactjs.png');

function App() {

  return (
    <div className="App">
         <APiRouters />
    </div>
  );
}

export default App;
