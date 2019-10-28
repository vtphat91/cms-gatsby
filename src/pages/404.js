import React from "react"



const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/about-us';
  }
  return null;
}

export default NotFoundPage