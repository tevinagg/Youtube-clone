import React, {useState} from "react";

function SearchBar(props) {
const [term, setTerm] = useState('')

    const onInputChange = (e) => {
     setTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
    e.preventDefault()
        props.search(term)
}


    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={onInputChange}/>
                </div>
            </form>

        </div>
    )
}

export default SearchBar