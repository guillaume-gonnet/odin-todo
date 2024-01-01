export default class Task {
    constructor(name, description, date, project, priority) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.project = project;
        this.priority = priority;
        this.id = Date.now();
    }

    editTask() { }

}