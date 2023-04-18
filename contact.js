$(document).ready(function (){ 
    $('#addContactPopup').hide();
    $('#updateContactPopup').hide();
    $('#homePage').click(() => {
        $("#addContactPopup").hide();
        $('#updateContactPopup').hide();
        $('.view-contact-details').show();
    });
    $("#add-contact").click(function () {
        $('.view-contact-details').hide();
        $("#addContactPopup").show();
        $('#updateContactPopup').hide();
    });
    $('#submitContact').click(function () {
        var n = document.getElementById("addContactPopup").value;
   
        $("#addContactPopup").hide();
        $('.view-contact-details').show();
        $('#updateContactPopup').hide();
    });
    $('#upadteContact').click(function () {
        var n = document.getElementById("addContactPopup").value;
        console.log(n);
        $("#addContactPopup").hide();
        $('.view-contact-details').show();
        $('#updateContactPopup').hide();
    });
    $('.cancel').click(function () {
        $("#addContactPopup").hide();
        $('#updateContactPopup').hide();
        $('.view-contact-details').show();
    })
    $('#delete-contact').click(() => {
        const response = confirm("Are you sure you want to delete the contact ?");
        if (response) {
            alert("Contact has been deleted.");
        }
    });
    $('#edit-contact').click(() => {
        $('.view-contact-details').hide();
        $("#addContactPopup").hide();
        $('#updateContactPopup').show();
    });
    
    let localdata= [];
    let contact = [];
    localdata = JSON.parse(localStorage.getItem('data'));
    let id = 0;
    if(!localdata){
        $("#people-list ul").append(
            `<li> 
                <h6>${"No contact Added."} </h6>
            </li>`);
    }
    if(localdata){
        contact = [...localdata];
    }

    //on click of submit button to add conatct details
    $('#submitContact').click(function (e) {

        if(localdata){

            id = localdata.length
        }

        e.preventDefault();

        let name = $('#details-name').val();
        let email = $('#details-email').val();
        let mob = $('#details-mob').val();
        let ldline = $('#details-landline').val();
        let addr = $('#details-addr').val();
        let web = $('#details-web').val();

        let person = {
            id:id,
            name: name,
            email: email,
            mobile: mob,
            landline: ldline,
            website: web,
            address: addr
        };

        id++;

        contact.push(person);

        localStorage.setItem('data', JSON.stringify(contact));

        location.reload();
    });

    // rendering the contacts in the li 
    contact.forEach(element=>{
      
        $("#people-list ul").append(
            // onclick="${showDetails(element)}"
           
            `<li class="item" id=${element.id}> 
                <h2>${element.name} </h2>
                <h5>${element.email} <br>
                    ${element.mobile}
                </h5>                                
            </li>`);
    });
   
    // showing the details of the contact on click of <li>
    $("#people-list ul li").on('click',function(){           
        // let user = element;
       const id = parseInt($(this).attr("id"));

       let localdata= [];
       localdata = JSON.parse(localStorage.getItem('data'));
        
       let contact = localdata.find(p=>p.id ==id);
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
        Website: ${contact.landline}
        </div>
        <div id="website">
        Website: ${contact.website}
        </div>
        <div id="addr">
            Address:${contact.address}
        </div>`

        document.getElementById("edit-contact").innerHTML = 
        `
            <a id="edit" onclick ="editDetailForm()" > <img src="/download.jpg" alt="Edit contact" height="15px" width="15px">EDIT</a>
        `

        document.getElementById("delete-contact").innerHTML = 
        `
        <a id="delete"><img src="/Trash.jpg" alt=" Delete Contact" height="20px" width="20px">DELETE</a>

        `
        // editDetailForm = (data)=>{    '${JSON.stringify(contact)}'
        //     let contact = 
        // }
        editDetailForm = ()=>{

            $('#updateName').attr('value', contact.name);
            $('#updateEmail').attr('value', contact.email);
            $('#updateMob').attr('value', contact.mobile);
            $('#updateLandline').attr('value', contact.landline);
            $('#updateWebsite').attr('value', contact.website);
            $('#updateAddr').attr('value', contact.address);

        }

    });


    
});
































 //     $("#people-list ul").append(
    //         `<li> 
    //             <h2>${element.name} </h2>
    //             <h5>${element.email} <br>
    //                 ${element.mobile}
    //             </h5>                                
    //         </li>`);
    // });



// var cont=[
//     {
//         name: "Chandermani",
//         email:"Chandermani@technovert.com",
//         mobile: +91123456789,
//         landline: 02224373075,
//         website: "www.google.com",
//         address: "Madhapur"
//     },
//     {
//         name: "Chandermani12",
//         email:"Chandermani@technovert.com",
//         mobile: +91123456789,
//         landline: 02224373075,
//         website: "www.google.com",
//         address: "Madhapur"
//     },
//     {
//         name: "Chandermani13",
//         email:"Chandermani@technovert.com",
//         mobile: +91123456789,
//         landline: 02224373075,
//         website: "www.google.com",
//         address: "Madhapur"
//     },
// ];

// const result = cont.map(element => {
//     return element;
//   });
// console.log(result);



// let addContactPopup = document.getElementById('addContactPopup');
// console.log(addContactPopup);

// addContactPopup.addEventListener("submit", (e)=>{
//     e.preventDefault();
    
//     let name = $('#details-name').val();
//     console.log(name);
// })
// window.onload =function(){
//     document.getElementById('addContactPopup').addEventListener('submit', function(){
//         var name = document.getElementById('detials-name').value;
//         console.log(name);
//         console.log('hello');
//     });
// }







// {
        //     id: id++,
        //     name: "Chandermani",
        //     email: "Chandermani@technovert.com",
        //     mobile: +91123456789,
        //     landline: 02224373075,
        //     website: "www.google.com",
        //     address: "Madhapur"
        // },
        // {
        //     id: id++,
        //     name: "Sashi Pagadala ",
        //     email: "sashi@technovert.com ",
        //     mobile: +91123456789,
        //     landline: 02224373075,
        //     website: "www.google.com",
        //     address: "Madhapur"
        // },
        // {
        //     id: id++,
        //     name: "Praveen Battula",
        //     email: "battula@technovert.com",
        //     mobile: +91123456789,
        //     landline: 02224373075,
        //     website: "www.google.com",
        //     address: "Madhapur"
        // },