//function to display time 
function display() { 
    let ampm = document.getElementById('ampm') 
    let dateTime = new Date() 
    let hour = dateTime.getHours() 
    let min = addZeros(dateTime.getMinutes() )
    let sec = addZeros(dateTime.getSeconds() )  
    if(hour>12) {
        hour = hour - 12 
        ampm.innerHTML = 'PM' 
    } 


    document.getElementById('hours').innerHTML = addZeros(hour) 
    document.getElementById('min').innerHTML = min
    document.getElementById('seconds').innerHTML = sec 
 } 



 
 //function to add zeros 
 function addZeros(num) {
    return num<10 ? '0'+num : num  
 }  



function daysOfWeek() { 

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = new Date();
const dayName = daysOfWeek[today.getDay()]; 
document.getElementById('day').innerHTML = dayName  
}  


function getDate() {
    let  today = new Date() ; 
    let today_date = today.getDate() ; 
    if(today_date<10) {
        today_date = '0' + today_date 
    }  
    console.log(today_date) 
    document.getElementById('date').innerHTML = today_date 
} 

function getMonth() {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const today = new Date();
      const monthName = months[today.getMonth()]; 

      document.getElementById('month').innerHTML = monthName 
}


daysOfWeek() 
getDate()  
getMonth() 
setInterval(display,500)  