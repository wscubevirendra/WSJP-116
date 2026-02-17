import React from 'react'

export default function Button(props) {
    return (
        <button type="button" onClick={() => props.tabHandler(props.tab)} class={`btn 
              ${props.tab == "accound" ? "bg-primary" : "btn-warning"} 
              btn-warning px-2`}>{props.display}</button>
    )
}
