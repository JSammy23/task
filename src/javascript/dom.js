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
        };
    };

    function getTasks(menuTitle, projectIndex) {
        let projectIndexStart;
        let projectIndexEnd;
    
        
        localStorage.setItem('projects', JSON.stringify(projects.projectsList));
    
        // IF CLICKED ON PROJECT LINK
        if (menuTitle === 'project') {
          projectIndexStart = projectIndex;
          projectIndexEnd = projectIndex + 1;
    
          
          if (projects.projectsList[projectIndex].tasks.length === 0) {
            taskCount.textContent = 0;
          }
    
          // IF CLICKED ON MENU LINK
        } else {
          projectIndexStart = 0;
          projectIndexEnd = projects.projectsList.length;
        };
        showTasks(menuTitle, projectIndexStart, projectIndexEnd);
    };

    function showTasks(menuTitle, projectIndexStart, projectIndexEnd) {
        const todaysDate = format(new Date(), 'yyyy-MM-dd');
        let taskNumber = 0;

        taskCount.textContent = 0;
        taskList.textContent = '';

        for (let i = projectIndexStart; i < projectIndexEnd; i += 1) {
          for (let j = 0; j < projects.projectsList[i].tasks.length; j += 1) {
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

            tasknumber += 1;
            taskCount.textContent = taskNumber;

            taskDiv.classList.add('task-div', 'hover-element');
            // taskTextDiv.classList.add('flex');
            taskDiv.setAttribute('data-project-index', i);
            taskDiv.setAttribute('data-task-index', j);

            taskText.classList.add('task-text');
            taskText.textContent = projects.projectsList[i].tasks[j].title;
            taskText.setAttribute('data-project-index', i);
            taskText.setAttribute('data-task-index', j);

            // Task Date
            if (projects.projectsList[i].tasks[j].date !== undefined) {
                taskDate.textContent = projects.projectsList[i].tasks[j].date;
            } else {
                taskDate.textContent = '';
            }

            taskTextDiv.appendChild(taskText);
            taskInfo.appendChild(taskDate);
            taskDiv.appendChild(taskTextDiv);
            taskDiv.appendChild(taskInfo);
            taskList.appendChild(taskDiv);
                
            // Task Completion
            if (projects.projectsList[i].tasks[j].completed === false) {
                taskText.classList.remove('task-done');
            } else {
                taskText.classList.add('task-done')
            };

            


          
        };
    };
    };






    return {
        showProjects
    }


})();

export default dom;