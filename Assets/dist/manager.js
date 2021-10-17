import Employee from "./employee.js"

class Manager extends Employee{
    constructor(name, id, email, office_num){
        super(name, id, email)
        this.office_num = office_num
    }
}

var manag = new Manager('Gabriel', 1, 'gabrielcalk@outlook.com', 20)

var html_man =
`
<!-- User 1: Manager -->
<div class="border border-light rounded-bottom shadow bg-light m-4" style="height: 320px; width: 250px;">
    <div class="bg-primary p-2 text-white rounded-top">
        <h3>${manag.name}</h3>
        <h4>☕ Manager</h4>
    </div>
    <div class="border m-4 mt-5 bg-white">
        <h5 class="p-2" style="font-size: 15px">ID: <span>${manag.id}</span></h5>
        <h5 class="p-2 border-top" style="font-size: 13px">E-mail: <a href="mailto: ">${manag.email}</a></h5>
        <h5 class="p-2 border-top" style="font-size: 13px">Office Number: <span>${manag.office_num}<span></h5>
    </div>
</div>
`

console.log(html_man)