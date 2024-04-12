#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Todos: string[] = [];
let conditions = true;
console.log(chalk.bgMagentaBright.yellowBright.bold("\n\n\t\tWELCOME TO MY TO_DOSLIST APP:"));
let main = async () => {
  while (conditions) {
    let Taskoptions = await inquirer.prompt([
      {
        name: "taskoption",
        type: "list",
        message: "What you want to select in tasksoptions?",
        choices: [
          "AddTo_dosTask",
          "View Todolist",
          "Update Todolist",
          "Delete To_dostask",
          "Exit",
        ],
      },
    ]);
    if(Taskoptions.taskoption==="AddTo_dosTask"){
        await addto_dostask()

    }
    else if(Taskoptions.taskoption==="View Todolist"){
        await viewtasks()
    }
    else if(Taskoptions.taskoption==="Update Todolist"){
        await viewtasks()

    }
    else if(Taskoptions.taskoption==="Delete To_dostask"){
        await Deletetask()

    }
    else if(Taskoptions.taskoption==="Exit")
        conditions=false;
}
}
let addto_dostask = async()=>{
    let Nexttask =await inquirer.prompt([{
        name:"newtask",
        type:"input",
        message:"Enter your next task!",
    }]);
    Todos.push(Nexttask.newtask);
    console.log(chalk.bold.greenBright.bgCyanBright(`\n${Nexttask.newtask} To_dos Tasks are successfully added`));

}
let viewtasks =async()=>{
    console.log("\nOur Todos list:\n");
    Todos.forEach((newtask,index)=>{
        console.log(chalk.bold.magentaBright.italic(`${index +1}:${newtask}`));//+1 means hamara task ka 1 index ho 
    })
}
let Deletetask=async() =>{
    await viewtasks()
    let TaskIndex=await inquirer.prompt([{
        name:"index",
        type:"number",
        message:"Select To_dos tasks index you want to delete:",
    }])
    let Deletetask=Todos.splice(TaskIndex.index -1,1);
    console.log(chalk.redBright.italic(`${Deletetask} task has been delete successfully 
    in your todos list`));

}
let Updatedtask=async()=>{
    await viewtasks()
    let updatetask_index= await inquirer.prompt([{
        name:"index",
        type:"number",
        message:"Select To_dos tasks index if you want to update:",
    },
{
    name:"NewTask",
    type:"input",
    message:"Enter your new task name:"
}]);
Todos[updatetask_index.index -1]=updatetask_index.NewTask
console.log(chalk.cyanBright.italic(`${updatetask_index.index -1} task has been update successfully 
in your todos list[for update task you can check ViewTodolist]`));
}
main();

