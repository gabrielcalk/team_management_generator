const Employee = require('../employee')
const Manager = require('../manager')
const Engineer = require('../engineer')
const Intern = require('../intern') 

describe('Classes', () => {
    describe('Employee', () =>{
        it('should return one object with name, id and email', () => {
            const employee_test = new Employee('Lucas', 1, 'lucas@outlook.com')

            expect(employee_test).toMatchObject({
                name: 'Lucas',
                id: 1,
                email: 'lucas@outlook.com'
            })
            
        });
        it('should return the employee name', () => {
            const employee_name = new Employee('Loup')
            expect(employee_name).toEqual({name: 'Loup'})
        });
    })

    describe('Manager', () => {
        it('should return one object with name, id, email and office_num', () => {
            const manager_test = new Manager('Jon', 2, 'jon@gmail.com', 42)

            expect(manager_test).toMatchObject({
                name: 'Jon',
                id: 2,
                email: 'jon@gmail.com',
                office_num: 42,
            })

        });
        it('should return the manager name', () => {
            const manager_name = new Employee('Louper')
            expect(manager_name).toEqual({name: 'Louper'})
        });
    });

    describe('Engineer', () => {
        it('should return one object with name, id, email and github', () => {
            const engineer_test = new Engineer('Mike', 3, 'mike@gmail.com', 'mike')
            
            expect(engineer_test).toMatchObject({
                name: 'Mike',
                id: 3,
                email: 'mike@gmail.com',
                github: 'mike'
            })
            
        });
        it('should return the engineer name', () => {
            const engineer_name = new Employee('Daniel')
            expect(engineer_name).toEqual({name: 'Daniel'})
        });
    });

    describe('Intern', () => {
        it('should return one object with name, id, email and school', () => {
            const intern_test = new Intern ('Livia', 4, 'livia@outlook.com', 'harvard')

            expect(intern_test).toMatchObject({
                name: 'Livia',
                id: 4,
                email: 'livia@outlook.com',
                school: 'harvard'
            })
        });
        it('should return the name of the intern', () =>{
            const intern_name = new Intern ('Ana')
            expect(intern_name).toEqual({name: 'Ana'})
        })
    });
})