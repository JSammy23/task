

const projects = (() => {
    let projectMap;

    // Check local storage and efault project
    if (localStorage.getItem('projects') === null) {
        projectMap = new Map()
        projectMap.set('My Project', {
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
        projectMap.set('Work', {
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
        projectMap = new Map(JSON.parse(localStorage.projectMap));
    };

    localStorage.projectMap = JSON.stringify(Array.from(projectMap));

    console.log(projectMap)

    

    const Project = title => {
        this.title = title
        const tasks = []
    }

    function addProject(title) {
        const project = Project(title)
        if (!(projectMap.has(`${title}`))) {
            projectMap.set(`${title}`, project)
        } else return
        //Display projects
    }

    function editProject() {
        // edit code here
        //Display projects
    }

    function deleteProject(title) {
        if (projectMap.has(`${title}`)) {
            projectMap.delete(`${title}`)
        }
        //Display projects
    }

    return {
        projectMap,
        addProject,
        deleteProject
    }
})();

export default projects;