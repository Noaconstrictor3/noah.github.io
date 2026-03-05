let display=document.getElementById("display")
let island=document.getElementById("island")

function append(v){

if(display.innerText==="0"){
display.innerText=v
}else{
display.innerText+=v
}

tap()

}

function clearDisplay(){

display.innerText="0"

showIsland("Cleared")

}

function calculate(){

try{

let result=eval(display.innerText)

display.innerText=result

saveHistory(result)

showIsland("Result: "+result)

}catch{

display.innerText="Error"

}

}

function tap(){

navigator.vibrate?.(10)

}

function showIsland(text){

island.innerText=text

island.style.transform="scale(1.2)"

setTimeout(()=>{
island.style.transform="scale(1)"
},500)

}

let history=[]

function saveHistory(v){

history.push(v)

}

function voiceInput(){

showIsland("Listening...")

let rec=new webkitSpeechRecognition()

rec.onresult=e=>{

let speech=e.results[0][0].transcript

display.innerText=speech

showIsland("Voice Input")

}

rec.start()

}

function aiHelper(){

let q=prompt("Ask AI to solve math")

if(!q)return

display.innerText=eval(q)

showIsland("AI solved")

}