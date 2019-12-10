import React from 'react'

const Track = (props) => {
  const options = props.tracks.map((tracks, index) => {
    return <div>
    <table className="centre">
    <ul value={index} key={index}>{index + 1}</ul>
    <th>
    <img src={tracks["im:image"][0].label} key="image" alt=""/>
    </th>
    <th>
    <li value={index} key={index}>{tracks["im:name"].label}</li>
    </th>
    <tc>
    ---
    </tc>
    <th>
    <li value={index} key={index}>{tracks["im:artist"].label}</li>
    </th>
    </table>
    </div>
  })
  return(
    <div>
    <ul className="Track">
    {options}
    </ul>
    </div>
  )
}


export default Track;
