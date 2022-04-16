import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRolled = (params) => {
    // const [data, setData] = useState([]);
    const characters = useSelector(state => state.characters);
    
    // return {selected, map, id};
    return (
        <div className="row">
            <div className="col-md-4">
                <img src="/img/kasumi-toyama.png" alt="" className="img-fluid" />
            </div>
        </div>
    );

}
 
export default useRolled;