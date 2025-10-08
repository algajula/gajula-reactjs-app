

function AWSS3SearchComponent(){
    console.log('----AWSS3SearchComponent--')

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3>Amazon S3 file Search</h3>
            <form action = "#" method = "GET" name="customer">
                <p> Enter Bucket Name: <label> <input type="text" name="bucketname" id="bucketname"/> </label>
                    Enter Folder Name: <label> <input type="text" name="foldername" id="foldername"/> </label>
                    <button name="gets3files" id="gets3files" class="gets3files">Search</button></p>
            </form>
        </div>
        <div align="center">
            <h3>Amazon S3 Files</h3>
            <table style= {{ backgroundColor: '#d0e887', borderColor: '#003366' }} id="awss3_table">
                <thead>
                <td>File Name</td>
                <td>File Size</td>
                <td>last_modified</td>
                <td>storage_class</td>
                <td>Action</td>
                <td>Download</td>
                </thead>
                <tbody style={{ backgroundColor: '#ffffff'}} id="awss3_data"> </tbody>
            </table>
        </div>
    </div>
</div>



);
}
export default AWSS3SearchComponent;