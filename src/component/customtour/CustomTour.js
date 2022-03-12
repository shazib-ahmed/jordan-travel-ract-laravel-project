import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import custom_tour1 from "../../images/custom_tour1.png";
import custom_tour2 from "../../images/custom_tour2.png";
import custom_tour3 from "../../images/custom_tour3.png";
import custom_tour4 from "../../images/custom_tour4.png";
import custom_tour5 from "../../images/custom_tour5.png";

const CustomTour = () => {
    return (
        <>
            <div className='tour-details'>
                <div className='tour-title'>
                    <h3>TAILOR MADE,</h3>
                    <h4>JORDAN CUSTOMIZED TOURS</h4>
                    <b>Enjoy the trip you always dreamed about!</b>
                    <p>
                        Maecenas sagittis augue quis metus placerat tristique. Mauris bibendum, ligula et maximus luctus, lorem diam sollicitudin ante, vel lacinia neque ipsum eget mauris. Ut volutpat ante vel orci rhoncus, ac facilisis turpis varius. In iaculis maximus pulvinar. Vestibulum consectetur hendrerit tempus.
                    </p>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras varius tincidunt felis, vel consequat tortor tempus sed. Donec at risus lacus. Fusce hendrerit nec nisi quis ornare. Donec vitae urna elit.
                    </p>
                </div>
                <div className='tour-images'>
                    <div className='image-two-column'>
                        <div className='column-one'>
                            <img src={custom_tour5} alt='tour-images'/>
                        </div>
                        <div className='column-two'>
                            <div className='top-column'>
                                <img src={custom_tour1} alt='tour-images'/>
                            </div>

                            <div className='bottom-column'>
                                <img src={custom_tour3} alt='tour-images'/>
                                <img src={custom_tour2} alt='tour-images'/>
                            </div>
                        </div>
                    </div>
                    <div className='full-width-img'>
                        <img src={ custom_tour4} alt='tour-images'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomTour