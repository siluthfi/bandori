import React from "react";
import { Link } from "react-router-dom";

const BandEach = ({ characters }) => {
    const popipa = characters.filter(chara => {
        return chara.band === "Poppin'Party"
    }).map((chara, id) => {
        return (
                <div className="col-md mb-3" id="poppinParty" key={id + 1}>
                    <Link to={`/bands/${chara.slug}/${chara.nameSlug}`}>
                        <img src={`/img/${chara.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                    </Link>
                </div>
        )
    })
    
    const afterglow = characters.filter(chara => {
        return chara.band === "Afterglow"
    }).map((chara, id) => {
        return (
                <div className="col-md mb-3" id="Afterglow" key={id + 1}>
                    <Link to={`/bands/${chara.slug}/${chara.nameSlug}`}>
                        <img src={`/img/${chara.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                    </Link>
                </div>
        )
    })
    
    const pasupare = characters.filter(chara => {
        return chara.band === "Pastel*Palletes"
    }).map((chara, id) => {
        return (
                <div className="col-md mb-3" id="PastelPalletes" key={id + 1}>
                    <Link to={`/bands/${chara.slug}/${chara.nameSlug}`}>
                        <img src={`/img/${chara.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                    </Link>
                </div>
        )
    })
    
    const roselia = characters.filter(chara => {
        return chara.band === "Roselia"
    }).map((chara, id) => {
        return (
                <div className="col-md mb-3" id="Roselia" key={id + 1}>
                    <Link to={`/bands/${chara.slug}/${chara.nameSlug}`}>
                        <img src={`/img/${chara.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                    </Link>
                </div>
        )
    })
    
    const harohapi = characters.filter(chara => {
        return chara.band === "Hello Happy World"
    }).map((chara, id) => {
        return (
                <div className="col-md mb-3" id="HHW" key={id + 1}>
                    <Link to={`/bands/${chara.slug}/${chara.nameSlug}`}>
                        <img src={`/img/${chara.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                    </Link>
                </div>
        )
    })
    
    const morfonica = characters.filter(chara => {
        return chara.band === "Morfonica"
    }).map((chara, id) => {
        return (
                <div className="col-md mb-3" id="Morfonica" key={id + 1}>
                    <Link to={`/bands/${chara.slug}/${chara.nameSlug}`}>
                        <img src={`/img/${chara.nameSlug}.png`} alt="" className="img-fluid shadow link-custom" />
                    </Link>
                </div>
        )   
    })

    return (
        <>
            <section id="popipa">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <img src="/img/Poppin Party logo.png" alt="" className="img-fluid" width="350" />
                    </div>
                </div>
                <div className="row">
                    {popipa}
                </div>
            </section>

            <section id="afterglow">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <img src="/img/Afterglow.png" alt="" className="img-fluid" width="350" />
                    </div>
                </div>
                <div className="row">
                    {afterglow}
                </div>
            </section>

            <section id="pasupare">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <img src="/img/pasupare.png" alt="" className="img-fluid" width="350" />
                    </div>
                </div>
                <div className="row">
                    {pasupare}
                </div>
            </section>
            
            <section id="roselia">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <img src="/img/roselia.png" alt="" className="img-fluid" width="350" />
                    </div>
                </div>
                <div className="row">
                    {roselia}
                </div>
            </section>
            
            <section id="harohapi">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <img src="/img/harohapi.png" alt="" className="img-fluid" width="350" />
                    </div>
                </div>
                <div className="row">
                    {harohapi}
                </div>
            </section>
            
            <section id="morfonica">
                <div className="row">
                    <div className="col-md mb-3 text-center">
                        <img src="/img/morfonica.png" alt="" className="img-fluid" width="350" />
                    </div>
                </div>
                <div className="row">
                    {morfonica}
                </div>
            </section>
        </>
    );
}
 
export default BandEach;