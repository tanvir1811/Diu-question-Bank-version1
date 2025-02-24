function get() {
    // Get values from input fields
    var courseCode = document.getElementById("po").value;  // Course code
    var batch = document.getElementById("po1").value; // Batch
    var examType = document.getElementById("po2").value; // Exam type

    open1(courseCode, batch, examType); // Call the function with input values
}

function open1(courseCode, batch, examType) {
    var upperCourseCode = courseCode.toUpperCase();
    var upperExamType = examType.toUpperCase();

    // Check if the inputs match the specified criteria
    if (upperCourseCode == "SE214" && batch == "40" && upperExamType == "MID") 
        {
        window.open("https://drive.google.com/drive/folders/1xhhqttotY2XtTLelnNScjSMwWZXGOror"); // Updated link
         } 

         else if (upperCourseCode == "SE532" && batch == "40" && upperExamType == "MID") 
            {
            window.open("https://drive.google.com/drive/folders/1QkHthwGViZA6vAFavgkjEtd9QMDy1ZvX?usp=sharing"); // Updated link
             } 
             else if (upperCourseCode == "SE532" && batch == "40" && upperExamType == "FINAL") 
                {
                window.open("https://drive.google.com/drive/folders/1oFvLwleoq1EahEhfPnB6nisJDsnD2bNe?usp=sharing"); // Updated link
                 } 
    
     else {
        alert("No matching criteria. Please try again."); // Alert for invalid input
    }
}

// Add an event listener for keydown events
document.addEventListener('keydown', function(event) {
    // Check if the key pressed is "Enter"
    if (event.key == 'Enter') {
        get();
        open1(courseCode, batch, examType);
    }
    // Check if the key pressed is "Escape"
    else if (event.key === 'Escape') {
        alert("Escape key pressed!"); // Example action for Escape key
    }
});