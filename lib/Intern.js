import Employee from "./Employee.js";

export default class Intern extends Employee {
    // constructor method
    constructor(name, id, email, school) {
        super(name, id , email)
        this.school = school;
    }
    // Methods
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}
