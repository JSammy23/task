

const tasks = (() => {
    const Task = (taskDetails) => {
        let taskName = taskDetails.taskName;
        let note = taskDetails.note;
        let dueDate = taskDetails.dueDate;
        let completed = false;
        let priority = taskDetails.priority;
        let project;
    
        return {
            taskName,
            note,
            dueDate,
            completed,
            priority,
            project
        }
    };









})()