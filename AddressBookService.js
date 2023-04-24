class Services  {
    // fetch object using id
    getContactById(id){
        let localdata= [];
        localdata = JSON.parse(localStorage.getItem('data'));
        let contact = localdata.find(p=>p.id === id);

        return contact;
    }
    // return contact array to render the contact list
   getLoacldata() {
        let localdata= [];
        let contact = [];
        localdata = JSON.parse(localStorage.getItem('data'));
        if(!localdata || localdata==""){
            $("#peopleList").append(`<h6>${"No contact Added."} </h6>`);
        // localStorage.clear();
        }
        if(localdata){
            contact = [...localdata];
        }
        return contact;
    }

    // add contact details to the address book
    addcontactDetails(name, email, mob, ldline, web, addr){
            let localdata= [];
            let contact = [];
            localdata = JSON.parse(localStorage.getItem('data'));
            let id;
            if(!localdata || localdata==""){
                $("#peopleList").append(`<h6>${"No contact Added."} </h6>`);
                id=1;
            // localStorage.clear();
            }
            if(localdata){
                contact = [...localdata];
                id = localdata[localdata.length-1].id;
                id++;
            }

            let person = {
                id:id,
                name: name,
                email: email,
                mobile: mob,
                landline: ldline,
                website: web,
                address: addr
            };

            contact.push(person); 
            localStorage.setItem('data', JSON.stringify(contact));
            
            location.reload();
    }
    
    //delete contact from the list wuth the help of id
    delete_contact(id){
        let localdata= [];
        localdata = JSON.parse(localStorage.getItem('data'));
        let contact = localdata.find(p=>p.id === id);
        const response = confirm("Are you sure you want to delete the contact?");
        if (response) {
            if(localdata){
                    let newLocaldata = localdata.filter((p) => p!=contact);
                    localStorage.setItem('data', JSON.stringify(newLocaldata));                    
                    location.reload();
                    alert("Contact has been deleted.");
            }else
            {
                $("#peopleList").append(`<h6>${"No contact Added."} </h6>`);
            }
                
        }
    };

    //update contact with the help of id
    update_contact_detail(id){
        let localdata= [];
        localdata = JSON.parse(localStorage.getItem('data'));
        let contact = localdata.find(p=>p.id === id);
        
            contact.name = $('#formDetailName').val();
            contact.email = $('#formDetailEmail').val();
            contact.mobile = $('#formDetailMob').val();
            contact.landline =$('#formDetailLandline').val();
            contact.website = $('#formDetailAddr').val();
            contact.address = $('#formDetailWeb').val();
        
        localStorage.setItem('data',JSON.stringify(localdata));
        location.reload();
    }

}