'use strict'


function counter(from, to, timeInterval){
  setTimeout(function showCounterNum(){
    if(from>to){
      return
    }
      console.log(from++);
      setTimeout(showCounterNum, timeInterval)
      
    },timeInterval) 
}



counter(1,10, 500)

