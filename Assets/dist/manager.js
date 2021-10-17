import Employee from "./employee.js"

// Manager class
class Manager extends Employee{
    constructor(name, id, email, office_num){
        super(name, id, email)
        this.office_num = office_num
    }
}


export default Manager