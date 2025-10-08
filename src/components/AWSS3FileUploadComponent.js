

function AWSS3FileUploadComponent(){
    console.log('----AWSS3FileUploadComponent--')

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3>Amazon S3 file Upload</h3>
            <form action = "#" method = "POST" name="s3fileupload" enctype="multipart/form-data">
                <p> Enter Bucket Name: <label> <input type="text" name="bucketname" id="bucketname" value="bakash-trigger"/> </label></p>
                <p> Enter Date Effected: <label> <input type="text" name="effectedDate" id="effectedDate"/> </label></p>
                <p> Upload File: <label> <input type="file" name="s3file" id="s3file"/> </label><br/></p>
                <p> <button name="uploads3file" id="uploads3file" class="uploads3file">Search</button></p>
            </form>
        </div>
    </div>
</div>


);
}
export default AWSS3FileUploadComponent;