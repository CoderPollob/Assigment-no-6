 
// ==== Blood Donation Club 20 members data structure using an array and object========

const members = [

  {
    id: 1,
    name: "polllob",
    age: 23,
    location: "Bogura",
    gender: "Male",
    cellNumber: "01748717545",
    bloodGroup: "O+",
    donationHistory: ["2021-05-10", "2022-02-15"],
    lastDonation: "2023-05-13"
  },

  {
    id: 2,
    name: "Hanifa khatun",
    age: 30,
    location: "Bogura",
    gender: "Female",
    cellNumber: "01767137650",
    bloodGroup: "B-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-09-12"
  },

  {
    id: 3,
    name: "Rokiya khatun",
    age: 30,
    location: "Borisal",
    gender: "Female",
    cellNumber: "015149867",
    bloodGroup: "B-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-05-25"
  },
  
  {
    id: 4,
    name: "Hanifa khatun",
    age: 30,
    location: "Bogura",
    gender: "Female",
    cellNumber: "01767137650",
    bloodGroup: "B-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-04-26"
  },
  
  {
    id: 5,
    name: "Pavel",
    age: 23,
    location: "Rangpur",
    gender: ",Male",
    cellNumber: "01745874359",
    bloodGroup: "0+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-03-30"
  },
  
  {
    id: 6,
    name: "Rocky babu",
    age: 32,
    location: "Bogura",
    gender: "Female",
    cellNumber: "01824249546",
    bloodGroup: "A-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-05-23"
  },
  
  {
    id: 7,
    name: "Shirmin akther",
    age: 33,
    location: "Dhaka",
    gender: "Female",
    cellNumber: "01788789076",
    bloodGroup: "B+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-08-10"
  },
  
  {
    id: 8,
    name: "Razun",
    age: 24,
    location: "Dinajpur",
    gender: "Male",
    cellNumber: "01709675434",
    bloodGroup: "O+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-09-23"
  },

  {
    id: 9,
    name: "Mazada Khatun",
    age: 23,
    location: "Bogura",
    gender: "Female",
    cellNumber: "01734874543",
    bloodGroup: "O-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-05-29"
  },
  
  {
    id: 10,
    name: "Ripon mia",
    age: 30,
    location: "Hobigonj",
    gender: "Male",
    cellNumber: "01756234452",
    bloodGroup: "AB+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-08-26"
  },
  

  {
    id: 11,
    name: "Khtiza akther",
    age: 24,
    location: "Bogura",
    gender: "Female",
    cellNumber: "01786454389",
    bloodGroup: "A-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-02-15"
  },
  
  {
    id: 12,
    name: "Alii Hasan",
    age: 30,
    location: "Fooridpur",
    gender: "Male",
    cellNumber: "01789097656",
    bloodGroup: "A+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-08-23"
  },
  
  {
    id: 13,
    name: "Ruhi akther",
    age: 23,
    location: "Khulna",
    gender: "Female",
    cellNumber: "01786457896",
    bloodGroup: "B-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2023-03-12"
  },
  
  {
    id: 14,
    name: "Rimu akther",
    age: 23,
    location: "Dinajpur",
    gender: "Female",
    cellNumber: "017863487",
    bloodGroup: "B-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-04-19"
  },
  
  {
    id: 15,
    name: "Roni",
    age: 32,
    location: "Cox's Bazer",
    gender: "Male",
    cellNumber: "0189765645",
    bloodGroup: "AB-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-03-12"
  },
  
  {
    id: 16,
    name: "Halima rohoman Hiya",
    age: 23,
    location: "Dinajpur",
    gender: "Female",
    cellNumber: "019138302334",
    bloodGroup: "B+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-07-13"
  },
  
  {
    id: 17,
    name: "Rabby Hasan",
    age: 34,
    location: "Bogura",
    gender: "Male",
    cellNumber: "01773765645",
    bloodGroup: "A+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-07-23"
  },

  {
    id: 18,
    name: "Hanifa khatun",
    age: 30,
    location: "Bogura",
    gender: "Female",
    cellNumber: "01767137650",
    bloodGroup: "B-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-05-12"
  },
  
  {
    id: 19,
    name: "Kiya Akther",
    age: 23,
    location: "Rangpur",
    gender: "Female",
    cellNumber: "01865453289",
    bloodGroup: "A+",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-02-21"
  },
  

  {
    id: 20,
    name: "Nishi akther",
    age: 23,
    location: "Dinajpur",
    gender: "Male",
    cellNumber: "01796458756",
    bloodGroup: "A-",
    donationHistory: ["2021-07-20", "2022-03-30"],
    lastDonation: "2022-05-23"
  },
  


];



