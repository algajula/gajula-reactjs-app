import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams  } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function CustomerEditComponent() {
    console.log('----CustomerEditComponent--')
    const location = useLocation();
    const state = location.state;
    console.log('state-',state);
    const { actionType } = useParams();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [saveResponse, setSaveResponse] = useState("");
    const inputFormRefs = useRef({});

    let buttonText = '';
    let buttonClass = '';
    let temp;
    let vehicleList = {};

    const customer = {
        cust_uid:  '',
        custNumber: 1101,
        custName: 'TEST1101',
        emailAddress: 'TEST1101@gmail.com',
        phone: '1234567891',
        vin: 'Vin1101',
        vrn: 'Vrn1101',
        createdDate: new Date()
        };

    if (actionType === 'edit') {
        buttonText = 'UPDATE';
        buttonClass = 'UPDATE';
        console.log('----EDIT--');
        if (location.state){
            temp = state?.obj;
            customer.cust_uid = temp.cust_uid;
            customer.custNumber = temp.custNumber;
            customer.custName = temp.custName;
            customer.emailAddress = temp.emailAddress;
            customer.phone = temp.phone;
            vehicleList = temp.vehicleList;
            customer.vin = vehicleList[0].vin;
            customer.vrn = vehicleList[0].vrn;
        }
     } else if (actionType === 'new') {
        buttonText = 'SAVE';
        buttonClass = 'SAVE';
        console.log('----NEW--',customer);
      }

    const savecustomer = async (event) => {
        const value = inputFormRefs.current;
        console.log('---save customer---------',value)
        event.preventDefault();
        const formData = {};
        for (const name in inputFormRefs.current) {
          if( name === "createdDate"){
            console.log('IF name=',name);
            formData[name] = inputFormRefs.current[name].value + " 00:00:00";
          }else{
            console.log('ELSE name=',name);
            formData[name] = inputFormRefs.current[name].value;
          }

        }
        console.log('Form Data:', formData);
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
            setSaveResponse(result.result);
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
                                <input type="text" name="custNumber" id="custNumber" ref={(el) => (inputFormRefs.current.custNumber = el)}
                                    defaultValue={customer.custNumber}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Custamer Name:
                            <label>
                                <input type="text" name="custName" id="custName" ref={(el) => (inputFormRefs.current.custName = el)}
                                    defaultValue={customer.custName}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address:
                            <label>
                                <input type="text" name="emailAddress" id="emailAddress" ref={(el) => (inputFormRefs.current.emailAddress = el)}
                                    defaultValue={customer.emailAddress}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:
                            <label>
                                <input type="text" name="phone" id="phone" ref={(el) => (inputFormRefs.current.phone = el)}
                                    defaultValue={customer.phone} /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>VIN:
                            <label>
                                <input type="text" name="vin" id="vin" ref={(el) => (inputFormRefs.current.vin = el)}
                                    defaultValue={customer.vin}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>VRN:
                            <label>
                                <input type="text" name="vrn" id="vrn" ref={(el) => (inputFormRefs.current.vrn = el)}
                                    defaultValue={customer.vrn}  /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Created Date:
                            <label>
                                <input type="date"
                                      name="createdDate"
                                      defaultValue={customer.createdDate}
                                      ref={(el) => (inputFormRefs.current.createdDate = el)}
                                      selected={customer.createdDate}
                                      dateFormat="yyyy-MM-dd hh:mm:ss"/> </label>
                        </td>
                     </tr>
                     <tr>
                         <td>
                             <input type="hidden" name="cust_uid" id="cust_uid" ref={(el) => (inputFormRefs.current.cust_uid = el)}
                             value = {customer.cust_uid} />
                         </td>
                     </tr>
                    <tr>
                        <td colspan="2" style= {{ textAlign: 'center'}}>
                            <button className={buttonClass} onClick={savecustomer} disabled={loading}>
                                {loading ? 'Fetching...' : buttonText}
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