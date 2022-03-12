import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react';

const GoogleMaps = () => {
  return (
    <div>GoogleMaps</div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('12584631')
})(GoogleMaps)