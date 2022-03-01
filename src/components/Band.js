import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const Band = () => {
    const { band } = useParams();
    const characters = useSelector(state => state.characters).filter(state => state.slug == band);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <img src={`/img/${band}.png`} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3">
                <div className="row">
                    {
                        characters.map(data => (
                            <div className="col-md mb-3" id={`${data.band}`} key={data.id}>
                                <Link to={`/bands/${data.slug}/${data.nameSlug}`}>
                                    <img src={`/img/${data.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                                </Link>
                            </div>       
                        ))
                    }
                </div>
            </div>
        </>
    );
}
 
export default Band;