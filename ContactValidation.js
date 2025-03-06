 class Contact{
    // regex patterns for validation
    constructor(firstName, lastName, address, city, state, zip, phone, email){
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    const addressPattern = /^[a-zA-Z0-9\s]{4,}$/;
    const zipPattern = /^[1-9][0-9]{5}$/;
    const phonePattern = /^[789]\d{9}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //validation
    if (!namePattern.test(firstName) || !namePattern.test(lastName))
        throw new Error("Invalid Name! First and Last name should start with a capital letter and have at least 3 characters.");
    if (!addressPattern.test(address) || !addressPattern.test(city) || !addressPattern.test(state))
        throw new Error("Invalid Address/City/State! Must have at least 4 characters.");
    if (!zipPattern.test(zip)) 
        throw new Error("Invalid ZIP Code! Must be a 6-digit number.");
    if (!phonePattern.test(phone)) 
        throw new Error("Invalid Phone Number! Should be a 10-digit Indian number.");
    if (!emailPattern.test(email)) 
        throw new Error("Invalid Email!");

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
}

}
module.export=Contact;