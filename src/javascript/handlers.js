import dom from "./dom";
import projects from "./projects";

const handlers = (() => {
    const modal = document.getElementById('modal');
    function listenForClicks() {
        let projectIndex;
        let taskIndex;

        document.addEventListener('click', (event) => {
            const { target } = event;
            const modalMainTitle = document.querySelector('.modal-main-title');
            const selectedLink = document.querySelector('.selected-link');
            const linkIndex = parseInt(target.getAttribute('data-link-index'), 10);

            // Style selected link
            if (target.classList.contains('select')) {
                dom.selectLink(target, linkIndex)
                dom.changeMainTitle(target, linkIndex)
            };

            // Add Project
            if (target.classList.contains('add-new-project')) {
                dom.grabModal('addProject')
                
            };

            // Add Task 
            if (target.id === 'addTask') {
                dom.grabModal('addTask')
            }

            // Close Modal
            if (target.classList.contains('close-modal')) {
                dom.grabModal('closeModal')
            };

        });


    };

    function handleProjectForm() {
        const projectForm = document.getElementById('projectForm')
        projectForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const projectTitle = document.getElementById('project-title');
            console.log(projectTitle.value)
            projects.addProject(projectTitle.value)
            console.log(projects.projectList)
            dom.grabModal('closeModal')
        })
    }

    function handleTaskForm() {
        //TODO
    }



    return {
        listenForClicks,
        handleProjectForm
    }

})();

export default handlers;