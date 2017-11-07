import React from 'react'

const HogList = (props) => {
    const hogs = props.hogs.map((hog, index) => <div onClick={props.slapHog} key={index} id={index}>{hog.name}</div>)
    return (
      <div>{hogs}</div>
    )
}

export default HogList
