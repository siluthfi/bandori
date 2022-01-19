import { Link, useParams } from "react-router-dom";
import DataMember from "./data/DataMember";
import DataBand from "./data/DataBand";

const Chara = () => {
    const { band, member } = useParams()
    const { band: bandname, hash } = DataBand(band)
    const { name, role } = DataMember(member)
    console.log(bandname, hash)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-1">
                    <img src={`/img/${member}.png`} alt="" className="img-fluid shadow" />
                </div>
                <div className="col-md-7 bg-white shadow">
                    {/* <h1 className="text-center display-3 mt-5">{name}</h1> */}
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-3 offset-md-1">
                    <Link to={`/bands#${hash}`} className="btn btn-custom shadow-sm">Back</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Chara;