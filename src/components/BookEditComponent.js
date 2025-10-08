

function BookEditComponent(){
    console.log('----BookEditComponent--')


return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3 align="left">Add/Modify Book</h3>
               <form action="#"  id="bookform">
                <table border="1" align="left" style= {{ backgroundColor: '#a9d1b0', borderColor:'#003366' }} >
                    <tr>
                        <td>Book ID:
                            <label><input type="text" name="custnumber" id="custnumber" /> </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Name:
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
                        <td colspan="2" style= {{ textAlign: 'center' }}>
                                <input type="button" id="savenewbook" value="Save"/>
                        </td>
                    </tr>
                </table>
              </form>
        </div>
    </div>
</div>


);
}
export default BookEditComponent;