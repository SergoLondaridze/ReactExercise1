import React from 'react'
import "./style.css"
export default function Image(props) {
  return (
    <div>
        <img src={props.link} alt="" className='img' />
    </div>
  )
}
