console.log("entered order.js file")
setTimeout(() => {
    document.getElementById('orderButn').addEventListener('click',function(event){
        event.preventDefault();
        console.log("order.html submit button clicked");
        window.location.href="/project/index.html";
    });
    const orderButn= document.getElementById("orderButn");
    const para=document.getElementById("para");
    orderButn.addEventListener('click',(event)=>{
        event.preventDefault();
        if (para.style.display==='block') {
            para.style.display='none';
        }else{
            para.styel.display='block';
        }
    });
}, 3000);
