import { Component, useState } from "react";
import { Link } from 'react-router-dom';

class Bands extends Component {
    state = {
        characters : [
            {id: 1, name: 'Kasumi Toyama', band: "Poppin'Party", role: "Vocal & Guitar"},
            {id: 2, name: 'Arisan Ichigaya', band: "Poppin'Party", role: "Keyboard"},
            {id: 3, name: 'Tae Hanazono', band: "Poppin'Party", role: "Guitar"},
            {id: 4, name: 'Saaya Yamabuki', band: "Poppin'Party", role: "Drum"},
            {id: 5, name: 'Rimi Ushigome', band: "Poppin'Party", role: "Bass"},
            {id: 6, name: 'Ran Mitake', band: "Afterglow", role: "Vocal & Guitar"},
            {id: 7, name: 'Moca Aoba', band: "Afterglow", role: "Guitar"},
            {id: 8, name: 'Himari Uehara', band: "Afterglow", role: "Bass" },
            {id: 9, name: 'Tsugumi Hazawa', band: "Afterglow", role: "Keyboard"},
            {id: 10, name: 'Tomoe Udagawa', band: "Afterglow", role: "Drum"},
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <section for="popipa">
                    <div className="row">
                        <div className="col-md mb-3 text-center">
                            <img src="/img/Poppin Party logo.png" alt="" className="img-fluid" width="350" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md mb-3">
                            <Link to="/bands/poppin-party/arisa-ichigaya">
                                <img src="/img/arisa phone.png" alt="" className="img-fluid shadow link-custom" />
                            </Link>
                        </div>
                        <div className="col-md mb-3">
                            <Link to="/bands/poppin-party/saaya-yamabuki">
                                <img src="/img/saaya.png" alt="" className="img-fluid shadow link-custom" />
                            </Link>
                        </div>
                        <div className="col-md mb-3">
                            <Link to="/bands/poppin-party/kasumi-toyama">
                                <img src="/img/kasumi.png" alt="" className="img-fluid shadow link-custom" />
                            </Link>
                        </div>
                        <div className="col-md mb-3">
                            <Link to="/bands/poppin-party/rimi-ushigome">
                                <img src="/img/rimi.png" alt="" className="img-fluid shadow link-custom" />
                            </Link>
                        </div>
                        <div className="col-md mb-3">
                            <Link to="/bands/poppin-party/tae-hanazono">
                                <img src="/img/tae.png" alt="" className="img-fluid shadow link-custom" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section for="afterglow">
                    <div className="row">
                        <div className="col-md mb-3 text-center">
                            <img src="/img/Afterglow.png" alt="" className="img-fluid" width="350" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md mb-3">
                            <Link to="/bands/afterglow/tsugumi-hazawa">
                                <img src="/img/tsugumi.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/afterglow/tomoe-udagawa">
                                <img src="/img/tomoe 2.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/afterglow/ran-mitake">
                                <img src="/img/ran 1.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/afterglow/himari-uehara">
                                <img src="/img/himari 2.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/afterglow/moca-aoba">
                                <img src="/img/moca.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section for="pasupare">
                    <div className="row">
                        <div className="col-md mb-3 text-center">
                            <img src="/img/pasupare.png" alt="" className="img-fluid" width="350" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md mb-3">
                            <Link to="/bands/pastel-pallets/eve-wakamiya">
                                <img src="/img/eve.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/pastel-pallets/maya-yamato">
                                <img src="/img/maya.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/pastel-pallets/aya-maruyama">
                                <img src="/img/aya.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/pastel-pallets/chisato-shirasagi">
                                <img src="/img/chisato.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                        <div className="col-md mb-3 ">
                            <Link to="/bands/pastel-pallets/hina-hikawa">
                                <img src="/img/hina.png" alt="" className="img-fluid link-custom shadow" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Bands;