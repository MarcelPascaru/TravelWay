function checkForm() {
    // Fetching values from all input fields and storing them in variables.
    var nameValue = document.getElementById("nameId").value;
    var emailValue = document.getElementById("emailId").value;

    //Check input Fields Should not be blanks.
    if (nameValue == '' || emailValue == '') {
        alert("Please fill all required fields!");
    } else {
        //Notifying error fields
        var name = document.getElementById("nameId");
        var email = document.getElementById("emailId");
        //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
        if (name.innerHTML == 'Must be 3+ letters' || email.innerHTML == 'Invalid email') {
            alert("Fill Valid Information");
        } else {
            //Submit Form When All values are valid.
            document.getElementById("formId").submit();
        }
    }
}

// AJAX code to check input field values when onblur event triggerd.
function validate(field, query) {
    console.log(field, query);
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp);
        if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
            document.getElementById(field).style.borderColor = 'red';
            document.getElementById('validationMessage').innerHTML = "Validating..";
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(field).style.borderColor = xmlhttp.responseText != 'Valid' ? 'red' : 'black';
            document.getElementById('validationMessage').innerHTML = xmlhttp.responseText;
            document.getElementById('validationMessage').style.color = xmlhttp.responseText != 'Valid' ? 'red' : 'green';
        } else {
            document.getElementById(field).style.borderColor = 'red';
            document.getElementById('validationMessage').innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
        }
    }
    xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
}