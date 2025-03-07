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

}
module.exports=AddressBook;