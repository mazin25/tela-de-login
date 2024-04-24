function button() {
const username = document.getElementById('username')
const password = document.getElementById('password')

    if (username.value == "admin@admin.com" & password.value == 1234) {
        alert("Login Successfull")
    } else { 
        alert("Login Failed")
    }
}