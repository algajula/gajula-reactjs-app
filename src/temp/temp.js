import logo from './logo.svg';
import './App.css';
import './main.css';
import Tabs from './components/Tabs';
import './components/tabs.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { menuItems } from './components/menuData';
import MenuItem from './components/MenuItem';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(`API URL: ${apiUrl}`);
const envname = process.env.REACT_APP_ENV_NAME;
console.log(`ENV NAME: ${envname}`);

const reactjslogo = require('./images/reactjs.png');

const Home = () => <h2>Home Page</h2>;
const Searchcustomer = () => <h2>Search Customer Info</h2>;
const Addcustomer = () => <h2>Add/Edit Customer Info</h2>;
const Searchbook = () => <h2>Search Book Details</h2>;
const Addbook = () => <h2>Add Book Info</h2>;
const SearchS3file = () => <h2>Search AWS S3 file</h2>;
const Uploads3file = () => <h2>Upload AWS S3 file</h2>;
const Contact = () => <h2>Contact Us</h2>;


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

        <Router>

            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer/searchcustomer" element={<Searchcustomer />} />
            <Route path="/customer/addcustomer" element={<Addcustomer />} />
            <Route path="/book/searchbook" element={<Searchbook />} />
            <Route path="/book/addbook" element={<Addbook />} />
            <Route path="/awss3/searchs3file" element={<SearchS3file />} />
            <Route path="/awss3/uploads3file" element={<Uploads3file />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
        </main>
        </Router>

        <div class="navbar">
            <a href="/home">Home</a>
            <div class="subnav">
                <button class="subnavbtn">Customer <i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                    <a href="/customer/searchcustomer">Search Customer</a>
                    <a href="/customer/editcustomer">Add Customer</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">Aws S3 <i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                    <a href="/awss3/searcs3files/">Search File</a>
                    <a href="/awss3/uploads3file">Upload File</a>
                </div>
            </div>
            <div class="subnav">
                <button class="subnavbtn">Book <i class="fa fa-caret-down"></i></button>
                <div class="subnav-content">
                    <a href="/book/searchbook">Search Book</a>
                    <a href="/book/editbook">Add Book</a>
                </div>
            </div>
            <a href="/contactus">Contact</a>
        </div>

       /*<div className="customtabs">
          <Tabs tabs={tabData} />
       </div>*/
    </div>
  );
}

export default App;
