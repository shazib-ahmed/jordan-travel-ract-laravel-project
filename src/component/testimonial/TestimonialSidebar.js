import React from 'react'
import user1 from "../../images/user1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";
import "../../css/Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from 'react-player'

const TestimonialSidebar = () => {
  return (
    <>
      <section>
        <div className='user-feedback'>
          <div className='videoFeedBack'>
            <div className='Feedback-userImage'>
              <div className='Video-feedBack-arrow'>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <div className='userImage-box'>
                <img src={user1} alt='user-image' />
              </div>
              <div className='userName-box'>
                <b>Debbie</b>
                <span>blogger</span>
              </div>
            </div>
            <div className='feedbacks-video'>
              <ReactPlayer controls='true' width='100%' height='100%' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
          </div>
          <div className='videoFeedBack'>
            <div className='Feedback-userImage'>
              <div className='Video-feedBack-arrow'>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <div className='userImage-box'>
                <img src={user1} alt='user-image' />
              </div>
              <div className='userName-box'>
                <b>Debbie</b>
                <span>blogger</span>
              </div>
            </div>
            <div className='feedbacks-video'>
              <ReactPlayer controls='true' width='100%' height='100%' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
          </div>
          <div className='videoFeedBack'>
            <div className='Feedback-userImage'>
              <div className='Video-feedBack-arrow'>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <div className='userImage-box'>
                <img src={user1} alt='user-image' />
              </div>
              <div className='userName-box'>
                <b>Debbie</b>
                <span>blogger</span>
              </div>
            </div>
            <div className='feedbacks-video'>
              <ReactPlayer controls='true' width='100%' height='100%' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
          </div>
          <div className='videoFeedBack'>
            <div className='Feedback-userImage'>
              <div className='Video-feedBack-arrow'>
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <div className='userImage-box'>
                <img src={user1} alt='user-image' />
              </div>
              <div className='userName-box'>
                <b>Debbie</b>
                <span>blogger</span>
              </div>
            </div>
            <div className='feedbacks-video'>
              <ReactPlayer controls='true' width='100%' height='100%' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSidebar