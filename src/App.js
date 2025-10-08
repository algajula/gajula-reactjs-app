import logo from './logo.svg';
import './App.css';
import APiRouters from './components/GajulaRouterComponent';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(`API URL: ${apiUrl}`);
const envname = process.env.REACT_APP_ENV_NAME;
console.log(`ENV NAME: ${envname}`);
const reactjslogo = require('./images/reactjs.png');

function App() {

    /* <header className="App-header">
           <h1><img src={reactjslogo} height="80px" width="270"/>
                  React {envname} environment
            <img src={reactjslogo} height="80px" width="270"/></h1>
        </header>*/
  return (
    <div className="App">
        <APiRouters />
    </div>
  );
}

export default App;
