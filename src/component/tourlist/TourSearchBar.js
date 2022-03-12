import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const TourSearchBar = () => {
  return (
    <>
      <div className='tour-search-wrapper'>
        <div className='tour-google-map'>
          <span>integrate your google map here with your api</span>
        </div>
        <div className='tour-search-box'>
          <span>
            <FontAwesomeIcon icon={faSearch} />
            Search offers
          </span>
          <div className='search-radio'>
            <div className='radio1'>
              <input type='radio' value='Private Tours' name='tour-type' />
              <label>Private Tours</label>
            </div>
            <div className='radio2'>
              <input type='radio' value='Daily Tours' name='tour-type' />
              <label>Daily Tours</label>
            </div>
          </div>

          <div className='search-input-box'>
            <label>* Arrival Date</label>
            <div className='input-icon'>
              <input type='date' />
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
          </div>

          <div className='search-input-box'>
            <label>* Departure Date</label>
            <div className='input-icon'>
              <input type='date' />
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
          </div>

          <div className='search-input-box'>
            <label>* No. of aduts</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className='search-input-box'>
            <label>* No. of children</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <button>update</button>
        </div>


        <div className='tour-theme'>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
            Tour Theme
          </span>

          <div className='tour-theme-radio'>
            <input type='radio' value='Private Tours' name='tour-type' />
            <label>Walking</label>
          </div>

          <div className='tour-theme-radio'>
            <input type='radio' value='Private Tours' name='tour-type' />
            <label>Hiking</label>
          </div>

          <div className='tour-theme-radio'>
            <input type='radio' value='Private Tours' name='tour-type' />
            <label>Dolor</label>
          </div>

          <div className='tour-theme-radio'>
            <input type='radio' value='Private Tours' name='tour-type' />
            <label>Lorem</label>
          </div>

          <div className='tour-theme-radio'>
            <input type='radio' value='Private Tours' name='tour-type' />
            <label>Ipsum</label>
          </div>
        </div>
      </div>
    </>
  )
}


export default TourSearchBar