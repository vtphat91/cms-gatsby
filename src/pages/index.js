import React from "react"



const IndexPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/about-us';
  }
  return null;
}

export default IndexPage