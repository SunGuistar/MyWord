import React from 'react'
import add from 'Utils/math'

interface IProps {
  a: number
  b: number
}

function Computed2(props: IProps) {
  const { a, b } = props
  const sum = add(a, b)

  return <p>{`Hi, I'm computed two, my sum is ${sum}.`}</p>
}

export default Computed2
