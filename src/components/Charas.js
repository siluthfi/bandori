import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Charas extends Component {
    state = {
        aqours: null
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleControls" class="carousel carousel-dark slide carousel-fade p-0" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <Link to="/bands/poppin-party/kasumi">
                                    <div className='d-none d-lg-block this-is-for-web'>
                                        <img src="/img/arisa web.png" class="d-block w-100" alt="..." />
                                    </div>
                                </Link>
                                <Link to="/bands/poppin-party/kasumi">
                                    <div className='d-lg-none d-block this-is-for-phone'>
                                        <img src="/img/kasumi.png" alt="Arisa Ichigaya" className='d-block w-100' />
                                    </div>
                                </Link>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className='d-none d-lg-block this-is-for-web'>
                                    <img src="/img/arisa web.png" class="d-block w-100" alt="..." />
                                </div>
                                <div className='d-lg-none d-block this-is-for-phone'>
                                    <img src="/img/arisa phone.png" alt="Arisa Ichigaya" className='d-block w-100' />
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className='d-none d-lg-block this-is-for-web'>
                                    <img src="/img/arisa web.png" class="d-block w-100" alt="..." />
                                </div>
                                <div className='d-lg-none d-block this-is-for-phone'>
                                    <img src="/img/tae.png" alt="Arisa Ichigaya" className='d-block w-100' />
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className='d-none d-lg-block this-is-for-web'>
                                    <img src="/img/arisa web.png" class="d-block w-100" alt="..." />
                                </div>
                                <div className='d-lg-none d-block this-is-for-phone'>
                                    <img src="/img/rimi.png" alt="Arisa Ichigaya" className='d-block w-100' />
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div className='d-none d-lg-block this-is-for-web'>
                                    <img src="/img/arisa web.png" class="d-block w-100" alt="..." />
                                </div>
                                <div className='d-lg-none d-block this-is-for-phone'>
                                    <img src="/img/saaya.png" alt="Arisa Ichigaya" className='d-block w-100' />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}