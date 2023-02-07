import projects from "./projects";
import tasks from "./task";
import { format, differenceInDays, parseISO } from "date-fns";

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
            const projectIconDiv = document.createElement('div')
            const projectEditIcon = document.createElement('i')
            const projectTrashIcon = document.createElement('i')

            projectTextDiv.classList.add('project', 'select')
            projectTextDiv.setAttribute('data-link-index', i)
            projectIconDiv.setAttribute('data-link-index', i)

            projectLink.classList.add('link', 'project-link', 'project', 'select');
            projectLink.setAttribute('href', '#');
            projectLink.setAttribute('data-link-index', i);

            projectText.classList.add('project-text', 'project', 'select');
            projectText.textContent = projects.projectList[i].title;
            projectText.setAttribute('data-link-index', i);

            projectEditIcon.classList.add(
                'fa-regular',
                'fa-pen-to-square',
                'project',
                'project-icon',
                'edit-project',
                'select',
                'padding-right'
            )

            projectTrashIcon.classList.add(
                'fa-regular',
                'fa-trash-can',
                'project',
                'project-icon',
                'delete-project',
                'select'
            )
            
            projectIconDiv.appendChild(projectEditIcon)
            projectIconDiv.appendChild(projectTrashIcon)
            projectTextDiv.appendChild(projectText)
            projectLink.appendChild(projectTextDiv)
            projectLink.appendChild(projectIconDiv)
            projectLinksDiv.appendChild(projectLink)
        };
    };

    function getTasks(menuTitle, projectIndex) {
        let projectIndexStart;
        let projectIndexEnd;
    
        
        localStorage.setItem('projects', JSON.stringify(projects.projectList));
    
        // IF CLICKED ON PROJECT LINK
        if (menuTitle === 'project') {
          projectIndexStart = projectIndex;
          projectIndexEnd = projectIndex + 1;
    
          
          if (projects.projectList[projectIndex].tasks.length === 0) {
            taskCount.textContent = 0;
          }
    
          // IF CLICKED ON MENU LINK
        } else {
          projectIndexStart = 0;
          projectIndexEnd = projects.projectList.length;
        };
        showTasks(menuTitle, projectIndexStart, projectIndexEnd);
    };

    function showTasks(menuTitle, projectIndexStart, projectIndexEnd) {
        const todaysDate = format(new Date(), 'yyyy-MM-dd');
        let taskNumber = 0;

        taskCount.textContent = 0;
        taskList.textContent = '';

        for (let i = projectIndexStart; i < projectIndexEnd; i += 1) {
          for (let j = 0; j < projects.projectList[i].tasks.length; j += 1) {
            const taskDiv = document.createElement('div');
            const taskTextDiv = document.createElement('div');
            const taskText = document.createElement('p');
            const taskInfo = document.createElement('div');
            const taskDate = document.createElement('p');
            const taskInfoIcon = document.createElement('i');

            if (menuTitle === 'today') {
                if (projects.projectList[i].tasks[j].dueDate !== todaysDate) {
                    continue;
                }
                else if (menuTitle === 'week') {
                    const dateOfToday = parseISO(todaysDate)
                    const dateOfTask = parseISO(projects.projectList[i].tasks[j].dueDate)

                    if (!(differenceInDays(dateOfTask, dateOfToday) <= 7 && 
                    differenceInDays(dateOfTask, dateOfToday) >= 0)) {
                        continue;
                    }

                    // TODO Completed List?
                }
            };

            taskNumber += 1;
            taskCount.textContent = taskNumber;

            taskDiv.classList.add('task-div', 'hover-element');
            // taskTextDiv.classList.add('flex');
            taskDiv.setAttribute('data-project-index', i);
            taskDiv.setAttribute('data-task-index', j);

            taskText.classList.add('task-text');
            taskText.textContent = projects.projectList[i].tasks[j].title;
            taskText.setAttribute('data-project-index', i);
            taskText.setAttribute('data-task-index', j);

            // Task Date
            if (projects.projectList[i].tasks[j].date !== undefined) {
                taskDate.textContent = projects.projectList[i].tasks[j].date;
            } else {
                taskDate.textContent = '';
            }

            taskTextDiv.appendChild(taskText);
            taskInfo.appendChild(taskDate);
            taskDiv.appendChild(taskTextDiv);
            taskDiv.appendChild(taskInfo);
            taskList.appendChild(taskDiv);
                
            // Task Completion
            if (projects.projectList[i].tasks[j].completed === false) {
                taskText.classList.remove('task-done');
            } else {
                taskText.classList.add('task-done')
            };

            


          
        };
    };
    };

    function selectLink(target, index, action) {
        const allLinks = document.querySelectorAll('.link');
        const allProjectlinks = document.querySelectorAll('.project-link');
        const menuTitle = target.getAttribute('data-title');

        allLinks.forEach((link) => {
            link.classList.remove('selected-link');
        });

        if (target.classList.contains('link')) {
            target.classList.add('selected-link');
        };

        // Project Link
        if (target.classList.contains('project')) {
            getTasks('project', index)
        }
    }

    function showMainTitle(index) {
        const menuTexts = document.querySelectorAll('.menu-link-text')

        mainTitleText.textContent = menuTexts[index].textContent;
    };

    function changeMainTitle(target, index) {
        if (
            target.classList.contains('menu-link') ||
            target.classList.contains('menu-link-text')
        ){
            showMainTitle(index);
        };

        if (
            target.classList.contains('project-link') ||
            target.classList.contains('project-icon') ||
            target.classList.contains('project-text') ||
            target.classList.contains('delete-project') ||
            target.classList.contains('edit-project')
        ) {
            mainTitleText.textContent = projects.projectList[index].title;
        }
    };






    return {
        showProjects,
        selectLink,
        getTasks,
        showTasks,
        changeMainTitle,
        showMainTitle
    }


})();

export default dom;