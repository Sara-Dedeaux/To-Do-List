
//TARGET INPUT BOX
let inputBox= document.getElementById("inputBox"); 
console.log(inputBox)

//TARGET INPUT VALUE
let inputValue=inputBox.value; 
console.log(inputValue)

//TARGET SUBMIT BTN
let addBtn=document.querySelector(".submitBtn input")
console.log(addBtn)

//SHOW TEXT BOX CHANGES
inputBox.addEventListener("input", ()=>{
    inputValue=inputBox.value
    console.log(inputValue)
} )

let taskCount=0;

let taskList=document.querySelector(".taskName")
let list=document.querySelector("ul");

addBtn.addEventListener("click", ()=>{
    taskCount++
    //CREATE VARIABLE TO HOLD NEW ELEMENT
    let newTask= document.createElement("input");
    newTask.type="checkbox"; 
    newTask.name=inputValue;
    newTask.value=inputValue;
    newTask.checked=false; 
    newTask.id="task"+taskCount
    let taskID=newTask.id

    let newLabel=document.createElement("label");
    newLabel.for=taskID; 
    newLabel.innerHTML=inputValue;

    let newList=document.createElement("li"); 
    newList.id= "li" + taskCount; 

    list.append(newList)
    

    console.log(newTask)

    newList.append(newTask); 
    newList.append(newLabel);
    


})

//TARGET USER INPUT 
