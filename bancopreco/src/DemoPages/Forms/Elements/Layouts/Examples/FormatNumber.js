import React from "react"
import numeral from "numeral"

const FormatNumber = ({format, children})=>{
  <sapn>
    {numeral(children).format(format)}
  </sapn>
}

export default FormatNumber