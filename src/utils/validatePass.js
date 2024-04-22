export default function validatePass(pass, confirmPass) {
    if (pass === confirmPass) {
        return true
    } 
    return false
}
