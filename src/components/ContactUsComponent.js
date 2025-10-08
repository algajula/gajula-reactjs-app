

function ContactUsComponent(){
    console.log('----ContactUsComponent--')

const api_services = ("1. /awss3/searcs3files/ \n 2. /awss3/gets3files/ 3. /awss3/uploads3file \n"+
      "4. /awss3/downloads3file/ \n  5. /customer/searchcustomer/ \n  6. /customer/editcustomer/ \n"+
      "7. /customer/getcustomers/ \n 8. /customer/savecustomer/<string:actiontype> \n"+
      "9. /book/searchbook/ \n 10. /book/editbook/ \n  11. /book/getbooks/ \n"+
      "12. /book/savebook/<string:actiontype> \n 13. /login  \n 14. /callback \n "+
      "15. /getloggedinuser \n 16. /userinfo \n 17. /profilephoto \n 18. /logout");
const multilines = api_services.split('\n');
return (

<div class="content_container">
    <div class="content" id="content">
        <div align="left">
            <h3>API Services </h3>
                <label>
                    Services:
                    {multilines.map((line, index) => (
                            <p key={index}>{line}</p>
                          ))}
                </label>
        </div>
    </div>
</div>
);
}

export default ContactUsComponent;