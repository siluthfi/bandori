import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        // <div className="footer">
        // <div className="container-fluid foot">
        //     <div className="row text-white py-3">
        //         <div className="col-md my-2 text-center text-md-end">
        //             <span className="fs-5 me-2"><i className="bi bi-instagram text-dark"></i> <a href="https://www.instagram.com/si_luthfi_/" className="text-decoration-none border-bottom border-dark border-3" style="color: black;" target="_blank"></i>si_luthfi_</a></span>
        //             <span>X</span>
        //             <span className="fs-5 ms-2"><i className="bi bi-instagram text-dark"></i> <a href="https://www.instagram.com/llfg.id/" className="text-decoration-none border-bottom border-dark border-3" style="color: black;" target="_blank">LLFG</a></span>
        //         </div>
        //         <div className="col-md my-2 text-center text-md-start">
        //             <span className="fs-5 me-2"><a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" className="text-decoration-none text-danger"><i className="bi bi-youtube"></i> Youtube</a></span>
        //             <span className="fs-5">&copy; 2021</span>
        //         </div>
        //     </div>
        //     </div>
        // </div>
        <div className="footer">
            <div className="container-fluid bg-dark">
                <div className="row text-white py-3">
                    <div className="col-md my-2 text-center text-md-end">
                        <span className="fs-5 me-2"><i className="bi bi-instagram"><Link to="https://www.instagram.com/si_luthfi_/" className="text-decoration-none border-bottom border-dark border-3 text-white" target="_blank">si_luthfi </Link></i></span>
                        <span>X</span>
                        <span className="fs-5 ms-2 text-dark"><i className="bi bi-instagram"> <Link to="https://www.instagram.com/llfg.id/" className="text-decoration-none border-bottom border-dark border-3">LLFG</Link></i></span>
                    </div>
                    <div className="col-md my-2 text-center text-md-start">
                        <span className="fs-5 me-2"><Link to="https://youtu.be/dQw4w9WgXcQ" target="_blank" className="text-decoration-none text-danger"><i className="bi bi-youtube"> Youtube</i></Link></span>
                        <span className="fs-5">&copy; 2021</span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Footer;