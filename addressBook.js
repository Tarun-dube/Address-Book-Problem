const Contact=require("./contact");

class AddressBook{
    constructor(){
        this.contacts=[];
    }

    addContact(contact){
        if(contact instanceof Contact){
            this.contacts.push(contact);
        }
        else {
            throw new Error("Invalid object cantact");
            
        }

    }
    displayContacts(){
        console.log(this.contacts);
    }

}
module.exports=AddressBook;