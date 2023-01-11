import React, { useEffect } from 'react'

function pageTitle(props) {
    useEffect(() => {
        document.title = `${props.title} - LeadIn`;
      }, );

  return (
    <>
    </>
  )
}

export default pageTitle