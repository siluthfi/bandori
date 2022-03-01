import BandEach from "./BandEach";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Bands = () => {
    const bands = useSelector(state => state.characters)
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <NavLink to={`/bands/poppin-party`}>
                        <img src="/img/img_popipa_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
                <div className="col-md-3">
                    <NavLink to={`/bands/afterglow`}>
                        <img src="/img/img_afterglow_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
                <div className="col-md-3">
                    <NavLink to={`/bands/pastel-palletes`}>
                        <img src="/img/img_pasupare_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <NavLink to={`/bands/roselia`}>
                        <img src="/img/img_roselia_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
                <div className="col-md-3">
                    <NavLink to={`/bands/hello-happy-world`}>
                        <img src="/img/img_harohapi_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <NavLink to={`/bands/morfonica`}>
                        <img src="/img/img_morfonica_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
                <div className="col-md-3">
                    <NavLink to={`/bands/raise-a-suilen`}>
                        <img src="/img/img_ras_fever.png" alt="" className="img-fluid link-custom" />
                    </NavLink>
                </div>
            </div>
            {/* <BandEach characters={bands} /> */}
        </div>
    );
}
 
export default Bands;