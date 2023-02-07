import projects from "./projects";
import tasks from "./task";

const dom = (() => {
    const mainTitleText = document.querySelector('.main-title-text')
    const modal = document.getElementById('modal')
    const projectLinksDiv = document.querySelector('.project-links-div')
    const projectCount = document.querySelector('.project-count')
    const taskList = document.querySelector('.task-list')
    const taskCount = document.querySelector('.task-count')

    function showProjects() {
        projectCount.textContent = projects.projectList.length
        projectLinksDiv.textContent = ''

        for (let i = 0; i < projects.projectList.length; i++) {
            const projectLink = document.createElement('a')
            const projectTextDiv = document.createElement('div')
            const projectText = document.createElement('p')

            projectTextDiv.classList.add('project', 'select')
            projectTextDiv.setAttribute('data-link-index', i)

            projectLink.classList.add('link', 'project-link', 'project', 'select');
            projectLink.setAttribute('href', '#');
            projectLink.setAttribute('data-link-index', i);

            projectText.classList.add('project-text', 'project', 'select');
            projectText.textContent = projects.projectList[i].title;
            projectText.setAttribute('data-link-index', i);

            projectTextDiv.appendChild(projectText)
            projectLink.appendChild(projectTextDiv)
            projectLinksDiv.appendChild(projectLink)
        }
    }





    return {
        showProjects
    }


})();

export default dom;