
export const myReducer = (state, action) => {
    switch(action.type){
        case 'auto': {
            return {
                ...state,
                ...action.value
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}