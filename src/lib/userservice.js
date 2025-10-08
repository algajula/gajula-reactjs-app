$(document).ready(function () {

$.ajax({
           type: "GET",
           url: "/userinfo",
           dataType: "json",
           success: function(response){
                //alert('/userinfo---'+response)
                var $userdiv = $('.login-right-div');
                $userdiv.empty(); // Clear existing content if any
                if (response && response.length >  0) {
                    var data = JSON.parse(response)
                    //console.log('userinfo-----------'+data)
                    var result = '<label>'+data.username+'</lable>' +
                        '<img src="/profilephoto" height="5%" width="10%">' +
                        '<label>'+data.email+'</lable> <br/' +
                        '<a href="/logout">Logout</a>' ;
                    $userdiv.append(result)
                    get_token();
                }else{
                    var result = '<a href="/login">Login</a>' ;
                    $userdiv.append(result)
                }
           },
           error: function(xhr, data, error){
               //alert('/userinfo----'+error);
               var $userdiv = $('.login-right-div');
               $userdiv.empty(); // Clear existing content if any
               var result = '<a href="/login">Login</a>' ;
               $userdiv.append(result)
           }
    });


function get_token() {
    $.ajax({
           type: "GET",
           url: "/get_token",
           dataType: "json",
           success: function(response){
                //console.log('--get_token---'+response.access_token)
                return response.access_token;
           },
           error: function(xhr, data, error){
               //console.log('get_token error----'+error);
               return response.error;
           }
    });
}

});
