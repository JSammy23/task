import dom from "./dom";

const projects = (() => {
    let projectList = [];

    // Check local storage and efault project
    if (localStorage.getItem('projectList') === null) {
        projectList.push({
            projectName: 'My Project',
            tasks: [
                {
                    taskName: 'Mow the yard',
                    note: 'Rain forcasted Thursday morning',
                    dueDate: '2023-02-10',
                    priority: 'normal',
                    completed: false,
                    project: 'My Project',
                    taskIndex: 0
                }
            ]
        });
        projectList.push({
            projectName: 'Work',
            tasks: [
                {
                    taskName: 'Get that report to Johnsons desk',
                    note: 'Q3 expense report',
                    dueDate: '2023-02-20',
                    priority: 'high',
                    completed: false,
                    project: 'Work',
                    taskIndex: 0
                }
            ]
        })
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projectsList'));
        projectList = projectsFromStorage;
    };

    

    

    const Project = (title) => {
        let projectName = title
        const tasks = []

        return {
            projectName,
            tasks
        }
    }

    function addProject(title) {
        const project = Project(title)
        projectList.push(project)
        console.log('Added')
        dom.showProjects()
    }

    function editProject() {
        // edit code here
        //Display projects
    }

    function deleteProject(index) {
        if (index > -1) {
            projectList.splice(index, 1)
            dom.showProjects()
        }
        //Display projects
    }

    return {
        projectList,
        addProject,
        deleteProject
    }
})();

export default projects;