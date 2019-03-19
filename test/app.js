const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const inquirer = require('inquirer')
const shell = require('shelljs')

clear()

console.log(
    chalk.blue(
        figlet.textSync('ASDFG',{horizontalLayout: 'full'})
    ),
    chalk.red(
        figlet.textSync('CLI',{horizontalLayout: 'full'})
    )
    
)
function main(){
    inquirer.prompt([
        {
            name: 'ping',
            type: 'list',
            choices: ['ping','who is','download','exit'],
            message: 'What do you want to do?',
            value: '0'
        },
    ]).then(answers =>{
        console.log(answers)
        switch(answers['ping']) {
            case 'ping':
                console.log('1')
                respuesta1()
              break;
            case 'who is':
                console.log('2')
                respuesta2()
              break;
            case 'download':
                console.log('3')
                respuesta3()
            break;
            default:
                return
          }
          
    })
}
main()

function respuesta1(){
    inquirer.prompt([
        {
            name: '2',
            type: 'input',
            message: 'Tell me why are u crying',
        },
    ]).then(answers=>{
        console.log(answers)
        shell.exec('ping '+answers['2'])
    })
}
function respuesta2(){
    inquirer.prompt([
        {
            name: '2',
            type: 'input',
            message: 'Tell me why are u crying',
        },
    ]).then(answers=>{
        console.log(answers)
        shell.exec('whois '+answers['2'])
    })
}
function respuesta3(){
    inquirer.prompt([
        {
            name: '2',
            type: 'input',
            message: 'Tell me why are u crying',
        },
    ]).then(answers=>{
        console.log(answers)
        shell.exec('wget '+answers['2'])
    })
}