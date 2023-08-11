import { useEffect, useState } from "react";

const useOnlineStatus=()=>{

    console.log("useOnlineStatus called")

    const [onlineStatus, setonlineStatus] = useState(true)

    useEffect(()=>{ // we one to check this only once hence using here

    // try to check if online
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    function updateOnlineStatus(event) {
      var condition = navigator.onLine ? setonlineStatus(true) : setonlineStatus(false);
      document.body.className = condition;
    }

    })

    // return online status
    // bool value
    return onlineStatus;
}


export default useOnlineStatus;