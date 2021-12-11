export const getDrivers = () => (dispatch) => {
    try{
        dispatch({type : "GET_DRIVERS",})
    }catch {
        dispatch({type : "GET_DRIVERS_ERROR", })
    }
}

export const addDrivers = (form ) => (dispatch) => {
    try{
        dispatch({type : "ADD_DRIVERS", payload: form})
        
    }catch {
        dispatch({type : "ADD_DRIVERS_ERROR", })
    }
}

