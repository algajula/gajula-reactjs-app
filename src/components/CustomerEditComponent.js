import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function CustomerEditComponent() {
    console.log('----CustomerEditComponent--')
    const location = useLocation();
    const customer = location.state;
    const cust_uid = customer?.cust_uid;
    console.log('cust_uid--',cust_uid)

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3 align="left">Add/Modify Customer</h3>
            <form action="#"  id="customerform">
                <table border="1" align="left" style={{ backgroundColor: '#a9d1b0', borderColor: '#003366' }}>
                    <tr>
                        <td>Custamer Number:
                            <label><input type="text" name="custnumber" id="custnumber" value={ customer?.cust_uid}/> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Custamer Name:
                            <label><input type="text" name="custname" id="custname" /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address:
                            <label><input type="text" name="email_address" id="email_address" /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone:
                            <label> <input type="text" name="phone" id="phone" /> </label>
                        </td>
                    </tr>
                     <tr>
                         <td>
                             <input type="hidden" name="cust_uid" id="cust_uid" />
                         </td>
                     </tr>
                    <tr>
                        <td colspan="2" style= {{ textAlign: 'center'}}>
                            <input type="button" id="savenewcustomer" value="Save"/>
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