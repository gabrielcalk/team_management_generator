import Employee from "../employee.js"
import Manager from "../manager.js"
import Engineer from "../engineer.js"
import Intern from "../intern.js"

describe('Classes', () => {
    describe('Employee', () =>{
        it('should return one object with name, id and email', () => {
            const employee_test = new Employee('Lucas', 1, 'lucas@outlook.com')
            
            expect(employee_test).toEqual({
                name: 'Lucas',
                id: 1,
                email: 'lucas@outlook.com'
            })
        });
    })

    describe('Manager', () => {
        it('should return one object with name, id, email and office_num', () => {
            const manager_test = new Manager('Jon', 2, 'jon@gmail.com', 42)

            expect(manager_test).toEqual({
                name: 'Jon',
                id: 2,
                email: 'jon@gmail.com',
                office_num: 42,
            })
        });
    });

    describe('Engineer', () => {
        it('should return one object with name, id, email and github', () => {
            const engineer_test = new Engineer('Mike', 3, 'mike@gmail.com', 'mike')

            expect(engineer_test).toEqual({
                name: 'Mike',
                id: 3,
                email: 'mike@gmail.com',
                github: 'mike'
            })
        });
    });

    describe('Intern', () => {
        it('should return one object with name, id, email and school', () => {
            const intern_test = new Intern ('livia', 4, 'livia@outlook.com', 'harvad')

            expect(intern_test).toEqual({
                name: 'Livia',
                id: 4,
                email: 'livia@outlook.com',
                school: 'harvard'
            })
        });
    });
})