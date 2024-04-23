export default function validatePhone(phoneNumber) {
  if (typeof phoneNumber === "undefined") {
    // Handle the case where phoneNumber is undefined
    console.error("Phone number is undefined");
    return false; // Or throw an error if desired
  }

  const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phoneNumber.match(phoneFormat)) {
    return true;
  }
  return false;
}
