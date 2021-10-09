console.log("In log add new text, which man add to code");
alert("Welcome to my site")
document.write("This text was add with help java script")
function myPrint(){
    alert("I'm function")
}
function changeColor(){
    document.getElementById("testText").classList.add("goldStyle")
    document.getElementById("testText").classList.add("redStyle")
   
}
function returnColor(){
    document.getElementById("testText").classList.remove("redStyle")
}
function returnColorToggle(){
    document.getElementById("testText").classList.toggle("goldStyle")
}
function saveSelectText(){
    txt=document.getElementById("myText");
    saveText=event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    resultText=document.getElementById("resultText");
    resultText.value=saveText;

}
answer=prompt("You are man?")
if (answer="Yes"){
    alert("Hello boy" )
}