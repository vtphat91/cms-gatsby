import React from "react"

import Layout from "../components/layout"


const NotFoundPage1 = () => {
  console.log(111111111111);
  if (typeof window !== 'undefined') {
    console.log(22222222222222222);
    window.location = '/';
  }
  console.log(3333333333333333);
  return null;
}

export default NotFoundPage1