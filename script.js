// function for rock
document.addEventListener('DOMContentLoaded',function loaded(){
  let rock=  document.getElementById('rock');
  rock.addEventListener('click',function compChoice(){
    let number = ['Computer chosen Rock', 'Computer chosen paper', 'Computer chosen Scissors'];
    let compChoice = Math.floor(Math.random()*3)
    let cChoice = (number[compChoice]);
    let cscore = document.getElementById('compscore');
    let uscore = document.getElementById('uscore');
    document.getElementById('c-choice').innerText = cChoice;
    let userchoice = document.getElementById('uchoice').innerText = "You chosen rock";
    if (compChoice==0) {
        document.getElementById('winner').innerText = "Game was Draw";
    } 
    else if(compChoice==1){
        document.getElementById('winner').innerText = "Computer won";
        cscore.innerText++

    }
    else{
        document.getElementById('winner').innerText = "User won";
        uscore.innerText++

    }

  })
    

})
// function for paper
document.addEventListener('DOMContentLoaded',function domloaded(){
    let paper = document.getElementById('paper');
    paper.addEventListener('click',function paper(){
        let userchoice = document.getElementById('uchoice').innerText = "You chosen paper";
        let number = ['Computer chosen Rock', 'Computer chosen paper', 'Computer chosen Scissors'];
    let compChoice = Math.floor(Math.random()*3)
    let cChoice = (number[compChoice]);
    let cscore = document.getElementById('compscore');
    let uscore = document.getElementById('uscore');
    document.getElementById('c-choice').innerText = cChoice;
    
    if (compChoice==1) {
        document.getElementById('winner').innerText = "Game was Draw";
    } 
    else if(compChoice==0){
        document.getElementById('winner').innerText = "You won";
        uscore.innerText++
    }
    else{
        document.getElementById('winner').innerText = "Computer won";
        compscore.innerText++
    }
    
    
        
        

    })

})
//function for scissor
document.addEventListener('DOMContentLoaded',function domloaded(){
    let paper = document.getElementById('sci');
    paper.addEventListener('click',function scissor(){
        let userchoice = document.getElementById('uchoice').innerText = "You chosen Scissors";
        let number = ['Computer chosen Rock', 'Computer chosen paper', 'Computer chosen Scissors'];
    let compChoice = Math.floor(Math.random()*3)
    let cChoice = (number[compChoice]);
    let cscore = document.getElementById('compscore');
    let uscore = document.getElementById('uscore');
    document.getElementById('c-choice').innerText = cChoice;
    
    if (compChoice==2) {
        document.getElementById('winner').innerText = "Game was Draw";
    } 
    else if(compChoice==0){
        document.getElementById('winner').innerText = "Computer won";
        compscore.innerText++
    }
    else{
        document.getElementById('winner').innerText = "You won";
        uscore.innerText++
    }
    
    
        
        

    })

})








