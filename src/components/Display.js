import React from 'react'


function  Display (props) {

    return (
        <div className='calcDisplay'>
          <p id='display'
            type='text'
            value={props.value}>
            {props.value}
            </p>
          </div>
    )
}

export default Display;
