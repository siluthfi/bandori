import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    const bandcolor = (value) => {
        switch (value) {
            case 'poppin-party' :
                return 'orange'
            case 'afterglow' :
                return 'red'
            case 'pastel-palletes':
                return 'pastel'
            case 'hello-happy-world' :
                return 'yellow'
            case 'roselia' :
                return 'purple'
            case 'morfonica' :
                return 'white'
            case 'raise-a-suilen' :
                return 'retro'
            default:
                return 'blank'
        }
    }
    const [id, setId] = useState(null)
    const data = useSelector(state => state.characters);
    const map = data.map(state => (
        <div className="col-md-4 my-3 " key={state.id}>
            <div className={"card p-3 text-white border border-0 shadow-sm "  + bandcolor(state.slug)}>
                <h5>{state.slug == 'raise-a-suilen' ? state.stageName : state.name}</h5>
                <h5>{state.band}</h5>
            </div>
        </div>
    ));


    const selected = id ? data.filter(state => id == state.id).map(state => (
        <div className="col-md-3 my-3" key={state.id}>
            <NavLink to={`/bands/${state.slug}/${state.nameSlug}`} className="text-decoration-none">
                <div className={"card p-3 text-white border border-0 shadow-sm text-center "  + bandcolor(state.slug)}>
                    <h5>{state.slug == 'raise-a-suilen' ? state.stageName : state.name}</h5>
                    <h5>{state.band}</h5>
                    <img src={`/img/${state.nameSlug}.png`} alt="" className="img-fluid" />
                </div>
            </NavLink>
        </div>
    )) : (<div className="col-md"></div>)
    console.log(data)
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={() => setId(Math.round(Math.random() * data.length) + 1)}>Roll</button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {selected}
            </div>
        </div>
    );
}
 
export default Home;