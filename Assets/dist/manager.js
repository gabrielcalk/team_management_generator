const Employee = require('./employee')

// Manager class
class Manager extends Employee{
    constructor(name, id, email, office_num){
        super(name, id, email)
        this.office_num = office_num
    }
}


module.exports = Manager