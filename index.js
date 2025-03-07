const Contact = require("./contact");
const AddressBook = require("./addressBook");

try {
    // Create an instance of AddressBook
    const myAddressBook = new AddressBook();

    // Create some contacts
    const contact1 = new Contact("Amit", "Sharma", "Sector 15", "Noida", "Uttar Pradesh", "201301", "9876543210", "amit.sharma@example.com");
    const contact2 = new Contact("Rohit", "Verma", "MG Road", "Bangalore", "Karnataka", "560001", "7890123456", "rohit.verma@example.com");
    const contact3 = new Contact("Sita", "Patel", "Connaught Place", "Delhi", "Delhi", "110001", "9123456789", "sita.patel@example.com");
    const contact4 = new Contact("Neha", "Gupta", "Park Street", "Kolkata", "West Bengal", "700016", "8787654321", "neha.gupta@example.com");

    // Add contacts
    console.log("\nAdding contacts...");
    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);
    myAddressBook.addContact(contact3);

    // Display contacts
    console.log("\nAll Contacts:");
    myAddressBook.displayContacts();

    // Search for a contact by city
    console.log("\nSearching for contacts in New York:");
    myAddressBook.viewPersonsByCity("New York");

    // Search for a contact by state
    console.log("\nSearching for contacts in California:");
    myAddressBook.viewPersonsByState("CA");

    // Count contacts by city
    console.log("\nCount of contacts in Chicago:");
    myAddressBook.countByCity("Chicago");

    // Count contacts by state
    console.log("\nCount of contacts in New York:");
    myAddressBook.countByState("NY");

    // Edit a contact
    console.log("\nEditing John Doe's phone number...");
    myAddressBook.editContact("John Doe", { phoneNumber: "111-222-3333" });

    // Delete a contact
    console.log("\nDeleting Jane Smith...");
    myAddressBook.deleteContact("Jane Smith");

    // Display updated contacts
    console.log("\nUpdated Contacts:");
    myAddressBook.displayContacts();

    // Sorting contacts
    console.log("\nSorting Contacts by Name:");
    myAddressBook.sortContactsByName();

    console.log("\nSorting Contacts by City:");
    myAddressBook.sortContactsByCity();

    console.log("\nSorting Contacts by State:");
    myAddressBook.sortContactsByState();

    console.log("\nSorting Contacts by Zip:");
    myAddressBook.sortContactsByZip();

} catch (error) {
    console.error("\nAn error occurred:", error.message);
}
