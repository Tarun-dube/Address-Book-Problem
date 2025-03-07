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
    searchByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }
        // 🔹 New: View persons by City
        viewPersonsByCity(city) {
            let peopleInCity = this.searchByCity(city);
            if (peopleInCity.length > 0) {
                console.log(`People in ${city}:`);
                peopleInCity.map(contact => console.log(`${contact.firstName} ${contact.lastName}`));
            } else {
                console.log(`No contacts found in ${city}.`);
            }
        }
    
        // 🔹 New: View persons by State
        viewPersonsByState(state) {
            let peopleInState = this.searchByState(state);
            if (peopleInState.length > 0) {
                console.log(`People in ${state}:`);
                peopleInState.map(contact => console.log(`${contact.firstName} ${contact.lastName}`));
            } else {
                console.log(`No contacts found in ${state}.`);
            }
        }

    getContactCount(){
        this.contacts.reduce(count=>count+1,0);
    }
    findContact(name){
        const [firstName,lastName]=name.split(" ");

        return this.contacts.find(contact=>contact.firstName===firstName||contact.lastName===lastName);

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
    deleteContact(name){
      const initialLength=this.contacts.length;
      const [firstName,lastName]=name.split(" ");

      this.contacts=this.contacts.filter(contact=>contact.firstName!==firstName&&contact.lastName!==lastName);

      if(initialLength<this.contacts.length){
        console.log("Contact deleted successfully!");
      }
      else {
        console.log("Contact not found");
      }

    }

}
module.exports=AddressBook;