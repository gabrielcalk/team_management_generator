const Employee = require('./employee')

// Engineer class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
}

module.exports = Engineer

