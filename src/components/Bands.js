import BandEach from "./BandEach";
import { useSelector } from "react-redux";

const Bands = () => {
    const bands = useSelector(state => state.characters)
    return (
        <div className="container-fluid">
            <BandEach characters={bands} />
        </div>
    );
}
 
export default Bands;