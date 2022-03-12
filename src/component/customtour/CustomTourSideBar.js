import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";

const CustomTourSideBar = () => {
    return (
        <>
            <div className='tour-sidebar-custom'>
                <span>Request a Custom Tour</span>
                <div className='personal-information'>
                    <b>Personal Information</b>
                    <div className='form-box-user'>
                        <label>* First Name</label>
                        <div className='first-name'>
                            <select>
                                <option>Mr.</option>
                                <option>Mrs.</option>
                            </select>
                            <input placeholder='First Name' />
                        </div>
                    </div>
                    <div className='form-box-user'>
                        <label>* Last Name</label>
                        <input placeholder='Last Name' />
                    </div>
                    <div className='form-box-user'>
                        <label>* Contact Number</label>
                        <input placeholder='Contact Number' />
                    </div>
                    <div className='form-box-user'>
                        <label>* Email</label>
                        <input placeholder='Email' />
                    </div>
                    <div className='form-box-user'>
                        <label>* Nationality</label>
                        <input placeholder='Nationality' />
                    </div>
                </div>
                <div className='tour-information-box'>
                    <b>Tour Information</b>
                    <div className='form-box-user'>
                        <label>* Arrival Date</label>
                        <input type='date' placeholder='Arrival Date' />
                    </div>
                    <div className='form-box-user'>
                        <label>* No. of adults</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className='form-box-user'>
                        <label>* No. of children</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className='form-box-user'>
                        <label>Hotel preference</label>
                        <div className='box-start-icon'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>

                    <div className='form-box-user'>
                        <label>Additional Information</label>
                        <textarea placeholder='Please include additional information here..'></textarea>
                    </div>
                </div>
                <button>Submit your request</button>
            </div>
        </>
    )
}

export default CustomTourSideBar