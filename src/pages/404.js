import React from "react"

import Layout from "../components/layout"


const NotFoundPage1 = () => {
  if (typeof window !== 'undefined') {
    window.location = '/about-us';
  }
  return null;
}

export default NotFoundPage1