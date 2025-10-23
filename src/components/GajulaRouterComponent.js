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
import LoginComponent from './LoginComponent'
import ProtectedRoute from './ProtectedRoute';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>Contact Us</h2>;

function APiRouters() {
    console.log('----GajulaRouterComponent--')
    return (
        <Router>
            <Tabs />
          <div className="tab-content">
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/home" element={<HomeComponent />} />

              <Route path="/customer/searchcustomer"
                    element= {<ProtectedRoute>  <CustomerSearchComponent /> </ProtectedRoute> } />

              <Route path="/customer/editcustomer/:actionType"
              element= {<ProtectedRoute>  <CustomerEditComponent /> </ProtectedRoute> } />

              <Route path="/book/searchbook"
              element= {<ProtectedRoute>  <BookSearchComponent /> </ProtectedRoute> } />

              <Route path="/book/editbook"
              element= {<ProtectedRoute>  <BookEditComponent /> </ProtectedRoute> } />

              <Route path="/awss3/searcs3files"
              element= {<ProtectedRoute>  <AWSS3SearchComponent /> </ProtectedRoute> } />

              <Route path="/awss3/uploads3file"
              element= {<ProtectedRoute>  <AWSS3FileUploadComponent /> </ProtectedRoute> } />

              <Route path="/contactus" element={<ContactUsComponent />} />
               <Route path="/about" element={<About />} />
               <Route path="/login" element={<LoginComponent />} />
            </Routes>
          </div>
        </Router>
    );
}

export default APiRouters;