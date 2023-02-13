import dom from "./dom";
import projects from "./projects";
import tasks from "./task";

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

            // Toggle Dark Mode
            if (target.id === 'toggleDarkMode') {
                const darkModeToggle = document.getElementById('darkModeToggle')
                const header = document.getElementById('header')
                const logo = document.querySelector('.logo')
                const root = document.querySelector(':root')
                if (darkModeToggle.classList.contains('fa-toggle-off')) {
                    darkModeToggle.classList.replace('fa-toggle-off', 'fa-toggle-on')
                    darkModeToggle.classList.add('light')
                    logo.classList.replace('light', 'dark')
                } else if (darkModeToggle.classList.contains('fa-toggle-on')) {
                    darkModeToggle.classList.replace('fa-toggle-on', 'fa-toggle-off')
                    darkModeToggle.classList.remove('light')
                    logo.classList.replace('dark', 'light')
                }
                // Toggle Dark Mode
                header.classList.toggle('dark-mode')
                header.classList.toggle('light-mode')
                root.classList.toggle('dark-mode')
            }

            // Style selected link
            if (target.classList.contains('select')) {
                dom.selectLink(target, linkIndex)
                dom.changeMainTitle(target, linkIndex)
            };

            // AddTaskBtn
            if (target.classList.contains('project')) {
                // Not working properly
                dom.selectLink(target, projectIndex)
            }

            // Add Project
            if (target.classList.contains('add-new-project')) {
                dom.grabModal('addProject')
            };

            // Delete Project
            if (target.id === 'deleteBtn') {
                projects.deleteProject(target.parentElement.dataset.linkIndex) 
            }

            // Edit Project
            if ( target.id === 'editProjectBtn') {
                const projectIndex = target.parentElement.dataset.linkIndex
                dom.grabModal('editProject', projectIndex)   
            }
            // TODO: Get project index from first edit if statement to if statement below
            if (target.id === 'saveEditProject') {
                const nameInput = document.getElementById('project-title');
                projects.editProject(nameInput.value, target.dataset.index)
                dom.grabModal('closeModal')
                dom.showProjects()
            }
            

            // Add Task 
            if (target.id === 'addTask') {
                dom.grabModal('addTask')
            }

            // Edit Task
            if (target.id === 'editTaskBtn') {
                dom.grabModal('editTask', target.dataset.projectIndex, target.dataset.taskIndex)
                

            }
            if (target.id === 'saveEditTask') {
                const taskName = document.getElementById('taskName')
                const note = document.getElementById('note')
                const dueDate = document.getElementById('dueDate')
                const priority = document.getElementById('priority')
                tasks.editTask({
                    taskName: taskName.value,
                    note: note.value,
                    dueDate: dueDate.value,
                    priority: priority.value
                }, target.dataset.projectIndex, target.dataset.taskIndex)
                dom.grabModal('closeModal')
                dom.getTasks('project', target.dataset.projectIndex)
                // console.log(projects.projectList[target.dataset.projectIndex].tasks[target.dataset.taskIndex])
            }

            // Task Completetion
            if (target.classList.contains('toggle-complete')) {
                const taskIndex = target.parentElement.dataset.taskIndex
                const projectIndex = target.parentElement.dataset.projectIndex
                tasks.toggleTaskComplete(projectIndex, taskIndex)
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
        const taskForm = document.getElementById('taskForm');
        taskForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = new FormData(taskForm)
            const taskData = Object.fromEntries(formData)
            const selectedProject = document.querySelector('.selected-link' || '.project')
            const projectIndex = selectedProject.dataset.linkIndex
            // console.log(taskData, projectIndex)
            tasks.addTask(taskData, projectIndex)
            dom.grabModal('closeModal')
        })
    }

    


    return {
        listenForClicks,
        handleProjectForm,
        handleTaskForm
    }

})();

export default handlers;