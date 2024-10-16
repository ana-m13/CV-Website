function validateForm() {
    if (!checkEmails()) {
        alert("Emails do not match.");
        return false;
    }

    if (!checkDate()) {
        alert("Please select a project date at least 1 day in the future.");
        return false;
    }

    if (isValid) {
        showSummary();
    }

    return false;
}

function checkDate() {
    var projectDate = new Date(document.getElementById("projectDate").value);
    var currentDate = new Date();

    // Check if project date is at least 1 day in the future
    return projectDate > currentDate.setDate(currentDate.getDate() + 1);
}

function checkEmails() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    // Check if emails match and contain '@' symbol
    return email === confirmEmail && email.includes('@');
}

