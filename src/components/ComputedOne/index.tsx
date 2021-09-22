import React from 'react'
import add from 'Utils/math'

interface IProperties {
  a: number
  b: number
}

function Computed1(properties: IProperties) {
  const { a, b } = properties
  const sum = add(a, b)

  return <p>{`Hi, I'm computed one, my sum is ${sum}.`}</p>
}

export default Computed1
