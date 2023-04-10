import Employee from "./Employee.js";
export default class Engineer extends Employee {
    //constructor method
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    // Methods
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}
