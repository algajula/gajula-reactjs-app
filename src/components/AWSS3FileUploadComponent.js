import React, { useState, useRef } from 'react';

function AWSS3FileUploadComponent(){
    console.log('----AWSS3FileUploadComponent--');
    const inputFormRefs = useRef({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    let buttonText = 'Upload';
    let buttonClass = 'Upload';
    const [uploadResponse, setUploadResponse] = useState([]);
    const awss3bean = {
        bucketName:  'bakash-documents',
        bucketFolderName: "",
        effectedDate: new Date(),
        s3file: ""
    };
    const s3fileupload = async (event) => {
        event.preventDefault();
        const formInput = inputFormRefs.current;
        console.log('---s3fileupload------', formInput);
        const formData = {};
        if (inputFormRefs.current) {
              const file = inputFormRefs.current['s3file'].files[0];
              const formData = new FormData();
              formData.append('file', file);
              setLoading(true);
              setError(null); // Clear previous errors
              try {
                  const params = new URLSearchParams({
                        bucketName: inputFormRefs.current['bucketName'].value,
                        bucketFolderName: inputFormRefs.current['bucketFolderName'].value
                  });
                  const url = `http://localhost:8080/gajula/api/v1/templates/s3fileupload?${params.toString()}`;
                  console.log('url---',url);
                  const response = await fetch(url, {
                      method: 'POST',
                      body: formData
                  });
                  if (response.ok) {
                      const response = await response.json();
                      console.log('Form submitted successfully:', response.result);
                      setUploadResponse(response.result);
                    } else {
                      console.error('Form submission failed:');
                      setUploadResponse('Form submission failed!');
                    }
            } catch (err) {
              console.error('Error during s3fileupload:', error);
              setError(err.message);
              setUploadResponse('Error during s3fileupload!');
            } finally {
              setLoading(false);
            }
         }
    };

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="center">
            <h3>Amazon S3 file Upload</h3>
            <form action = "#" method = "POST" name="s3fileupload" enctype="multipart/form-data">
                <p> Enter Bucket Name:
                    <label> <input type="text" name="bucketName" id="bucketName"
                        ref={(el) => (inputFormRefs.current.bucketName = el)}
                        defaultValue={awss3bean.bucketName} />
                </label></p>
                <p> Enter Date Effected:
                    <label> <input type="text" name="bucketFolderName" id="bucketFolderName"
                        ref={(el) => (inputFormRefs.current.bucketFolderName = el)}
                        defaultValue={awss3bean.bucketFolderName}/>
                 </label></p>
                 <p> Enter Date Effected:
                 <label> <input type="text" name="effectedDate" id="effectedDate"
                     ref={(el) => (inputFormRefs.current.effectedDate = el)}
                     defaultValue={awss3bean.effectedDate}/>
                </label></p>
                <p> Upload File:
                    <label> <input type="file" name="s3file" id="s3file"
                        ref={(el) => (inputFormRefs.current.s3file = el)} />
                </label><br/></p>
                <p>
                    <button className={buttonClass} onClick={s3fileupload} disabled={loading}>
                           {loading ? 'Fetching...' : buttonText}
                    </button>
                </p>
            </form>
        </div>
    </div>
</div>


);
}
export default AWSS3FileUploadComponent;