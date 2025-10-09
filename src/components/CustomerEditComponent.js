import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams  } from 'react-router-dom';



function CustomerEditComponent() {
    console.log('----CustomerEditComponent--')
    const payloadInitial = {
        cust_uid: 1111,
        custNumber: "1111",
        custName: "TEST",
        emailAddress: "TEST@gmail.com",
        phone: "9997772223",
      };
    const [customer, setCustomer] = useState(payloadInitial);
    const setCust_uid = (event) => {
        console.log('setCust_uid onchange')
        const temp = payloadInitial;
        payloadInitial.cust_uid = event.target.value;
        //customer.cust_uid = event.target.value;
    }
    const setCustNumber = (event) => {
        console.log('setCustNumber onchange')
        const temp = payloadInitial;
        payloadInitial.custNumber = event.target.value;
        setCustomer.custNumber = event.target.value;
    }
    const setCustName = (event) => {
        console.log('setCustName onchange')
        let temp = payloadInitial;
        payloadInitial.custName = event.target.value;
        setCustomer.custName = event.target.value;
    }
    const setEmailAddress = (event) => {
        customer.emailAddress = event.target.value;
    }
    const setPhone = (event) => {
        customer.phone = event.target.value;
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
        console.log('customer:', customer);
        try {
          console.log('actionType--',actionType);
          const url = `http://localhost:8080/gajula/api/v1/customer/ui/saveCustomer/${actionType}`;
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer),
          });
         if (response.ok) {
            const result = await response.json();
            console.log('Form submitted successfully:', result);
          } else {
            console.error('Form submission failed:', response.statusText);
          }
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3 align="left">Add/Modify Customer</h3>
            <form action="#"  id="customerform">
                <table border="1" align="left" style={{ backgroundColor: '#a9d1b0', borderColor: '#003366' }}>
                    <tbody>
                    <tr>
                        <td>Custamer Number:
                            <label>
                                <input type="text" name="custNumber" id="custNumber"
                                    value={ customer.custNumber} onChange={setCustNumber} /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Custamer Name:
                            <label>
                                <input type="text" name="custName" id="custName"
                                    value={ customer.custName} onChange={setCustName} /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address:
                            <label>
                                <input type="text" name="emailAddress" id="emailAddress"
                                    value={ customer.emailAddress} onChange={setEmailAddress}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:
                            <label>
                                <input type="text" name="phone" id="phone"
                                    value={ customer.phone} onChange={setPhone}  /> </label>
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
                    </tbody>
                </table>
             </form>
        </div>
    </div>
</div>

);



}
export default CustomerEditComponent;