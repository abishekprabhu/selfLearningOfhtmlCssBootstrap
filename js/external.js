function validateForm(event) {
  event.preventDefault();

  const studentID = document.getElementById("studentID").value;
  const studentName = document.getElementById("studentName").value;
  const studentEmail = document.getElementById("studentEmail").value;
  const studentPassword = document.getElementById("studentPassword").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const subjects = document.getElementById("subjects").value;
  const studentAddress = document.getElementById("studentAddress").value;
  const sports = document.querySelectorAll('input[type="checkbox"]:checked');
  const fileUpload = document.getElementById("fileUpload").files[0];

  let statusId = "";
  let statusName = "";
  let statusEmail = "";
  let statusPassword = "";
  let statusGender = "";
  let statusSubjects = "";
  let statusAddress = "";
  let statusSports = "";
  let statusFile = "";

  if (studentID === "") {
    statusId = "Student ID should not be empty";
    document.getElementById("studentId").innerText = statusId;
  } else {
    document.getElementById("studentId").innerText = "";
  }

  if (studentName === "") {
    statusName = "Student Name should not be empty";
    document.getElementById("Name").innerText = statusName;
  } else {
    document.getElementById("Name").innerText = "";
  }

  if (studentEmail === "") {
    statusEmail = "Student Email should not be empty";
    document.getElementById("email").innerText = statusEmail;
  } else {
    document.getElementById("email").innerText = "";
  }

  if (studentPassword === "") {
    statusPassword = "Student Password should not be empty";
    document.getElementById("password").innerText = statusPassword;
  } else {
    document.getElementById("password").innerText = "";
  }

  if (!gender) {
    statusGender = "Please select a gender";
    document.getElementById("studentGender").innerText = statusGender;
  } else {
    document.getElementById("studentGender").innerText = "";
  }

  if (subjects === "") {
    statusSubjects = "Please select a subject";
    document.getElementById("sub").innerText = statusSubjects;
  } else {
    document.getElementById("sub").innerText = "";
  }

  if (studentAddress === "") {
    statusAddress = "Student Address should not be empty";
    document.getElementById("add").innerText = statusAddress;
  } else {
    document.getElementById("add").innerText = "";
  }

  if (sports.length === 0) {
    statusSports = "Please select at least one sport";
    document.getElementById("sports").innerText = statusSports;
  } else {
    document.getElementById("sports").innerText = "";
  }

  if (!fileUpload) {
    statusFile = "Please upload a file";
    document.getElementById("fileError").innerText = statusFile;
  } else {
    document.getElementById("fileError").innerText = "";
  }

  if (
    studentID &&
    studentName &&
    studentEmail &&
    studentPassword &&
    gender &&
    subjects &&
    studentAddress &&
    sports.length > 0 &&
    fileUpload
  ) {
    alert("Registered successfully: " + studentName);

    const formData = new FormData();
    formData.append("Student ID", studentID);
    formData.append("Student Name", studentName);
    formData.append("Student Email", studentEmail);
    formData.append("Student Password", studentPassword);
    formData.append("Gender", gender.value);
    formData.append("Subjects", subjects);
    formData.append("Student Address", studentAddress);
    Array.from(sports).forEach((checkbox) =>
      formData.append("Sports", checkbox.value)
    );
    formData.append("File Upload", fileUpload);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  } else {
    // alert(
    //   statusId +
    //     "\n" +
    //     statusName +
    //     "\n" +
    //     statusEmail +
    //     "\n" +
    //     statusPassword +
    //     "\n" +
    //     statusGender +
    //     "\n" +
    //     statusSubjects +
    //     "\n" +
    //     statusAddress +
    //     "\n" +
    //     statusSports +
    //     "\n" +
    //     statusFile
    // );
    const errorMessages = [
      statusId,
      statusName,
      statusEmail,
      statusPassword,
      statusGender,
      statusSubjects,
      statusAddress,
      statusSports,
      statusFile,
    ];
    const errorMessage = errorMessages.filter((message) => message !== "").join("\n");
    document.getElementById("formError").innerText = errorMessage;
  }
}
