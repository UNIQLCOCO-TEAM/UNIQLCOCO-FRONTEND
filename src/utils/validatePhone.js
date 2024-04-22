export default function validatePhone(phoneNumber) {
    const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (phoneNumber.match(phoneFormat)) {
        return true
    }
    return false
}