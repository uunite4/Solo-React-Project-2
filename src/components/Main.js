import React from "react";

import Place from "./Place";
import data from "../data"

export default function Main() {

  const sepElem = <hr />
  //map over data
  const places = data.map(obj => {
    return (
      <Place
        key={obj.id}
        {...obj}
      />
    )
  })
  //put sepElem between every Place element
  const compleatePlaces = []
  places.forEach((e, i) => compleatePlaces.push(e, sepElem))
  //remove the last sepElem
  compleatePlaces.splice(-1, 1)

  return (
    <div className="main">
      {compleatePlaces}
      {/* <Place />
      <hr />
      <Place />
      <hr />
      <Place />
      <hr />
      <Place />
      <hr />
      <Place />
      <hr />
      <Place /> */}
    </div>
  )
}