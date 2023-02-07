

const projects = (() => {
    const projectList = [];

    // Check local storage and efault project
    if (localStorage.getItem('projectList') === null) {
        projectList.push({
            title: 'My Project',
            tasks: [
                {
                    title: 'Mow the yard',
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
            title: 'Work',
            tasks: [
                {
                    title: 'Get that report to Johnsons desk',
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

    localStorage.projectList = JSON.stringify(projectList);

    console.log(projectList)

    

    const Project = title => {
        this.title = title
        const tasks = []
    }

    function addProject(title) {
        const project = Project(title)
        projectList.push(project)
        //Display projects
    }

    function editProject() {
        // edit code here
        //Display projects
    }

    function deleteProject(index) {
        if (index > -1) {
            projectList.splice(index, 1)
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