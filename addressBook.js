const Contact=require("./contact");

class AddressBook{
    constructor(){
        this.contacts=[];
    }

    addContact(contact){
        let exists=this.contacts.sonme(c=> c.firstName===contact.firstName&&c.lastName===contact.lastName);
        if(exists){
            console.log("Duplicate entry! contact not added");
        }
        else {
            this.contacts.push(contact);
            console.log("Contact added successfully");            
        }

    }
    displayContacts(){
        console.log(this.contacts);
    }

}
module.exports=AddressBook;