import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const Band = () => {
    const { band } = useParams();
    const characters = useSelector(state => state.characters).filter(state => state.slug == band);
    return (
        <>
            <div className="container p-1">

            </div>
            <div className="container-fluid my-5">
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