
document.addEventListener("DOMContentLoaded",() => {
    function counter (id,start,end,duration){
        l
        let obj= document.getElementById(id),
        current = start'
        range = end- start,
        increment= end > start ? 1: -1,
        step = Math.abs(Math.floor(duration /range)),
        timer = setInterval(()=> {
             current+= increment;
             obj.textContent = current;
             if(current == end){
                clearInterval(timer);
             }
        }, step);
        counter("count1",0,1287,30)
        counter("count2",0,1287,30)
        counter("count3",0,1287,30)
        counter("count4",0,1287,30)

    });