const transition = (duration, firstState, lastState, setState)=>{
    var startTime = new Date().getTime();
    var transitionRange = lastState - firstState;
    var interval = setInterval(() => {
        var time = new Date().getTime()
        if((time - startTime) < duration){
            var timeSpend = time - startTime
            var percentTime = timeSpend / duration
            setState(firstState + (transitionRange * percentTime))
        }else{
            setState(lastState)
            clearInterval(interval)
        }
    }, 10);
}

export default transition