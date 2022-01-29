import { Link, useParams } from "react-router-dom";
import DataMember from "./data/DataMember";
import DataBand from "./data/DataBand";
import { useSelector } from "react-redux";
import { useState } from "react";

const Chara = () => {
    const [name, setName] = useState('');
    const { band, member } = useParams()
    const eachmember = useSelector(state => state.characters)
                        .filter(chara => chara.slug === band)
                        .filter(band => band.nameSlug === member)
                        .map(data => data)[0];

    /* using custom hooks 
        const { band: bandname, hash } = DataBand(band)
        const { name, role } = DataMember(member)
    */

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-1">
                    <img src={`/img/${eachmember.nameSlug}.png`} alt="" className="img-fluid shadow" />
                </div>
                <div className="col-md-7 bg-white shadow">
                    <h1 className="text-center display-3 mt-5"></h1>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-3 offset-md-1">
                    <Link to={`/bands#${eachmember.slug}`} className="btn btn-custom shadow-sm">Back</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Chara;