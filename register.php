<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];

    // Basic validation
    $errors = [];
    if (empty($username)) {
        $errors[] = "Username is required.";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required.";
    }
    if (empty($password)) {
        $errors[] = "Password is required.";
    }
    if ($password !== $confirmPassword) {
        $errors[] = "Passwords do not match.";
    }

    // If there are errors, display them
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    } else {
        // Simulate saving to a database (you would replace this with actual DB code)
        // For security, remember to hash the password before saving!
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        // This is where you'd insert the user into your database
        // e.g., $db->query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [$username, $email, $hashedPassword]);

        echo "<p style='color:green;'>Registration successful!</p>";
        // Optionally redirect or clear the form
    }
}
?>
