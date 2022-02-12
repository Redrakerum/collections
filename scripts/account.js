// HARD CODING VALUES
var userid_array = ["guy123", "person_erson", "dafduk", "1"]
var userpass_array = ["password", "password123", "@PASSWORD", "1"]

/*
change_header: change display header base on innerText

Args:
background: rgba val
innerText: string of text to be displayed

Returns:
true: upon success
false: otherwise
*/
function change_header(background, innerText) {
    console.log("change_header(): innerText[" + innerText + "]")
    main_header.style.background = background
    main_header.style.transition = "background-color 1.5s ease"
    main_header_text.innerText = innerText
    setTimeout(function () {
        main_header.style.background = "rgba(255,255,255,0)"
        main_header_text.innerText = "NO ONE ALLOWED"
    }, 2000)
}

/*
validate_login: validate submitted user info

Args:
user: object containing user info

Returns:
true: upon success
false: otherwise
*/
function validate_login(user) {
    //check for both inputs
    if (!user.id || !user.password || (!user.id && !user.password)) {
        change_header("rgba(255,0,0,0.7)", "ERROR: PLEASE PROVIDE BOTH USER AND PASS")
    } else {
        //check if user/pass combo is valid
        if (userid_array.includes(user.id) && userpass_array.includes(user.password) && (userid_array.indexOf(user.id) == userpass_array.indexOf(user.password))) {
            change_header("rgba(130,224,170,0.99)", "SUCCESS, WELCOME!")
        } else {
            change_header("rgba(255,0,0,0.4)", "ERROR: INVALID USER/PASS")
        }
    }
}

// FN
// TRUE value for parameter means invalid input for that var
function invalid_input(user_bool, pass_bool) {
    if (user_bool && pass_bool) {
        //alert("line 9")
        change_header("INVALID USER/PASS")
        // main_header.style.background = "rgba(255,0,0,0.36)"
        // main_header.style.transition = "background-color 1.5s ease"
        // main_header_text.innerText = "INVALID USER/PASS"
        // setTimeout(function (){
        //     main_header.style.background = "rgba(255,255,255,0)"
        //     main_header_text.innerText = "NO ONE ALLOWED"
        // }, 2000)
    } else if (user_bool) {
        //alert("line 18")
        change_header("INVALID USER")
        // main_header.style.background = "rgba(255,0,0,0.36)"
        // main_header.style.transition = "background-color 1.5s ease"
        // main_header_text.innerText = "INVALID USER"
        // setTimeout(function (){
        //     main_header.style.background = "rgba(255,255,255,0)"
        //     main_header_text.innerText = "NO ONE ALLOWED"
        // }, 2000)
    } else if (pass_bool) {
        //alert("line27")
        change_header("INVALID PASSWORD")
        // main_header.style.background = "rgba(255,0,0,0.36)"
        // main_header.style.transition = "background-color 1.5s ease"
        // main_header_text.innerText = "INVALID PASSWORD"
        // setTimeout(function (){
        //     main_header.style.background = "rgba(255,255,255,0)"
        //     main_header_text.innerText = "NO ONE ALLOWED"
        // }, 2000)
    } else if (user_bool == false && pass_bool == false) {
        //alert("line 36")
        change_header("VALIDATED")
        // main_header.style.background = "rgba(255,0,0,0.36)"
        // main_header.style.transition = "background-color 1.5s ease"
        // main_header_text.innerText = "VALIDATED"
        // setTimeout(function (){
        //     main_header.style.background = "rgba(255,255,255,0)"
        //     main_header_text.innerText = "NO ONE ALLOWED"
        // }, 2000)
    } else {
        alert("ERROR IN invalid_input() FUNCTION")
    }
}


function checkbox_bool_checker() {
    let temp = document.getElementById('remember-me-button')

    if (temp.checked = true) {
        return true
    } else {
        return false
    }
}
// FN
function id_pass_validator(user) {
    //check unique username
    if (!userid_array.includes(user.id)) {
        invalid_input(true, true)
    } else {
        let temp_index = userid_array.indexOf(user.id)
        if (user.password === userpass_array[temp_index]) {
            invalid_input(false, false)
        } else {
            invalid_input(false, true)
        }
    }

}
// FN

// FN
function login_function() {


    var user = {
        id: document.getElementById('login-userid').value,
        password: document.getElementById('login-password').value,
        remember_me: checkbox_bool_checker()
    }

    //let res = id_pass_validator(user)
    let res = validate_login(user)

    // if(res) {
    //     //success
    // } else {
    //     //fail
    // }

}
// FN
function create_account_function() {

}
//BUTTONS
const submit_button = document.getElementById('submit-button')
const new_account_submit_button = document.getElementById('new-submit-button')

submit_button.onclick = login_function

//ITEMS
const main_header = document.getElementById('main-header')
const main_header_text = document.getElementById('header-text')