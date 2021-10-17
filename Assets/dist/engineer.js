import Employee from "./employee.js"

// Engineer class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
}

export default Engineer

