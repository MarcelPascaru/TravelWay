
<?php
include('connect.php'); // file for database connection

if (empty($_POST['name'])) {
    echo "The field name is required";
    return false;
}

if (empty($_POST['email'])) {
    echo "The field email is required";
    return false;
}


    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    
        
    $query = "INSERT INTO `messages` (name, email, number, subject, message) VALUES ('$name', '$email', '$number', '$subject', '$message')";
    $result = mysqli_query($connection, $query);

    echo "E-Mail Sent successfully, we will get back to you soon.";
?>