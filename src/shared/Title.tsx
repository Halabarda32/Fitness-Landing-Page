import React from "react"
type Props = {
    children: React.ReactNode
}

const Title = ({children}: Props) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">{children}</h2>
  )
}

export default Title