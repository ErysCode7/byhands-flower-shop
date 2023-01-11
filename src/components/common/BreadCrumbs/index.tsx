import React from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

const BreadCrumbs = (props: Props) => {
    const location  = useLocation();

    console.log(location)

  return (
    <div>BreadCrumbs</div>
  )
}

export default BreadCrumbs