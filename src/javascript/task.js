import projects from "./projects";

const tasks = (() => {
    const Task = (taskDetails) => {
        let taskName = taskDetails.taskName;
        let note = taskDetails.note;
        let dueDate = taskDetails.dueDate;
        let completed = false;
        let priority = taskDetails.priority;
        let project;
        let taskIndex
    };

    function addTask(taskDetails) {
        const task = Task(taskDetails)

        // TODO: Push task into correct project
        const project = projects.projectMap.get(`${taskDetails.project}`)
        project.tasks.push(task)

        // Refresh tasks in project array for DOM display
    }

    function editTask(taskDetails) {
        const project = projects.projectMap.get(`${taskDetails.project}`)
        project.tasks[taskIndex].title = taskDetails.title;
        project.tasks[taskIndex].note = taskDetails.note;
        project.tasks[taskIndex].dueDate = taskDetails.dueDate;
        project.tasks[taskIndex].priority = taskDetails.priority;
        // Refresh tasks for DOM display
    }

    function deleteTask(taskDetails) {
        const project = projects.projectMap.get(`${taskDetails.project}`);
        project.tasks.splice(taskDetails.taskIndex, 1)
        // Refresh tasks for DOM display
    }

    //TODO function toggleTaskCompletion





})()


export default tasks;