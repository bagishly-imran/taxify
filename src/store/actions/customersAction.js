
export const getCustomers = () => (dispatch) => {
    try{
        dispatch({type : "GET_CUSTOMERS",})
    }catch {
        dispatch({type : "GET_CUSTOMERS_ERROR", })
    }
}

export const addCustomers = (form ) => (dispatch) => {
    try{
        dispatch({type : "ADD_CUSTOMERS", payload: form})
        
    }catch {
        dispatch({type : "ADD_CUSTOMERS_ERROR", })
    }
}

