import classes from './tabs.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface TabsProps {}

function Tabs(){

  const [activeTab, setActiveTab] = useState('home'); // Set initial active tab
  const navigate = useNavigate();
  const goToRoutePage = (tabName, path) => {
        console.log('path--',path)
        console.log('tabName---',tabName)
        setActiveTab(tabName);
        navigate(path);
  };

  return (
      <div className="tabs-container">
        <div className="tab-buttons">
        <button
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => goToRoutePage('home', '/home')} > Home</button>
        <button
          className={activeTab === 'customer' ? 'active' : ''}
          onClick={() => goToRoutePage('book', '/customer')} > Customer</button>
        <button
          className={activeTab === 'book' ? 'active' : ''}
          onClick={() => goToRoutePage('book', '/book')} > Book</button>

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

      </div>
      </div>
    );
}
export default Tabs;
