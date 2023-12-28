import { Mic, Search } from "@mui/icons-material"
import "./SearchInput.css"
import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { useStateValue } from './../Provider/StateProvider';
import { actionTypes } from "../Provider/reducer"

function SearchInput({ hiddenButton = false }) {
    const [{ term }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();



        dispatch({
            type: actionTypes.SEt_SEARCH_TERM,
            term: input
        })
        navigate(`/search`);
        console.log(term)
    };
    return (
        <form className="search">
            <div className="search__input">
                <Search className="search__inputicon" />
                <input
                    value={input}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search Google or type a URL"
                />
                <Mic />
            </div>
            <div className="search__buttons">
                {!hiddenButton && (
                    <div>
                        <Button type="submit" onClick={search} variant="outlined">
                            Google Search
                        </Button>
                        <Button variant="outlined"
                        >I’m Feeling Lucky
                        </Button>
                    </div>
                )}

            </div>
        </form>
    );
}

SearchInput.propTypes = {
    hiddenButton: PropTypes.bool,
};

export default SearchInput;


