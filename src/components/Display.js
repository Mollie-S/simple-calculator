import React from 'react'


function  Display (props) {

    return (
        <form className='calcDisplay'>
          <input id='display'
            type='text'
            value={props.value}
            onChange={props.onChange}
          />
        </form>
    )
}

export default Display;
