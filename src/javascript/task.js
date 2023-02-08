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
    };

    function addTask(taskDetails) {
        const task = Task(taskDetails)

        // TODO: Push task into correct project
        projects.projectList[projectIndex].tasks.push(task)
        dom.getTasks('project', projectIndex) // TESTING

        // Refresh tasks in project array for DOM display
    }

    function editTask(taskDetails) {
        projects.projectList[projectIndex].tasks[taskIndex].title = taskDetails.title;
        projects.projectList[projectIndex].tasks[taskIndex].note = taskDetails.note;
        projects.projectList[projectIndex].tasks[taskIndex].dueDate = taskDetails.dueDate;
        projects.projectList[projectIndex].tasks[taskIndex].priority = taskDetails.priority;
        // Refresh tasks for DOM display
    }

    function deleteTask(taskDetails) {
        if (projectIndex > -1) {
            projects.projectList[projectIndex].tasks.splice(taskIndex, 1);
            dom.getTasks('all'); // TESTING
        }
        
        // Refresh tasks for DOM display
    }

    //TODO function toggleTaskCompletion
    function markTaskComplete(projectIndex, taskIndex, selectedLink) {
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
        markTaskComplete
    }


})()


export default tasks;