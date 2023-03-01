import { useState, useEffect } from "react";
function PathRouter(props) {
   const [path, updatePath] = useState(window.location.pathname)
    useEffect(() => {
        const urlChange = () => {
            updatePath(window.location.pathname)
        }
        window.addEventListener("navigate", urlChange)
        return () => {window.removeEventListener("navigate",urlChange)}
    }
    )
    if(path == props.path){
        return props.page();
    }
}
export default PathRouter;