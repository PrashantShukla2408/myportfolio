document.addEventListener("DOMContentLoaded", () => {
  const experiences = [
    { title: "Backend Developer (Apprenticeship)", company: "Sharpener Tech" },
    { title: "Technical Support Intern", company: "Clapingo Private Limited" },
    { title: "Software Development Engineer", company: "Incedo Inc." },
  ];

  const skills = [
    "C++",
    "HTML",
    "CSS",
    "Javascript",
    "Node.Js",
    "Express.Js",
    "Sequelize",
    "AWS",
    "Rest APIs",
    "Axios",
    "MySQL",
  ];

  const projects = [
    {
      title: "Full Stack Expense App",
      domain: "Backend",
      description:
        "Developed a full-stack Expense Tracker application using (MySQL, Express.js, Node.js) to manage and track expenses effectively.Implemented CRUD operation for seamless expense management.",
    },

    {
      title: "Full Stack Shopping App",
      domain: "Backend",
      description:
        "Developed a full-stack Expense Tracker application using (MySQL, Express.js, Node.js) Implemented CRUD operation for seamless products management.Utilized Sequelize ORM to implement models, associations, and optimized CRUD operations for managing products, users, and carts",
    },
  ];

  const certifications = [
    "30 DC Full Stack web Development course",
    "AWS Certified Cloud Practitioner",
    "Google Generative AI Fundamentals",
    "Crash Course on Python by Google",
    "Oracle Certified Associate",
  ];

  const experiencesList = document.getElementById("experiences-list");
  experiences.forEach((experience) => {
    const experienceDiv = document.createElement("div");
    experienceDiv.classList.add("col-md-6");
    experienceDiv.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${experience.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${experience.company}</h6>
                </div>
            </div>
        `;
    experiencesList.appendChild(experienceDiv);
  });

  const skillsList = document.getElementById("skills-list");
  skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("col-md-3");
    skillDiv.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <p class="card-text">${skill}</p>
                </div>
            </div>
        `;
    skillsList.appendChild(skillDiv);
  });

  const projectsList = document.getElementById("projects-list");
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("col-md-6");
    projectDiv.innerHTML = `
            <div class="card mb-4">
                <div class='card-body'>
                    <h5 class='card-title'>${project.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${project.domain}</h6>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;
    projectsList.appendChild(projectDiv);
  });

  const certificationsList = document.getElementById("certifications-list");
  certifications.forEach((certificate) => {
    const certificateDiv = document.createElement("div");
    certificateDiv.classList.add("col-md-6");
    certificateDiv.innerHTML = `
            <div class='card mb-4'>
                <div class='card-body'>
                    <h5 class='card-title'>${certificate}</h5>
                </div>
            </div>
        `;
    certificationsList.appendChild(certificateDiv);
  });

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const messageData = {
      name: name,
      email: email,
      message: message,
    };
    axios
      .post("http://localhost:5000/postMessage", messageData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Message sent successfully!");
        contactForm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
