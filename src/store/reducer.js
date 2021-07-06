const INTIAL_STATE = {
    results: []
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATEDATA":
            return ({
                ...state,
                results: action.results
            })
        default:
        return state
    }
}