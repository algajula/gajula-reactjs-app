import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams  } from 'react-router-dom';



function CustomerEditComponent() {
    console.log('----CustomerEditComponent--')
    const payloadInitial = {
        cust_uid: "1111",
        custNumber: "1111",
        custName: "TEST",
        emailAddress: "TEST@gmail.com",
        phone: "9997772223",
      };
    const [customer, setCustomer] = useState(payloadInitial);
    const setCust_uid = (cust_uid) => {
        setCustomer.cust_uid = cust_uid
    }
    const setCustNumber = (custNumber) => {
        setCustomer.custNumber = custNumber
    }
    const setCustName = (custName) => {
        setCustomer.custName = custName
    }
    const setEmailAddress = (emailAddress) => {
        setCustomer.emailAddress = emailAddress
    }
    const setPhone = (phone) => {
        setCustomer.phone = phone
    }

    const { actionType } = useParams();
    let buttonText = '';
    let buttonClass = '';
    const location = useLocation();
    let temp;
    console.log('actionType--',actionType);
    if (actionType === 'edit') {
        buttonText = 'UPDATE';
        buttonClass = 'UPDATE';
        if (location.state){
            const state = location.state;
            console.log('state-',state);
            temp = state?.obj;
            customer.cust_uid = temp.cust_uid;
            customer.custNumber = temp.custNumber;
            customer.custName = temp.custName;
            customer.emailAddress = temp.emailAddress;
            customer.phone = temp.phone;
        }
     } else if (actionType === 'new') {
        buttonText = 'SAVE';
        buttonClass = 'SAVE';
      }

    const savecustomer = async (event) => {
        console.log('---save customer---------')
        event.preventDefault();
        console.log('custName:', customer.custName);
    };

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3 align="left">Add/Modify Customer</h3>
            <form action="#"  id="customerform">
                <table border="1" align="left" style={{ backgroundColor: '#a9d1b0', borderColor: '#003366' }}>
                    <tr>
                        <td>Custamer Number:
                            <label>
                                <input type="text" name="custnumber" id="custnumber"
                                    value={ customer.custNumber} onChange={(e) => setCustNumber(e.target.value)} /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Custamer Name:
                            <label>
                                <input type="text" name="custname" id="custname"
                                    value={ customer.custName} onChange={(e) => setCustName(e.target.value)} /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address:
                            <label>
                                <input type="text" name="email_address" id="email_address"
                                    value={ customer.emailAddress} onChange={(e) => setEmailAddress(e.target.value)}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:
                            <label>
                                <input type="text" name="phone" id="phone"
                                    value={ customer.phone} onChange={(e) => setPhone(e.target.value)}  /> </label>
                        </td>
                    </tr>
                     <tr>
                         <td>
                             <input type="hidden" name="cust_uid" id="cust_uid" value = {customer.cust_uid} />
                         </td>
                     </tr>
                    <tr>
                        <td colspan="2" style= {{ textAlign: 'center'}}>
                            <button className={buttonClass} onClick={savecustomer}>
                                {buttonText}
                              </button>
                        </td>
                    </tr>
                </table>
             </form>
        </div>
    </div>
</div>

);



}
export default CustomerEditComponent;