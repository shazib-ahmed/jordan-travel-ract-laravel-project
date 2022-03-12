import React from 'react'
import { Route, Routes} from "react-router-dom";
import HomePage from '../pages/HomePage';
import Agency from '../pages/Agency';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import CustomTourPage from '../pages/CustomTourPage';
import TestimonialPage from '../pages/TestimonialPage';
import PlacesPage from '../pages/PlacesPage';
import InnerPage from '../pages/InnerPage';
import TourDetailsPage from '../pages/TourDetailsPage';
import TourListPage from '../pages/TourListPage';

const Router = () => {
        return (
            <>
                <Routes >
                    <Route exact path='/' element={<HomePage/>} />
                    <Route exact path='/agency' element={<Agency/>} />
                    <Route exact path='/blog' element={<BlogPage/>} />
                    <Route exact path='/contact-us' element={<ContactPage/>} />
                    <Route exact path='/custom-tour' element={<CustomTourPage/>} />
                    <Route exact path='/customer-feedback' element={<TestimonialPage/>} />
                    <Route exact path='/places-to-visit' element={<PlacesPage/>} />
                    <Route exact path='/innerpage' element={<InnerPage/>} />
                    <Route exact path='/tour-details' element={<TourDetailsPage/>} />
                    <Route exact path='/tour-list' element={<TourListPage/>} />
                </Routes>   
            </>
        )
}

export default Router;