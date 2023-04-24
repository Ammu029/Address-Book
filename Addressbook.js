$(document).ready(function(){
    let obj = new Services();
  
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

        $("#addContactPopup").hide();
        $('.view-contact-details').hide();
       
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
        $("#formDetailName").keyup(function () {
        validateUsername();
        });
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
       
        $("#formDetailEmail").keyup(function () {
        validateEmail();
        });
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
        $("#formDetailMob").keyup(function () {
        validateMobile();
        });
        function validateMobile() 
        {
            let mobValue = $("#formDetailMob").val();
            if (mobValue == " " || mobValue == null) {
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
        $("#formDetailLandline").keyup(function () {
        validateLandline();
        });
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
        $("#formDetailWeb").keyup(function () {
        validateWeb();
        });
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
        $("#formDetailAddr").keyup(function () {
        validateAddr();
        });
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

        // let localdata= [];
        // let contact = [];
        // localdata = JSON.parse(localStorage.getItem('data'));
        // let id;
        // if(!localdata || localdata==""){
        //     $("#peopleList").append(`<h6>${"No contact Added."} </h6>`);
        //     id=1;
        // // localStorage.clear();
        // }
        // if(localdata){
        //     contact = [...localdata];
        //     id = localdata[localdata.length-1].id;
        //     id++;
        //     renderContactList();
        // }

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

                obj.addcontactDetails(name, email, mob, ldline, web, addr);
                // let person = {
                //     id:id,
                //     name: name,
                //     email: email,
                //     mobile: mob,
                //     landline: ldline,
                //     website: web,
                //     address: addr
                // };
                
                // contact.push(person); 
                // localStorage.setItem('data', JSON.stringify(contact));
                
                // location.reload();
            }
    
    });

    function renderContactList(){
        let contact = obj.getLoacldata();
        while($("#peopleList ul").firstChild){
            $("#peopleList ul").removeChild($("#peopleList ul").firstChild);
        }

        contact.forEach(element=>{
            $("#peopleList ul").append(
                // onclick="${showDetails(element)}"
                `<li class="item" id=${element.id}> 
                        <h2>${element.name} </h2>
                        <h5>${element.email} <br>
                            ${element.mobile}
                        </h5>                                
                    </li>
                `);
        });   
    }

    $("#peopleList ul li").on('click',function(){          
           const id = parseInt($(this).attr("id"));

            let contact = obj.getContactById(id);

            document.getElementById("detail-contact").innerHTML =  
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
            Address:${contact.address}
            </div> `
       
            document.getElementById("editContact").innerHTML = 
            `
                <a id="edit" onclick ="editDetailForm()" > <img src="/download.jpg" alt="Edit contact" height="13px" width="15px" style="transform: rotatey(44deg);">EDIT</a>
            `
            document.getElementById("deleteContact").innerHTML = 
            `
                <a id="delete" ><img src="/Trash.jpg" alt=" Delete Contact" height="12px" width="10px">DELETE</a>
    
            `
        editDetailForm = ()=>{
             
                $('#formDetailName').attr('value', contact.name);
                $('#formDetailEmail').attr('value', contact.email);
                $('#formDetailMob').attr('value', contact.mobile);
                $('#formDetailLandline').attr('value', contact.landline);
                $('#formDetailWeb').attr('value', contact.website);
                $('#formDetailAddr').attr('value', contact.address);
        }

        // updating the contact details on edit
        $("#updateContact").on('click',function(){
          obj.update_contact_detail(id);
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
        $("#delete").on('click', function(){
            obj.delete_contact(id);
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
    
       
});