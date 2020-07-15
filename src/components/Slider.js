import React, { Fragment } from 'react';

const Slider = () => {
    return (
        <Fragment>
            <div className="col-md-9 d-none d-sm-block ">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/originals/02/ba/d3/02bad35cf2e44a2c544b319e32b6481a.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.wallpapersafari.com/78/32/cxXVUf.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ytimg.com/vi/-I7pty3LU98/maxresdefault.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Slider;