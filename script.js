const skills = ['HTML', 'CSS', 'JavaScripts', 'Node.js', 'MongoDB'];
const projects = [
    {name: 'Blog Backend', description: 'API RESTful avec node.js, Express et MongoDB'},
    {name: 'Portfolio web',description: 'Responsitive website to present my projects'}
]

// card reference
const card = document.querySelector('.card');

// create the skills selection
const skillsSelection = document.createElement('div');
skillsSelection.classList.add('dynamic-section');
const skillsTitle = document.createElement('h3');
skillsTitle.textContent = 'Skills :';
skillsSelection.appendChild(skillsTitle);
const skillslist = document.createElement('ul');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillslist.appendChild(li);
});
skillsSelection.appendChild(skillslist);
card.appendChild(skillsSelection);

// create Project section via DOM
const projectsSection = document.createElement('div');
projectsSection.classList.add('dynamic-section');

const projectsTitle = document.createElement('h3');
projectsTitle.textContent = 'Projects :';
projectsSection.appendChild(projectsTitle);

const projectsList = document.createElement('ul');
projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = `${project.name} - ${project.description}`;
    projectsList.appendChild(li);
});
projectsSection.appendChild(projectsList);
card.appendChild(projectsSection);