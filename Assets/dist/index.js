import inquirer from 'inquirer'


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

const question_add = ([
    {
        type: 'rawlist',
        message: "Do you want to add one employee in your's team?",
        choices: ['I want to add one engineer', 'I want to add one intern', 'I am done'],
        name: 'man_option'
    }
])

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


        
    </section>
</body>
</html>
`

function init_question(){
    inquirer.prompt(questions_man).then(response =>{   
        if (response.man_name && response.man_id && response.man_email && response.man_office){
            want_add()
        } else {
            console.log('Please answer all the question')
            init_question()
        }
    })
}

function want_add(){
    inquirer.prompt(question_add).then(response =>{
        console.log('hey')
    })
}

init_question()