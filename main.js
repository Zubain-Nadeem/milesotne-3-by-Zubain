var _a;
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name</strong> ".concat(name_1, " </p>\n        <p><strong>Email</strong> ").concat(email, " </p>\n        <p><strong>Phone-No</strong> ").concat(phone, " </p>\n\n        <h3>Education</h3>\n        <p>").concat(education, " </p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, " </p>\n\n        <h3>Skills</h3>\n        <p>").concat(skill, " </p>\n        ");
        var resumeOutputDiv = document.getElementById("resume-output");
        if (resumeOutputDiv) {
            resumeOutputDiv.innerHTML = resumeOutput;
        }
    }
});
