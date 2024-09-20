document.getElementById("resume")?.addEventListener("submit",function(event:Event){
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillElement = document.getElementById("skill") as HTMLTextAreaElement;

    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){

        const name:string = nameElement.value;
        const email:string = emailElement.value;
        const phone:string = phoneElement.value;
        const education:string = educationElement.value;
        const experience:string = experienceElement.value;
        const skill:string = skillElement.value;

        const resumeOutput:string = `
        <h2>Resume</h2>
        <p><strong>Name</strong> ${name} </p>
        <p><strong>Email</strong> ${email} </p>
        <p><strong>Phone-No</strong> ${phone } </p>

        <h3>Education</h3>
        <p>${education} </p>

        <h3>Experience</h3>
        <p>${experience} </p>

        <h3>Skills</h3>
        <p>${skill} </p>
        `;

        const resumeOutputDiv = document.getElementById("resume-output") as HTMLDivElement;
        if(resumeOutputDiv){
            resumeOutputDiv.innerHTML = resumeOutput;
        }
       
    }
})