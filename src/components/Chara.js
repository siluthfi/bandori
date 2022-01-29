import { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import DataMember from "./data/DataMember";
import DataBand from "./data/DataBand";
import { useSelector } from "react-redux";

const Chara = () => {
    useEffect(() => {
        setGambar(member)
    }, []);

    const [name, setName] = useState('');
    const { band, member } = useParams()
    const eachmember = useSelector(state => state.characters)
                        .filter(chara => chara.slug === band)
                        .filter(band => band.nameSlug === member)
                        .map(data => data)[0];

    const history = useHistory();
    
    const [gambar, setGambar] = useState(null);
    
    /* using custom hooks
    const { band, member } = useParams()
    const { band: bandname, hash } = DataBand(band)
    const { name, role } = DataMember(member)
    */

    const handleClick = () => {
        setGambar(member + "-before")
    }
    
    const handleClick2 = () => {
        setGambar(member)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-2 d-flex align-content-center flex-wrap">
                    <div className="row">
                        <div className="col-md on-hover" onClick={handleClick}>
                            <img src={`/img/${eachmember.nameSlug}-icon-before.png`} alt="" className='shadow' />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src={`/img/${gambar}.png`} alt="" className="img-fluid shadow transition-3" />
                </div>
                <div className="col-md-2 d-flex align-content-center flex-wrap">
                    <div className="row">
                        <div className="col-md on-hover" onClick={handleClick2}>
                            <img src={`/img/${eachmember.nameSlug}-icon.png`} alt="" className='shadow' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-md-1">
                    <button className="btn btn-custom shadow-sm" onClick={() => history.goBack()}>Back</button>
                </div>
            </div>
        </div>
    );
}
 
export default Chara;