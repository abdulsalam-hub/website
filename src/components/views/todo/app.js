const timer = document.querySelector('span');
const milisecs = document.getElementById('mili')
const showTimer = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    if (hour < 12) {
        timer.innerHTML = `${hour} : ${minute} : ${second} AM`
    } else if (hour >= 12) {
        timer.innerHTML = `${hour} : ${minute} : ${second} PM`
    } else {
        timer.innerHTML = `${hour} : ${minute} : ${second}`
    }




}
setInterval(showTimer, 1000);
setInterval(() => {
    milisecs.innerHTML = new Date().getMilliseconds()
}, 100);
console.log(showTimer())