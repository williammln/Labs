// Get submit button and add event listener
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault(); // prevent form submission

  // Get form elements
  const fname = document.forms["registrationForm"]["fname"].value;
  const sname = document.forms["registrationForm"]["sname"].value;
  const gender = document.forms["registrationForm"]["gender"].value;
  const dob = document.forms["registrationForm"]["dob"].value;
  const grade = document.forms["registrationForm"]["grade"].value;

  // Validate that no field is empty
  if (fname == "" || sname == "" || gender == "" || dob == "" || grade == "") {
    alert("Please fill in all fields");
    return false;
  }

  // Validate that fname and sname contain only letters
  const letters = /^[A-Za-z]+$/;
  if (!fname.match(letters) || !sname.match(letters)) {
    alert("Name fields should contain only letters");
    return false;
  }

  // Validate that dob is a valid date
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (isNaN(birthDate.getTime()) || age < 17) {
    alert("Invalid date of birth or age below 17");
    return false;
  }

  // Validate that grade is not lower than C+
  
  // Display results in container
  const resultContainer = document.getElementById("result-container");
  resultContainer.style.display = 'block';
  if (grade === "A" || grade === "A-" || grade === "B+" || grade === "B" || grade === "B-" || grade === "C+") {
    resultContainer.innerHTML = "<p>" + fname + ",Congratulations, you are eligible for university admission!</p>";
  } else {
    resultContainer.innerHTML = "<p>Sorry, " + fname + ", you are not eligible for university admission.</p>";
  }

  return false; // prevent form submission
}