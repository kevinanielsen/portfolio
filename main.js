const projectsDiv = document.querySelector('.projects-div');
projectsDiv.style.display = 'none';
document.getElementById('projects-header').onclick = () => {
    if (projectsDiv.style.display == 'none') {
        projectsDiv.style.display = 'block';
    } else {
        projectsDiv.style.display = 'none';
    }
};

const skillsDiv = document.querySelector('.skills-div');
skillsDiv.style.display = 'none';
document.getElementById('skills-header').onclick = () => {
    if (skillsDiv.style.display == 'none') {
        skillsDiv.style.display = 'block';
    } else {
        skillsDiv.style.display = 'none';
    }
};

const contactDiv = document.querySelector('.contact-div');
contactDiv.style.display = 'none';
document.getElementById('contact-header').onclick = () => {
    if (contactDiv.style.display == 'none') {
        contactDiv.style.display = 'block';
    } else {
        contactDiv.style.display = 'none';
    }
};