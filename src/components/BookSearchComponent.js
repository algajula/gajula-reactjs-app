

function BookSearchComponent(){
    console.log('----BookSearchComponent--')

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3>Book Search</h3>
            <form action = "#" method = "GET" name="customer">
                <p> Enter Book ID:
                    <label>
                        <input type="text" name="custnumber" id="custnumber"/>
                    </label>
                    <button name="getbooks" id="getbooks" class="getbooks">Search</button></p>
            </form>
        </div>
        <div align="center">
            <h3>Book Details</h3>
            <table style={{ backgroundColor: '#d0e887', borderColor: '#003366' }} id="book_table">
                <thead>
                <td>cust_uid</td>
                <td>custname</td>
                <td>custnumber</td>
                <td>email_address</td>
                <td>phone</td>
                <td>Action</td>
                </thead>
                <tbody style= {{ backgroundColor: '#ffffff'}} id="book_data"> </tbody>
            </table>
        </div>
    </div>
</div>


);
}
export default BookSearchComponent;