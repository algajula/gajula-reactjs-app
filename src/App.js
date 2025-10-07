import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import './components/tabs.css';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(`API URL: ${apiUrl}`);
const envname = process.env.REACT_APP_ENV_NAME;
console.log(`ENV NAME: ${envname}`);

const reactjslogo = require('./images/reactjs.png');

function App() {

  const tabData = [
      { id: 'tab1', label: 'Home', content: 'Main Content.' },
      { id: 'tab2', label: 'Customer', content: 'Customer info' },
      { id: 'tab3', label: 'Book', content: 'Books Info' },
      { id: 'tab4', label: 'Aws S3', content: 'AWS S3 files info' },
      { id: 'tab5', label: 'Contact', content: 'Api Info' }
    ];

  return (
    <div className="App">
       <header className="App-header">
           <h1><img src={reactjslogo} height="80px" width="270"/>
                  React {envname} environment
            <img src={reactjslogo} height="80px" width="270"/></h1>
        </header>
       <div className="customtabs">
          <Tabs tabs={tabData} />
       </div>
    </div>
  );
}

export default App;
