import React from 'react';
import spinner from "../images/Blocks-1s-200px (1).gif"

const Loading = () => {
    return (
        <div style={{height:"80vh"}}  className='flex justify-center items-center'>
           <img style={{width:"200px",height:"200px"}} src={spinner} alt="" />
        </div>
    );
};

export default Loading;