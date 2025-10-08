$(document).ready(function () {

$('#gets3files').click(async function(event) {
    event.preventDefault();
    alert('gets3files');
    bucketname = $('#bucketname').val();
    foldername = $('#foldername').val();
    console.log('bucketname---'+bucketname);
    const access_token = await getAccessToken();
    const bearertoken = 'Bearer '+access_token;
    //console.log('bearertoken--'+bearertoken)
    $.ajax({
           type: "GET",
           url: "/awss3/gets3files",
           headers: {
                   'Authorization': bearertoken,
                   'Content-Type': 'application/json'
               },
           data: { 'bucketname': bucketname, 'foldername':foldername },
           dataType: "json",
           success: function(data){
                alert('response--------'+data);
                populateTable(data, bucketname, foldername);
           },
           error: function(xhr, data, error){
               alert('error'+error);
           }
    });
 });

function populateTable(jsonData, bucketname, foldername) {
    var $tableBody = $('#awss3_data');
    $tableBody.empty(); // Clear existing content if an
    //console.log('jsonData.length-------',jsonData.result.length)
    //console.log('jsonData.result--',jsonData.result);

    if (jsonData.result && jsonData.result.length >  0) {
        console.log('data exist');
        var s3fileslist = jsonData.result;
        /*s3fileslist.forEach(item => {
            console.log(item.file_name);
         });*/
         $.each(jsonData.result, function(index, item) {
            console.log('ITEM-----',item);
            var file_name = item.file_name;
            console.log('file_name-------------',file_name);
            var row = $('<tr>').attr('data-id', file_name); ;
            row.append($('<td>').text(item.file_name));
            row.append($('<td>').text(item.file_size));
            row.append($('<td>').text(item.last_modified));
            row.append($('<td>').text(item.storage_class));

            /*======== EDIT ====================*/
            var url = '/awss3/edits3file/?file_name='+file_name
            var editbutton = '<a href="+url+" class="edits3file" id="edits3file">Edit</a>'
            var newLink = $('<a>');
            newLink.attr('href', '/awss3/edits3file/?file_name=' + file_name);
            newLink.attr('class','edits3file');
            newLink.attr('id','edits3file');
            newLink.text('Edit');
            row.append($('<td>').append(newLink));

            /*======== EDIT ====================*/
            var downloadLink = $('<a>');
            downloadLink.attr('href', '/awss3/downloads3file/?file_name='+file_name+'&bucket_name='+bucketname+'&folder_name='+foldername);
            downloadLink.attr('class','downloads3file');
            downloadLink.attr('id','downloads3file');
            downloadLink.text('Download');
            row.append($('<td>').append(downloadLink));
            $tableBody.append(row);
        });
     }else{
        var row = $('<tr>');
        row.append($('<td colspan="7">').text('s3files data not found!'));
        $tableBody.append(row);
     }
}


$('#uploads3file').click(function(event) {
    event.preventDefault();
    alert('uploads3file');
    //var form_data = new FormData($('#s3file')[0]);
    bucketname = $('#bucketname').val();
    effectedDate = $('#effectedDate').val();
    let formData = new FormData();
    formData.append('bucketname', bucketname);
    formData.append('effectedDate', effectedDate);
    const fileInput = document.getElementById('s3file');
    if (fileInput.files.length > 0) {
        formData.append('s3file', fileInput.files[0]);
    }
    $.ajax({
           type: "POST",
           url: "/awss3/uploads3file",
           data: formData,
           contentType: false,
           cache: false,
           processData: false,
           dataType: "json",
           success: function(data){
                alert('response--------'+data);
                if (data.result && data.result.length >  0) {
                        var response = data.result;
                        alert(response);
                }
           },
           error: function(xhr, data, error){
               alert('error'+error);
           }
    });
 });

function getAccessToken(callback) {
    return new Promise((resolve, reject) => {
        $.ajax({
               type: "GET",
               url: "/get_token",
               dataType: "json",
               success: function(response){
                    //console.log('--get_token---'+response.access_token)
                    access_token =  response.access_token;
                    resolve(access_token);
               },
               error: function(xhr, data, error){
                   //console.log('get_token error----'+error);
                   access_token = response.error;
                   reject(access_token);
               }
            });
        });
}

});