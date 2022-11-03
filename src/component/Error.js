import React from "react";

const Error = () => {
    return(
        <div className="w-4/5 sm:w-3/5 py-5 px-2 mx-auto text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl">
            <p className="text-2xl">Invalid input</p>
            <p className="text-xl">Sorry...We couldn't find the place.<br/>Please try again!</p>
        </div>
    );
}

export default Error;