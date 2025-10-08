import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '..//css/tabs.css';
import '..//css/menutabs.css';
import Tabs from './TabsComponent';
import CustomerSearchComponent from './CustomerSearchComponent';
import CustomerEditComponent from './CustomerEditComponent';
import BookSearchComponent from './BookSearchComponent';
import BookEditComponent from './BookEditComponent';
import AWSS3SearchComponent from './AWSS3SearchComponent';
import AWSS3FileUploadComponent from './AWSS3FileUploadComponent';
import ContactUsComponent from './ContactUsComponent';
import HomeComponent from './HomeComponent'

const Home = () => <h2>Home Page</h2>;
const Customer = () => <h2>Customer Page</h2>;
const Book = () => <h2>Book Page</h2>;
const Searchcustomer = () => <searchCustomerComponent />;
const Addcustomer = () => <h2>Add/Edit Customer Info</h2>;
const Searchbook = () => <h2>Search Book Details</h2>;
const Editbook = () => <h2>Add/Edit Book Info</h2>;
const SearchS3file = () => <h2>Search AWS S3 file</h2>;
const Uploads3file = () => <h2>Upload AWS S3 file</h2>;
const Contact = () => <h2>Contact Us</h2>;

function APiRouters() {
    console.log('----GajulaRouterComponent--')
    return (
        <Router>
            <Tabs />
          <div className="tab-content">
            <Routes>
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/book" element={<Book />} />
              <Route path="/customer/searchcustomer" element= {<CustomerSearchComponent />} />
              <Route path="/customer/editcustomer" element= {<CustomerEditComponent />} />
              <Route path="/book/searchbook" element={<BookSearchComponent />} />
              <Route path="/book/editbook" element={<BookEditComponent />} />
              <Route path="/awss3/searcs3files" element={<AWSS3SearchComponent />} />
              <Route path="/awss3/uploads3file" element={<AWSS3FileUploadComponent />} />
              <Route path="/contactus" element={<ContactUsComponent />} />
            </Routes>
          </div>
        </Router>
    );
}

export default APiRouters;