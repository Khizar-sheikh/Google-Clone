export const initialState = {
    term: null,
}

export const actionTypes = {
    SEt_SEARCH_TERM: "SET_SEARCH_TERM"
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case actionTypes.SEt_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        default:
            return state;
    }
}

export default reducer;