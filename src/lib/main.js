function getloginpage_old(){
    alert("The paragraph was clicked.");
    $.ajax({
        type: "GET",
        url: "login",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        success: function (data) {
            alert('success==='+data);
            $('#content').empty().load('html/login.html', function() {
                $('#username').val(data.user.username);
                $('#gender').val(data.user.gender);
                $('#mobile').val(data.user.mobile);
                $('#country').val(data.user.country);
                return true;
            });

        }
    });
}

function loginuser() {
    alert('login_submit');
    /*let data = JSON.stringify($('#loginform').serialize());*/
    let data = JSON.stringify( $('#loginform').serializeArray() );
    alert(data);
    $.ajax({
        type: "POST",
        url: "login",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        data: data,
        success: function (jsondata) {
            alert('success==='+jsondata);
            $('#content').empty().load('html/welcome.html', function() {
                $('#username').val(data.userinfo.username);
                $('#gender').val(data.userinfo.gender);
                $('#mobile').val(data.userinfo.mobile);
                $('#country').val(data.userinfo.country);
                return true;
            });
        }
    });
}