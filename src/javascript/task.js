import dom from "./dom";
import projects from "./projects";

const tasks = (() => {
    const Task = (taskDetails) => {
        let taskName = taskDetails.taskName;
        let note = taskDetails.note;
        let dueDate = taskDetails.dueDate;
        let completed = false;
        let priority = taskDetails.priority;
        let projectIndex = taskDetails.projectIndex;
        let taskIndex = taskDetails.taskIndex

        return {
            taskName,
            note,
            dueDate,
            completed,
            priority,
            projectIndex,
            taskIndex
        }
    };


    function addTask(taskDetails, projectIndex) {
        const task = Task(taskDetails)

        projects.projectList[projectIndex].tasks.push(task)
        console.log('Task Added', projects.projectList[projectIndex])
        dom.getTasks('project', projectIndex)

        // Refresh tasks in project array for DOM display
    }

    function editTask(taskDetails, projectIndex, taskIndex) {
        projects.projectList[projectIndex].tasks[taskIndex].taskName = taskDetails.taskName;
        projects.projectList[projectIndex].tasks[taskIndex].note = taskDetails.note;
        projects.projectList[projectIndex].tasks[taskIndex].dueDate = taskDetails.dueDate;
        projects.projectList[projectIndex].tasks[taskIndex].priority = taskDetails.priority;
        // Refresh tasks for DOM display
    }

    function deleteTask(taskDetails, projectIndex) {
        if (projectIndex > -1) {
            projects.projectList[projectIndex].tasks.splice(taskIndex, 1);
            dom.getTasks('all'); // TESTING
        }
        
        // Refresh tasks for DOM display
    }

    
    function toggleTaskComplete(projectIndex, taskIndex, selectedLink) {
        let clickedLink;

        if (projects.projectList[projectIndex].tasks[taskIndex].completed === false) {
            projects.projectList[projectIndex].tasks[taskIndex].completed = true;
        } else {
            projects.projectList[projectIndex].tasks[taskIndex].completed = false;
        }
        dom.getTasks(clickedLink, projectIndex);
    };


    return {
        addTask,
        editTask,
        deleteTask,
        toggleTaskComplete
    }


})()


export default tasks;