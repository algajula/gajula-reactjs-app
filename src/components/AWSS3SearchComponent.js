import React, { useState, useRef } from 'react';

function AWSS3SearchComponent(){
    console.log('----AWSS3SearchComponent--')
     const inputFormRefs = useRef({});
     const [error, setError] = useState(false);
     const [loading, setLoading] = useState(false);
     let buttonText = 'Search';
     let buttonClass = 'Search';
     const [s3Files, setS3Files] = useState([]);
     const awss3bean = {
         bucketName:  'bakash-documents',
         bucketFolderName: "/"
      };

      const getS3files = async (event) => {
          event.preventDefault();
          const formData = {};
          for (const name in inputFormRefs.current) {
            formData[name] = inputFormRefs.current[name].value;
          }
          setLoading(true);
          setError(null); // Clear previous errors
          try {
            const gets3filesRequest = {
                bucketName: formData['bucketName'],
                bucketFolderName: formData['bucketFolderName']
            }
            const url = `http://localhost:8080/gajula/api/v1/aws/s3/ui/lists3files`;
            console.log('url----',url);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gets3filesRequest),
            });
            if (response.ok) {
                const gets3filesResponse = await response.json();
                console.log('Form submitted successfully:', gets3filesResponse.result);
                setS3Files(gets3filesResponse.result);
              } else {
                console.error('Form submission failed:');
                setS3Files([]);
              }
          } catch (err) {
            console.error('Error during getS3files:', error);
            setError(err.message);
            setS3Files([]);
          } finally {
            setLoading(false);
          }
        };

      const downloadS3File = (item) => {
          console.log('File Name--',item.fileName);
          const awss3bean = {
            obj: item
          };
          fetch('http://localhost:8080/gajula/api/v1/awss3/service/downloads3file/?fileName='+item.fileName+'&bucketName='+item.bucketName+'&fileType='+item.keyType) // Replace with your backend URL
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
                  return response.blob();
              })
              .then(blob => {
                  const url = window.URL.createObjectURL(new Blob([blob]));
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', item.filename); // Specify the desired filename
                  document.body.appendChild(link);
                  link.click();
                  link.parentNode.removeChild(link); // Clean up the temporary link
              })
              .catch(error => {
                  console.error('There was an error downloading the file:', error);
              });
        };

return (

<div class="content_container">
    <div class="content" id="content">

        <div align="center">
            <h3>Amazon S3 file Search</h3>
            <form action = "#" method = "GET" name="customer">
                <label> Enter Bucket Name:
                    <input type="text" name="bucketName" id="bucketName"
                        ref={(el) => (inputFormRefs.current.bucketName = el)}
                        defaultValue={awss3bean.bucketName} /> </label>
                <label> Enter Folder Name:
                    <input type="text" name="bucketFolderName" id="bucketFolderName"
                        ref={(el) => (inputFormRefs.current.bucketFolderName = el)}
                        defaultValue={awss3bean.bucketFolderName} /> </label>
                 <button className={buttonClass} onClick={getS3files} disabled={loading}>
                           {loading ? 'Fetching...' : buttonText}
                 </button>
            </form>
        </div>

        <div align="center">
            <h3>AWS S3 FIles</h3>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
               <table style={{ backgroundColor: '#d0e887', borderColor:'#003366'}} id="s3FilesData">
               <thead>
                   <td>File Name</td>
                   <td>File Size</td>
                   <td>Last Modified</td>
                   <td>location</td>
                   <td>Action</td>
               </thead>
               {s3Files.length > 0 && (
                    <tbody style={{backgroundColor: '#ffffff'}} id="s3files_data">
                       {s3Files.map(item => (
                         <tr key={item.fileName}>
                           <td>{item.fileName}</td>
                           <td>{item.contentLength}</td>
                           <td>{item.lastModified}</td>
                           <td>{item.location}</td>
                           <td>
                                <button id="downloadS3File" className="downloadS3File"
                                    onClick={() => downloadS3File(item)} >
                                Download </button>
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
export default AWSS3SearchComponent;