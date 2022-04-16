import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useRolled from "../config/useRolled";

const Home = () => {
    const [radio, setRadio] = useState([]);
    const bands = ['poppin-party', 'afterglow', 'pastel-palletes', 'hello-happy-world', 'roselia', 'morfonica', 'raise-a-suilen']

    const characters = useSelector(state => state.characters);

    console.log(characters);

    const handleSort = e => {
        const parentFilter = document.querySelector('#parentFilter');
        const sortFilter = document.querySelector('#sortFilter');
        parentFilter.classList.toggle('minimize');
        sortFilter.classList.toggle('expandable');
    }

    const handleRadio = (e) => {
        // const {characters} = useRolled('home');
        e.target.toggleAttribute('checked')
        if(e.target.checked) {
            setRadio([...radio, e.target.value])
        }
        if(radio.includes(e.target.value)) {
            setRadio([...radio.filter(state => state !== e.target.value)]);
        }
    }

    const filteredBand = radio.length ?
        characters.filter(chara => {
            return radio.includes(chara.slug)
        }).map((band, i) => (
            <div className="col-md-2 my-3" key={i}>
                <img src={`/img/${band.nameSlug}.png`} alt="" className="img-fluid" />
            </div>)) : characters.map((band, i) => (
        <div className="col-md-2 my-3" key={i}>
            <img src={`/img/${band.nameSlug}.png`} alt="" className="img-fluid" />
        </div>
    ));

    return (
        <div className="container-fluid">
            <div className="row justify-content-center mb-2">
                <div className="col-md-4 text-center">
                    <button className="btn btn-primary" onClick={handleSort}>Expand</button>
                </div>
            </div>
            <div className="row justify-content-center row-sort" id="parentFilter">
                <div className="col-md-5 sorting expandable" id="sortFilter">
                    <form>
                        {/* <button className="btn btn-primary" onClick={() => setId(Math.round(Math.random() * data.length) + 1)}>Roll</button> */}
                        <div className="row my-3">
                            <div className="col-md">
                                <p>Bands</p>
                                {
                                    bands.map((band, i) => (
                                        // <button className="btn btn-primary" key={band} onClick={() => setId(band)}>{band}</button>
                                        <div className="form-check" key={i}>
                                            <input className="form-check-input" type="checkbox" value={band} id={`flexCheckDefault_${i}`} onClick={handleRadio} />
                                            <label className="form-check-label" htmlFor={`flexCheckDefault_${i}`}>
                                                {band}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-md">

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                {filteredBand}
            </div>
        </div>
    );
}
 
export default Home;