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

    sortContactsByName() {
        let sortedContacts = [...this.contacts].sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log("\nSorted Contacts:");
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }

}
module.exports=AddressBook;