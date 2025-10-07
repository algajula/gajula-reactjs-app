import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import './components/tabs.css';

function App() {

  const tabData = [
      { id: 'tab1', label: 'About Us', content: 'This is the content for About Us.' },
      { id: 'tab2', label: 'Services', content: 'Explore our wide range of services.' },
      { id: 'tab3', label: 'Contact', content: 'Get in touch with us.' },
    ];

  return (
    <div className="App">
       <div className="customtabs">
          <h1>Dynamic React Tabs</h1>
          <Tabs tabs={tabData} />
       </div>
    </div>
  );
}

export default App;
