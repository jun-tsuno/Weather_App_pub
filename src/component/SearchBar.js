import React, { useState } from "react";

const SearchBar = ({getCityName}) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getCityName(term);
        setTerm('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="text-black">
                <input
                    className="border-gray-200 border-2 py-1 pl-2.5 w-full outline-none"
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                    placeholder="Enter a City...   ex) new york"
                />
            </form>
        </div>
    );
};

export default SearchBar;