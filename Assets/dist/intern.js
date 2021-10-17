import Employee from "./employee.js"

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
}


var html_int=
`
<!-- User 3: Intern -->
<div class="border border-light rounded-bottom shadow bg-light m-4" style="height: 320px; width: 250px;">
    <div class="bg-primary p-2 text-white rounded-top">
        <h3> </h3>
        <h4>⚔ Intern</h4>
    </div>
    <div class="border m-4 mt-5 bg-white">
        <h5 class="p-2" style="font-size: 15px">ID: <span></span></h5>
        <h5 class="p-2 border-top" style="font-size: 13px">E-mail: <a href="mailto: "> </a></h5>
        <h5 class="p-2 border-top" style="font-size: 13px">School: <span> </span></h5>
    </div>
</div>
`