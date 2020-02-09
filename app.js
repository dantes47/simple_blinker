const blink = () => {
    const header = document.getElementById('greeting');

    if(header.style.visibility == 'hidden') {
       header.style.visibility = "visible"; 
    } else {
       header.style.visibility = "hidden";
    }
}
window.setInterval(blink, 500);