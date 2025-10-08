$(document).ready(function () {
    //alert('customer service '+contextPath);


$('#getcustomers').click(function(event) {
    event.preventDefault();
    alert('getcustomers');
    custnumber = $('#custnumber').val();
    console.log('custnumber---'+custnumber);
    $.ajax({
           type: "GET",
           url: "/customer/getcustomers",
           data: { 'custnumber': custnumber },
           dataType: "json",
           success: function(data){
                alert('response--------'+data)
                populateTable(data);
           },
           error: function(xhr, data, error){
               alert('error'+error);
           }
    });
 });

 $("#savenewcustomer").click(function(event){
    event.preventDefault();
    alert('save new customer');
    var formData = {
                    "cust_uid": $('#cust_uid').val(),
                    "custnumber": $('#custnumber').val(),
                    "custname": $('#custname').val(),
                    "email_address": $('#email_address').val(),
                    "phone": $('#phone').val()
                };
    console.log('formData---'+JSON.stringify(formData));
    var url = '/customer/savecustomer/new'
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(formData),
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        success: function(response){
            console.log('Success:', response);
            alert('Data saved successfully!');
            window.location.href = '/customer/searchcustomer';
        },
        error: function(xhr, data, error){
            console.error('Error:', error);
            alert('Error saving data.'+error);
         }
    });
 });

 $("#saveexistingcustomer").click(function(event){
     event.preventDefault();
     alert('save existing customer');
     var formData = {
                     "cust_uid": $('#cust_uid').val(),
                     "custnumber": $('#custnumber').val(),
                     "custname": $('#custname').val(),
                     "email_address": $('#email_address').val(),
                     "phone": $('#phone').val()
                 };
     console.log('formData---'+JSON.stringify(formData));
     var url = '/customer/savecustomer/edit'
     $.ajax({
         type: 'POST',
         url: url,
         data: JSON.stringify(formData),
         contentType: 'application/json; charset=utf-8',
         dataType: "json",
         success: function(response){
             console.log('Success:', response);
             alert('Data saved successfully!');
             window.location.href = '/customer/searchcustomer';
         },
         error: function(xhr, data, error){
             console.error('Error:', error);
             alert('Error saving data.'+error);
          }
     });
  });

function populateTable(jsonData) {
    var $tableBody = $('#customer_data');
    $tableBody.empty(); // Clear existing content if any
    console.log('jsonData-------------------',jsonData);

    if (jsonData && jsonData.length >  0) {
         $.each(jsonData, function(index, item) {
            var cust_uid = item.cust_uid;
            console.log('cust_uid-------------',cust_uid);
            var row = $('<tr>').attr('data-id', cust_uid); ;
            // Assuming 'item' is an object with properties like 'prop1', 'prop2', 'prop3'

            row.append($('<td>').text(item.cust_uid));
            row.append($('<td>').text(item.custname));
            row.append($('<td>').text(item.custnumber));
            row.append($('<td>').text(item.email_address));
            row.append($('<td>').text(item.phone));
            //var editbutton = "<button class="editcustomer" id="editcustomer">Edit</button>"
            var url = '/customer/editcustomer/?cust_uid='+cust_uid
            var editbutton = '<a href="+url+" class="editcustomer" id="editcustomer">Edit</a>'
            var newLink = $('<a>');
            newLink.attr('href', '/customer/editcustomer/?cust_uid=' + cust_uid);
            newLink.attr('class','editcustomer');
            newLink.attr('id','editcustomer');
            newLink.text('Edit');


            console.log('editbutton-------------',newLink);
            row.append($('<td>').append(newLink));
            //row.append($('<td>').html(editbutton));
            $tableBody.append(row);
        });
     }else{
        var row = $('<tr>');
        row.append($('<td colspan="7">').text('customer data not found!'));
        $tableBody.append(row);
     }
}

//$('#cust_table').on('click', '.editcustomer', function() {
//    var row = $(this).closest('tr');
//    var rowId = row.data('id');
//    alert('rowid---------'+rowId);
//    alert('row---------'+JSON.stringify(row));
//    $.ajax({
//               type: "GET",
//               url: "http://localhost:9090/customer/editcustomer",
//               data: { 'custnumber': rowId },
//               dataType: "json",
//               success: function(data){
//                    console.log('success--------'+data)
//               },
//               error: function(xhr, data, error){
//                   console.log('error'+error);
//               }
//        });
//});

});
