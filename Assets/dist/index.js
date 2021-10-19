// Importing inquirer and fs library 
const inquirer = require('inquirer')
const fs = require('fs')

// Importing the Class: Manager, Engineer and Intern to this file
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')

// Adding 3 arrays that will contain the manager, engenieer team, and intern group
const manager_team = []
const eng_team = []
const int_team = []

// arrays that will cointain the Engineer html and Intern html
const arrayTeam_eng = []
const arrayTeam_int = []

// Manager questions
const questions_man = ([
    {
        type: 'input',
        message: "Enter the team manager's name: ",
        name: 'man_name'
    },
    {
        type: 'number',
        message: 'Enter your employee ID: ',
        name: 'man_id'
    },
    {
        type: 'input',
        message: 'Enter your e-mail address: ',
        name: 'man_email'
    },
    {
        type: 'number',
        message: 'Enter your office number: ',
        name: 'man_office'
    },
])

// Question that let the user add one engenieer, intern or create the page
const question_add = ([
    {
        type: 'rawlist',
        message: "Do you want to add one employee in your's team?",
        choices: ['I want to add one engineer', 'I want to add one intern', 'I am done'],
        name: 'man_option'
    }
])

// Engineer questions
const questions_eng = ([
    {
        type: 'input',
        message: "Enter the Engineer name: ",
        name: 'eng_name'
    },
    {
        type: 'number',
        message: 'Enter his/her ID: ',
        name: 'eng_id'
    },
    {
        type: 'input',
        message: 'Enter his/her e-mail address: ',
        name: 'eng_email'
    },
    {
        type: 'input',
        message: 'Enter his/her GitHub Username: ',
        name: 'eng_github'
    },
])

// Intern questions
const questions_int = ([
    {
        type: 'input',
        message: "Enter the Intern name: ",
        name: 'int_name'
    },
    {
        type: 'number',
        message: 'Enter his/her ID: ',
        name: 'int_id'
    },
    {
        type: 'input',
        message: 'Enter his/her e-mail address: ',
        name: 'int_email'
    },
    {
        type: 'input',
        message: 'Enter his/her School: ',
        name: 'int_school'
    },
])


function init_question(){

    // Showing the manager questions (starting the system)
    inquirer.prompt(questions_man).then(response =>{  

        // If the user add informations correctly about the manager, 
        // then let he/she add one engineer, intern or generate the page
        if (response.man_name && response.man_id && response.man_email && response.man_office){
            want_add()
        } else {

        // If not, then show the questions again
            console.log('Please answer all the question correctly')
            init_question()
        }

        // Pushing the manager informations to an array
        var manager_profile = new Manager(response.man_name, response.man_id, response.man_email, response.man_office)
        manager_team.push(manager_profile)
    }) 
}

// Showing the question that let the user pick one engineer or intern or generate page
function want_add(){
    inquirer.prompt(question_add).then(response =>{
        // If the user want add one engineer, then show the questions and push the answers to an array
        response.man_option == 'I want to add one engineer' ? inquirer.prompt(questions_eng).then(response =>{
            var new_eng = new Engineer (response.eng_name, response.eng_id, response.eng_email, response.eng_github)
            eng_team.push(new_eng)
            want_add()
        })
        // If the user want add one intern, then show the questions and push the answers to an array
        : response.man_option == 'I want to add one intern' ? inquirer.prompt(questions_int).then(response =>{
            var new_int = new Intern (response.int_name, response.int_id, response.int_email, response.int_school)
            int_team.push(new_int)
            want_add()
        })
        // If not, then generate one html
        : create_page()
    })
}

// Calling the init_question function
init_question()

// Creating the html page
const create_page = () => {
// getting the html code for the engineer and intern
    add_page_eng(eng_team)
    add_page_int(int_team)

    var html_page = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Page</title>
</head>

<!-- This is the header of the page -->
 <header class="bg-danger text-white d-flex align-items-center justify-content-center" style="height: 150px">
     <h1>My Team</h1>
 </header>
<body>
    <section class="d-flex justify-content-around align-items-center flex-wrap" style="margin: 20px 50px 0 50px">

    <!-- User 1: manager -->
        <div class="border border-light rounded-bottom shadow bg-light m-4" style="height: 320px; width: 250px;">
            <div class="bg-primary p-2 text-white rounded-top">
                <h3>${manager_team[0].name}</h3>
                <h4>☕ Manager</h4>
            </div>
            <div class="border m-4 mt-5 bg-white">
                <h5 class="p-2" style="font-size: 15px">ID: <span>${manager_team[0].id}</span></h5>
                <h5 class="p-2 border-top" style="font-size: 13px">E-mail: <a href="mailto: ${manager_team[0].email}">${manager_team[0].email}</a></h5>
                <h5 class="p-2 border-top" style="font-size: 13px">Office Number: <span>${manager_team[0].office_num}<span></h5>
            </div>
        </div>
    ${arrayTeam_eng.join('<br>')}
    ${arrayTeam_int.join('<br')}
    </section>
</body>
</html>
`
// Creating the html
    fs.writeFile('../../index.html', html_page, (err) =>{
        if (err){
            throw err;
        }
    })
}

// Creating one html code for each Engineer
const add_page_eng = (eng_team) =>{
    for (let e of eng_team){
        var html_eng =`
            <!-- User 2: Engineer -->
            <div class="border border-light rounded-bottom shadow bg-light m-4" style="height: 320px; width: 250px;">
                <div class="bg-primary p-2 text-white rounded-top">
                    <h3>${e.name}</h3>
                    <h4>🏹 Engineer</h4>
                </div>
                <div class="border m-4 mt-5 bg-white">
                    <h5 class="p-2" style="font-size: 15px">ID: <span>${e.id}</span></h5>
                    <h5 class="p-2 border-top" style="font-size: 13px">E-mail: <a href="mailto: ${e.email}">${e.email}</a></h5>
                    <h5 class="p-2 border-top" style="font-size: 13px">GitHub: <a href="https://github.com/${e.github}">${e.github}</a></h5>
                </div>
            </div>
            `
        arrayTeam_eng.push(html_eng)
    }
}

// Creating one html code for each intern
const add_page_int = (int_team) => {
    for (let e of int_team){
    var html_int=`
        <!-- User 3: Intern -->
        <div class="border border-light rounded-bottom shadow bg-light m-4" style="height: 320px; width: 250px;">
            <div class="bg-primary p-2 text-white rounded-top">
                <h3>${e.name}</h3>
                <h4>⚔ Intern</h4>
            </div>
            <div class="border m-4 mt-5 bg-white">
                <h5 class="p-2" style="font-size: 15px">ID: <span>${e.id}</span></h5>
                <h5 class="p-2 border-top" style="font-size: 13px">E-mail: <a href="mailto: ${e.email}">${e.email}</a></h5>
                <h5 class="p-2 border-top" style="font-size: 13px">School: <span>${e.school}</span></h5>
            </div>
        </div>
        `
    arrayTeam_int.push(html_int)
    }
}

module.exports = {create_page, add_page_eng, add_page_int}