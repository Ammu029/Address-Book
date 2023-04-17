$(document).ready(function () {
    var id =0;
    var cont=[];
    var contact = [
        {
            id: id++,
            name: "Chandermani",
            email: "Chandermani@technovert.com",
            mobile: +91123456789,
            landline: 02224373075,
            website: "www.google.com",
            address: "Madhapur"
        },
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
    ];

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
        console.log(n);
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
    $('#delete').click(() => {
        const response = confirm("Are you sure you want to delete the contact ?");
        if (response) {
            alert("Contact has been deleted.");
        }
    });
    $('#edit').click(() => {
        $('.view-contact-details').hide();
        $("#addContactPopup").hide();
        $('#updateContactPopup').show();
    });

    $('#people-list ul li').on("click", function(){
        console.log("my id is :"+this.id);
    });
    
    //on click on submit button to add conatct details
    $('#submitContact').click(function (e) {
        e.preventDefault();

        let name = $('#details-name').val();
        let email = $('#details-email').val();
        let mob = $('#details-mob').val();
        let ldline = $('#details-landline').val();
        let addr = $('#details-addr').val();
        let web = $('#details-web').val();
        console.log(name);
        var person = {
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

        const result = cont.map(element => {
            return element;
        });
        window.localStorage.setItem('data', JSON.stringify(contact));
        
        let localdata=localStorage.getItem("data");
        let jsonData = JSON.parse(localdata);
        console.log(jsonData);
        jsonData.forEach(element=> 
        {
            console.log(element);
            cont.push(element);
           
        });
        cont.forEach(element=>{
                $("#people-list ul ").append(
                    `
                         <li> 
                               <h2>${element.name} </h2>
                               <h5>${element.email} <br>
                                 ${element.mobile}
                               </h5>                                
                         </li>
                    `);
        })
    })
   
    
});



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


