const AddressBook = require('./addressBook');
const Contact = require('./contact');

let myAddressBook = new AddressBook();

try {
    let contact1 = new Contact("John", "Doe", "123 Main St", "Mumbai", "Maharashtra", "400001", "9876543210", "john.doe@example.com");
    let contact2 = new Contact("Jane", "Doe", "456 Elm St", "Delhi", "Delhi", "110011", "8765432109", "jane.doe@example.com");
    let contact3 = new Contact("Alice", "Smith", "789 Park Ave", "Mumbai", "Maharashtra", "400002", "7654321098", "alice.smith@example.com");

    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);
    myAddressBook.addContact(contact3);

    console.log("People in Mumbai:", myAddressBook.searchByCity("Mumbai"));
    console.log("People in Maharashtra:", myAddressBook.searchByState("Maharashtra"));
        // 🔹 Count persons by city
        myAddressBook.countByCity("Mumbai");

        // 🔹 Count persons by state
        myAddressBook.countByState("Maharashtra");
    

} catch (error) {
    console.error(error.message);
}
