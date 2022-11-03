import React from "react";

const DetailInfo = ({ current }) => {
    return (
        <React.Fragment>
            <div className="mt-2 mb-2 flex-col  self-center w-full">
                <div className="flex justify-around">
                    <div className="flex flex-col text-center w-32 text-lg">
                        <div>
                            {current.max} <span className="text-sm">°C</span>
                        </div>
                        <span className="text-sm">High</span>
                    </div>
                    <div className="flex flex-col text-center w-32 text-lg">
                        <div>
                            {current.min} <span className="text-sm">°C</span>
                        </div>
                        <span className="text-sm">Low</span>
                    </div>
                </div>
                <div className="flex justify-around mt-4">
                    <div className="flex flex-col text-center w-32 text-lg">
                        <div>
                            {current.feel} <span className="text-sm">°C</span>
                        </div>
                        <span className="text-sm">Feels like</span>
                    </div>
                    <div className="flex flex-col text-center w-32 text-lg">
                        <div>
                            {current.humid} <span className="text-sm">%</span>
                        </div>
                        <span className="text-sm">Humidity</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailInfo;