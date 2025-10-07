import logo from './logo.svg';
import './App.css';
import './main.css';
import Tabs from './components/Tabs';
import './components/tabs.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(`API URL: ${apiUrl}`);
const envname = process.env.REACT_APP_ENV_NAME;
console.log(`ENV NAME: ${envname}`);
const reactjslogo = require('./images/reactjs.png');

const Home = () => <h2>Home Page</h2>;
const Customer = () => <h2>Customer Page</h2>;
const Book = () => <h2>Book Page</h2>;
const Searchcustomer = () => <h2>Search Customer Info</h2>;
const Addcustomer = () => <h2>Add/Edit Customer Info</h2>;
const Searchbook = () => <h2>Search Book Details</h2>;
const Editbook = () => <h2>Add/Edit Book Info</h2>;
const SearchS3file = () => <h2>Search AWS S3 file</h2>;
const Uploads3file = () => <h2>Upload AWS S3 file</h2>;
const Contact = () => <h2>Contact Us</h2>;

function App() {

  const tabData = [
      { id: 'HOME', label: 'Home', content: 'Main Content.' },
      { id: 'Customer', label: 'Customer', content: 'Customer info' },
      { id: 'Book', label: 'Book', content: 'Books Info' },
      { id: 'AWSS3', label: 'Aws S3', content: 'AWS S3 files info' },
      { id: 'Contact', label: 'Contact', content: 'Api Info' }
    ];

  return (
    <div className="App">
       <header className="App-header">
           <h1><img src={reactjslogo} height="80px" width="270"/>
                  React {envname} environment
            <img src={reactjslogo} height="80px" width="270"/></h1>
        </header>
        <Router>
          <Tabs tabs={tabData} />
          <div className="tab-content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/book" element={<Book />} />
              <Route path="/customer/searchcustomer" element={<Searchcustomer />} />
              <Route path="/customer/editcustomer" element={<Addcustomer />} />
              <Route path="/book/searchbook" element={<Searchbook />} />
              <Route path="/book/editbook" element={<Editbook />} />
              <Route path="/awss3/searcs3files" element={<SearchS3file />} />
              <Route path="/awss3/uploads3file" element={<Uploads3file />} />
              <Route path="/contactus" element={<Contact />} />
            </Routes>
          </div>
        </Router>

    </div>
  );
}

export default App;
