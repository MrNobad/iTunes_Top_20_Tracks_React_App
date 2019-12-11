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
    <tc>---</tc>
    <th>
    <li value={index} key={index}>{tracks["im:artist"].label}</li>
    </th>
    <th>
    ---
    </th>
    <th>
    <li value={index} key={index}>{tracks["im:price"].label}</li>
    </th>
    <th>
    <a href={tracks.link[0].attributes.href}><img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi2z-W1oqzmAhXMy4UKHQAAB4MQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_87224878_stock-vector-play-button-with-shadow-on-transparent-background-isolated-sign-for-web-vector-icon-.html&psig=AOvVaw0w0qhC3EoeuLHs8Lh_Ck6M&ust=1576108116736599" width="82" height="86" alt="Play"/></a>
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
