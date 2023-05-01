import React, { Fragment, useRef } from 'react'

export default function FilePicker() {

    const fileRef = useRef(null);

    const handleClick = () => {
        fileRef.current.click();
    };

  return (
    <Fragment>
        <button onClick={handleClick}> Pick a File </button>
        <input
            type='file'
            ref={fileRef}
            style={{ display : 'none'}}
        />
    </Fragment>
  )
}
