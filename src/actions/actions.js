

export const addFeature = newFeature => dispatch => {
    dispatch({ type: "ADD_FEATURE", payload: newFeature });
};

export const removeFeature = removedFeature => dispatch => {
    console.log('hello')
    dispatch({ type: "REMOVE_FEATURE", payload: removedFeature });
};