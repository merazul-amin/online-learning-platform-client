import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
const Spinner = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    return (
        <div className="sweet-loading">


            <ClipLoader
                color={'#fffff'}
                loading={true}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;