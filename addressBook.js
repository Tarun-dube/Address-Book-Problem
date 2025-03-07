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

       // 🔹 New: Count persons by City using filter & reduce
       countByCity(city) {
        let count = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase())
                                 .reduce(count => count + 1, 0);
        console.log(`Number of people in ${city}: ${count}`);
        return count;
    }

    // 🔹 New: Count persons by State using filter & reduce
    countByState(state) {
        let count = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase())
                                 .reduce(count => count + 1, 0);
        console.log(`Number of people in ${state}: ${count}`);
        return count;
    }

}
module.exports=AddressBook;