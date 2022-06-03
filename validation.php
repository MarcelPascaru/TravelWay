<?php
    $value = $_GET['query'];
    $formfield = $_GET['field'];
    // Check Valid or Invalid user name when user enters user name in username input field.
    if ($formfield == "nameId") {
        if (strlen($value) < 4) {
            echo "Must be 3+ letters";
        } else {
            echo "Valid";
        }
    }
    // Check Valid or Invalid email when user enters email in email input field.
    if ($formfield == "emailId") {
        if (!preg_match("/^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3})$/", $value)) {
            echo "Invalid email";
        } else {
            echo "Valid";
        }
    }
?>