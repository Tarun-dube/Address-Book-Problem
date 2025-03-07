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
    findContact(name){
        return this.contacts.find(contact=>contact.firstName===name||contact.lastName===name);
    }
    editContact(name,newDetails){
        let contact=this.findContact(name);
        if(contact){
            Object.assign(contact,newDetails);
            console.log("Contact updated successfully");
        }
        else {
            console.log("Contact not found!");
        }
    }

}
module.exports=AddressBook;