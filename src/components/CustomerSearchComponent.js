import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerSearchComponent() {
    console.log('----CustomerSearchComponent--')
    const navigate = useNavigate();
    const [custnumber, setCustnumber] = useState("all");
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getcustomers = async () => {
        if (!custnumber) {
          alert('Please enter an custnumber.');
          return;
        }
         const params = new URLSearchParams({
          custnumber
        }).toString();
        setLoading(true);
        setError(null); // Clear previous errors
        console.log('custnumber-----',custnumber);
        const url = `http://localhost:8080/gajula/api/v1/customer/ui/getCustomer/${custnumber}`;

        try {
          const response = await fetch(url, {
            method: 'GET', // Explicitly setting GET method (optional for GET)
            headers: {
              'Content-Type': 'application/json',
              //'Authorization': 'Bearer YOUR_AUTH_TOKEN', // Example authorization header
              //'Custom-Header': 'My-Value' // Example custom header
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          console.log('result----------',result);
          setData(result.result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

    const goToRoutePage = (item) => {
            console.log('cust_uid--',item.cust_uid)
            const customer = {
              actionType: 'edit',
              cust_uid: item.cust_uid,
              obj: item
            };
            navigate('/customer/editcustomer/edit', { state: customer });
      };

    const handleCustomerNumberChange = (event) => {
        setCustnumber(event.target.value);
    };


return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3>Customer Search</h3>
            <form action = "#" method = "GET" name="customer">
                <p> Enter Custamer Number:
                    <label>
                        <input type="text" name="custnumber"
                                id="custnumber" value={custnumber}
                                placeholder="Enter Customer Number"
                                onChange={handleCustomerNumberChange} />
                    </label>
                    <button name="getcustomers" id="getcustomers" class="getcustomers"
                            onClick={getcustomers} disabled={loading}>
                            {loading ? 'Fetching...' : 'Fetch Data'}
                    </button></p>
            </form>
        </div>
        <div align="center">
            <h3>Customer Details</h3>
           {error && <p style={{ color: 'red' }}>Error: {error}</p>}

               <table style={{ backgroundColor: '#d0e887', borderColor:'#003366'}} id="cust_table">
               <thead>
                   <td>cust_uid</td>
                   <td>custname</td>
                   <td>custnumber</td>
                   <td>email_address</td>
                   <td>phone</td>
                   <td>Action</td>
               </thead>
               {data.length > 0 && (
                    <tbody style={{backgroundColor: '#ffffff'}} id="customer_data">
                       {data.map(item => (
                         <tr key={item.cust_uid}>
                           <td>{item.cust_uid}</td>
                           <td>{item.custName}</td>
                           <td>{item.custNumber}</td>
                           <td>{item.emailAddress}</td>
                           <td>{item.phone}</td>
                           <td>
                                <button id="editcustomer" className="editcustomer"
                                    onClick={() => goToRoutePage(item)} >
                                Edit </button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 )}
               </table>

        </div>
    </div>
</div>

);

}

export default CustomerSearchComponent;