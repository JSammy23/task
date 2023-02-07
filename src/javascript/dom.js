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
        projectCount.textContent = projects.projectMap.size
        console.log(projects.projectMap.size)
        projectLinksDiv.textContent = ''

        for (let i = 0; i < projects.projectMap.size; i++) {
            const projectLink = document.createElement('a')
            const projectTextDiv = document.createElement('div')
            const projectText = document.createElement('p')

            projectTextDiv.classList.add('project', 'select')
            projectTextDiv.setAttribute('data-link-index', i)
        }
    }








})();

export default dom;