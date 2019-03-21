 function address(street,city,state) {
   this.street;
   this.city;
   this.state;
 }


function contact (firstname,secondname,phonenumber,email,street,city,country) {
  this.firstname = firstname;
  this.secondname = secondname;
  this.phonenumber = phonenumber;
  this.email = email;
  this.address = {};
  this.address.street = street;
  this.address.city = city;
  this.address.country = country;
  contact.Fulladdress = function(){
    return this.street + ', ' + this.city + ', ' + this.state;
  };
  }

 var art = new contact("art","byam","0787","art@gmail.com","street1", "kla","ug")
 console.log(art);














  /*Use your knowledge of objects to create a constructor called Contact that represents objects from n phone contacts address book. It should contain

  firstname name
  second name
  phone number
  email
  address
  Store the Address as an abject which contains street, city, country.

  Add a prototype method that returns the full Address of the user in form of street + ", " + city + " " + state

  Optional:
  > Add ways of editing and deleting addresses from your address book

  > Add an ID field to your address, so that I can look it up using its numeric ID.

  > Can you add functionality that sends deleted contacts to a trash can (temporary memory) so that they are not deleted completely the first time and can be recovered later using a recover function?*/
