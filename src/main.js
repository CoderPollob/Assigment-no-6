
//   =====Now find members by blood group those who are ready to donate blood. =====

const bloodGroup = prompt('Write your blood group');
const readyToDonateMembers = members.filter(member => {
return member.bloodGroup === bloodGroup && member.lastDonation !== "2023-06-12";
});

console.log("Members ready to donate blood (Blood Group: " + bloodGroup + "):");
console.table(readyToDonateMembers);


//   =====also search member by using their phone number with donation history =======

const phoneNumber =prompt('Please Give me your Number');
const member = members.find(member => member.cellNumber === phoneNumber);

if (member) {
console.log("Member found (Phone Number: " + phoneNumber + "):");
console.table([{ "Name": member.name, "Donation History": member.donationHistory }]);
} else {
console.log("Member not found with the provided phone number.");
}
