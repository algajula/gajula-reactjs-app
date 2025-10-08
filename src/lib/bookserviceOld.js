$(document).ready(function () {
    //alert('book service '+contextPath);

    $('#savebook').click(function() {
          //alert('save book');
          let data = { "title": $('#title').val(),
                     "genre": $('#genre').val(),
                     "publicationDate": $('#publicationDate').val(),
                     "price":$('#price').val()
                     };
          console.log('Request---'+JSON.stringify(data));
          $.ajax({
              type: "POST",
              url: contextPath+"/api/v1/book/ui/saveBook/save",
              data: JSON.stringify(data),
              contentType: "application/json",
              headers:{
                 'Content-Type': 'application/json',
                 'Accept': 'application/json',
                 'X-Requested-With': 'XMLHttpRequest',
              },
              success: function(data){
                      var response = JSON.parse(JSON.stringify(data));
                      console.log("response============="+response);
                      if(response['statusCode'] == '00'){
                        console.log("============= SUCCESS ================");
                        var success = response['result'];
                        console.log(" Response============"+success);
                        alert("New Book Added Successfully!");
                      }else if(response['statusCode'] == '01' ||
                               response['statusCode'] == '02' ||
                               response['statusCode'] == '03' ){
                        console.log("============= SUCCESS ================");
                        var faillure = response['result'];
                        console.log(" Response============"+faillure);
                        console.log("hasErrors===="+faillure.hasErrors);
                        console.log("labels===="+faillure.errorlabels);
                        updateFormErrorlabels(faillure);
                      }
                     /*$.each(JSON.parse(JSON.stringify(data)), function(key, value) {
                      });*/
                  return true;
              },
              error: function(error){
                  alert('error'+error);
              }
          });
     });

     function updateFormErrorlabels(data){
            console.log("======= updateFormErrorlabels =============");
            $("label[for='titleerr']").html('');
            $("label[for='genreerr']").html('');
            $("label[for='priceerr']").html('');
            if (data.hasErrors == true){
                $("label[for='titleerr']").html(data.errorlabels.title);
                $("label[for='genreerr']").html(data.errorlabels.genre);
                $("label[for='priceerr']").html(data.errorlabels.price);
            }
            return;
     }
});
