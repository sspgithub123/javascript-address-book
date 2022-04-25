console.log("Good Morning!");
console.log("Today we shall work on Address Book System using Node JS.");  

class Contact{

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }


    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}

let contact = new Contact("Tony","Stark","10880 Malibu Point 90265","New York City","New York",10001,9876432387,"TonyStark@Yahoo.com");
console.log(contact.toString());