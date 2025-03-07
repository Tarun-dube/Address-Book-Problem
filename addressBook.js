const Contact = require("./contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        let exists = this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if (exists) {
            console.log("Duplicate entry! Contact not added.");
        } else {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        }
    }

    displayContacts() {
        console.log(this.contacts);
    }

    searchByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    searchByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    // 🔹 View persons by City
    viewPersonsByCity(city) {
        let peopleInCity = this.searchByCity(city);
        if (peopleInCity.length > 0) {
            console.log(`People in ${city}:`);
            peopleInCity.forEach(contact => console.log(`${contact.firstName} ${contact.lastName}`));
        } else {
            console.log(`No contacts found in ${city}.`);
        }
    }

    // 🔹 View persons by State
    viewPersonsByState(state) {
        let peopleInState = this.searchByState(state);
        if (peopleInState.length > 0) {
            console.log(`People in ${state}:`);
            peopleInState.forEach(contact => console.log(`${contact.firstName} ${contact.lastName}`));
        } else {
            console.log(`No contacts found in ${state}.`);
        }
    }

    // 🔹 Fixed: Properly returns the count
    getContactCount() {
        return this.contacts.reduce((count, _) => count + 1, 0);
    }

    findContact(name) {
        const [firstName, lastName] = name.split(" ");
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(name, newDetails) {
        let contact = this.findContact(name);
        if (contact) {
            Object.assign(contact, newDetails);
            console.log("Contact updated successfully!");
        } else {
            console.log("Contact not found!");
        }
    }

    // 🔹 Fixed: Proper deletion check
    deleteContact(name) {
        const initialLength = this.contacts.length;
        const [firstName, lastName] = name.split(" ");

        this.contacts = this.contacts.filter(contact => !(contact.firstName === firstName && contact.lastName === lastName));

        if (this.contacts.length < initialLength) {
            console.log("Contact deleted successfully!");
        } else {
            console.log("Contact not found.");
        }
    }

    // 🔹 Count persons by City
    countByCity(city) {
        let count = this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase())
                                 .reduce((count, _) => count + 1, 0);
        console.log(`Number of people in ${city}: ${count}`);
        return count;
    }

    // 🔹 Count persons by State
    countByState(state) {
        let count = this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase())
                                 .reduce((count, _) => count + 1, 0);
        console.log(`Number of people in ${state}: ${count}`);
        return count;
    }

    // 🔹 Sort contacts by Name
    sortContactsByName() {
        let sortedContacts = [...this.contacts].sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log("\nSorted Contacts:");
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }

    // 🔹 Sort contacts by City
    sortContactsByCity() {
        let sortedContacts = [...this.contacts].sort((a, b) => a.city.localeCompare(b.city));
        console.log("\nSorted Contacts by City:");
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }

    // 🔹 Sort contacts by State
    sortContactsByState() {
        let sortedContacts = [...this.contacts].sort((a, b) => a.state.localeCompare(b.state));
        console.log("\nSorted Contacts by State:");
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }

    // 🔹 Fixed: Properly sorts Zip as a number
    sortContactsByZip() {
        let sortedContacts = [...this.contacts].sort((a, b) => parseInt(a.zip) - parseInt(b.zip));
        console.log("\nSorted Contacts by Zip:");
        sortedContacts.forEach(contact => console.log(contact.toString()));
    }
}

module.exports = AddressBook;
