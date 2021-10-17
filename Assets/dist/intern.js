import Employee from "./employee.js"

// Intern class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
}

export default Intern
