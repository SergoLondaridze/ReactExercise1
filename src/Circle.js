import React from 'react'
import "./style.css"
export default function Circle(props) {
  return (
    <div className='circle' style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  )
}
