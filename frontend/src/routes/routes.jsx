import React from "react"
import { BrowserRouter } from "react-router-dom"
import InternalRoutes from "./internal-routes"
import OpenRoutes from "./open-routes"

const Routes = () =>{
  return(
    <BrowserRouter>
      <InternalRoutes />
      <OpenRoutes />
  </BrowserRouter>
  )
}

export default Routes;