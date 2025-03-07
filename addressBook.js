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
    getContactCount(){
        this.contacts.reduce(count=>count+1,0);
    }

}
module.exports=AddressBook;