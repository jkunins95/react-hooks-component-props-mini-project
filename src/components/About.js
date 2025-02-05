import React from "react";

function About(props) {
  const imageUrl = props.image || "https://via.placeholder.com/215Links"

  return(
    <aside>
      <img src={imageUrl} alt="blog logo"></img>
      <p>{props.about}</p>
    </aside>
  )
}

export default About;