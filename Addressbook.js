$(document).ready(function(){
    let ABService = new AddressBookService();
    var id;
    $('#addContactPopup').hide();
    $('#homePage').click(() => {
        $("#addContactPopup").hide();
        $('.view-contact-details').hide();
    });
    $("#addContact").click(function () {
        $('.view-contact-details').hide();
        $("#addContactPopup").show();
        $("#submitContact").show();
        $("#updateContact").hide();

        $('#formDetailName').attr('value', "");
        $('#formDetailEmail').attr('value', "");
        $('#formDetailMob').attr('value', "");
        $('#formDetailLandline').attr('value', "");
        $('#formDetailWeb').attr('value', "");
        $('#formDetailAddr').attr('value', "");
    });
    $('#updateContact').click(function () {
        let form = $("#addContactPopup");
        form.on('submit', function(event){
            event.preventDefault();
            form[0].reset();
        });
        if(validate()){
            $("#addContactPopup").hide();
            $('.view-contact-details').hide();
        }
    });
    $('.cancel').click(function () {
        $("#addContactPopup").hide();
        $('.view-contact-details').show();
    })
    $('#editContact').click(() => {
        $('.view-contact-details').hide();
        $("#addContactPopup").show();
        $("#updateContact").show();
        $("#submitContact").hide();
    });
    $("#peopleList").click(function(){
        $("#addContactPopup").hide();
        $('.view-contact-details').show();
    });
    $("#submitContact").click(function(){
        
        if(validate()){
            $("#addContactPopup").hide();
            $('.view-contact-details').hide();
        }
    })

    //validate name
        $("#nameCheck").hide();
        $("#formDetailName").change(validateUsername);
        function validateUsername() 
        {
            let usernameValue = $("#formDetailName").val();
            if (usernameValue == "" || usernameValue == " ") {
                $("#nameCheck").show();
                return false;
            // } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            // $("#nameCheck").show();
            // $("#nameCheck").html("**length of username must be between 3 and 10");
            // usernameError = false;
            // return false;
            // } 
            }else {
            $("#nameCheck").hide();
            }
        }
    
        //validate email
        $("#emailCheck").hide();
        $("#formDetailEmail").change(validateEmail);
        function validateEmail() 
        {
            let emailValue = $("#formDetailEmail").val();
            if (emailValue == "" || emailValue == " ") {
                $("#emailCheck").show();
                return false;
            }else {
                 $("#emailCheck").hide();
            }
        }
    
        //validate mob
        $("#mobCheck").hide();
        $("#formDetailMob").change(validateMobile);
        function validateMobile() 
        {
            let mobValue = $("#formDetailMob").val();
            if (mobValue == "" || mobValue == " ") {
                $("#mobCheck").show();
                return false;
            }else if(isNaN(mobValue)){
                 $("#mobCheck").show();
                 $("#mobCheck").html("**Enter numeric values only");
            }
            else {
                 $("#mobCheck").hide();
            }
        }
    
        //validate landline
        $("#ldlineCheck").hide();
        $("#formDetailLandline").change(validateLandline);
        function validateLandline() 
        {
            let ldlineValue = $("#formDetailLandline").val();
            if (ldlineValue == "" || ldlineValue == " ") {
                $("#ldlineCheck").show();
                return false;
            }
            else if(isNaN(ldlineValue)){
                $("#ldlineCheck").show();
                $("#ldlineCheck").html("**Enter numeric values only");
           }else {
                 $("#ldlineCheck").hide();
            }
        }
    
        //validate website
        $("#webCheck").hide();
        $("#formDetailWeb").change(validateWeb);
        function validateWeb() 
        {
            let webValue = $("#formDetailWeb").val();
            if (webValue == "" || webValue == " ") {
                $("#webCheck").show();
                return false;
            }else {
                 $("#webCheck").hide();
            }
        }
    
        //validate address
        $("#addrCheck").hide();
        $("#formDetailAddr").change(validateAddr);
        function validateAddr() 
        {
            let addrValue = $("#formDetailAddr").val();
            if (addrValue == "" || addrValue == " ") {
                $("#addrCheck").show();
                return false;
            }else {
                 $("#addrCheck").hide();
            }
        }     

        // validate the data before form submit
        function validate()
        {  
            let name = $("#formDetailName").val();
            let email = $("#formDetailEmail").val();
            let num= $('#formDetailMob').val();
            let landline = $("#formDetailLandline").val();
            let website = $("#formDetailWeb").val();
            let address = $("#formDetailAddr").val();
    
            if(!name || !email  || !num  || !landline || !website || !address ){
                alert("Please fill all the details");
                return false;
            }
            return true;   
        }  

    renderContactList();
    $('#submitContact').on('click', function (e) {  
       if(validate()){
           e.preventDefault();
        
                let name = $('#formDetailName').val();
                let email = $('#formDetailEmail').val();
                let mob = $('#formDetailMob').val();
                let ldline = $('#formDetailLandline').val();
                let addr = $('#formDetailAddr').val();
                let web = $('#formDetailWeb').val();

                ABService.addContactDetails(name, email, mob, ldline, web, addr);
        }
    
    });

    function renderContactList(){
        let contact = ABService.getLoaclData();
        if(contact){

            while($("#peopleList ul").firstChild){
                $("#peopleList ul").removeChild($("#peopleList ul").firstChild);
            }
    
            contact.forEach(element=>{
                $("#peopleList").append(
                    `<ul>
                    <li class="item" id=${element.id}> 
                            <h2>${element.name} </h2>
                            <h5>${element.email} <br>
                                ${element.mobile}
                            </h5>                                
                        </li>
                    </ul>`
                    );
            });   
        }else{
            $("#peopleList").append(`<h6>${"No user contact Added."} </h6>`);
        }
    }
    
    $("#peopleList ul li").on('click',function(){          
            id = parseInt($(this).attr("id"));
            let contact = ABService.getContactById(id);
            $("#detail-contact").html(
                `<div id="name">
                <h2>
                ${contact.name}
                </h2>
                </div>
                <div id="email">
                Email: ${contact.email}
                </div>
                <div id="cont">
                Mobile: ${contact.mobile}<br>
                Landline: ${contact.landline}
                </div>
                <div id="website">
                Website: ${contact.website}
                </div>
                <div id="addr">
                Address: ${contact.address}
                </div> `
            );

            $("#editContact").html(`<a id="edit"  > <img src="download.jpg" alt="Edit contact" height="13px" width="15px" style="transform: rotatey(44deg);">EDIT</a>`);

            $("#deleteContact").html(`<a id="delete" ><img src="Trash.jpg" alt=" Delete Contact" height="12px" width="10px">DELETE</a>`);

        // editDetailForm = ()=>{
        //         $('#formDetailName').attr('value', contact.name);
        //         $('#formDetailEmail').attr('value', contact.email);
        //         $('#formDetailMob').attr('value', contact.mobile);
        //         $('#formDetailLandline').attr('value', contact.landline);
        //         $('#formDetailWeb').attr('value', contact.website);
        //         $('#formDetailAddr').attr('value', contact.address);
        // }

        // updating the contact details on edit
        // $("#updateContact").on('click',function(e){
        //     if(validate()){
        //         e.preventDefault();

        //         ABService.updateContactDetail(id);
        //     }
            // contact.name = $('#formDetailName').val();
            // contact.email = $('#formDetailEmail').val();
            // contact.mobile = $('#formDetailMob').val();
            // contact.landline =$('#formDetailLandline').val();
            // contact.website = $('#formDetailAddr').val();
            // contact.address = $('#formDetailWeb').val();
            
            // localStorage.setItem('data',JSON.stringify(localdata));
            // location.reload();

      //  });

    });

  $("body").on('click','#edit',function(e){
    e.preventDefault();
    let contact = ABService.getContactById(id);

    $('#formDetailName').attr('value', contact.name);
    $('#formDetailEmail').attr('value', contact.email);
    $('#formDetailMob').attr('value', contact.mobile);
    $('#formDetailLandline').attr('value', contact.landline);
    $('#formDetailWeb').attr('value', contact.website);
    $('#formDetailAddr').attr('value', contact.address);

    // let test = $(this).parent("#detail-contact").attr("id");
    // console.log(test);
  });
    

    // updating the contact details on edit
    $("#updateContact").on('click',function(e){
        if(validate()){
            e.preventDefault();

            ABService.updateContactDetail(id);
        }
        // contact.name = $('#formDetailName').val();
        // contact.email = $('#formDetailEmail').val();
        // contact.mobile = $('#formDetailMob').val();
        // contact.landline =$('#formDetailLandline').val();
        // contact.website = $('#formDetailAddr').val();
        // contact.address = $('#formDetailWeb').val();
        
        // localStorage.setItem('data',JSON.stringify(localdata));
        // location.reload();

    });

     // delete the contacts
     $("body").on('click','#delete', function(){
        let p = ABService.deleteContact(id);

        if(!p){
         $("#peopleList").append(`<h6>${"No user contact Added."} </h6>`);
        }
         // const response = confirm("Are you sure you want to delete the contact?");
         // if (response) {
         //     if(localdata){
         //         let newLocaldata = localdata.filter((p) => p!=contact);

         //         localStorage.setItem('data', JSON.stringify(newLocaldata));
         //         alert("Contact has been deleted.");
         //         location.reload();
         //     }else{
         //         $("#peopleList").append(`<h6>${"No contact Added."} </h6>`);
         //     }
             
         // }
     });
});


