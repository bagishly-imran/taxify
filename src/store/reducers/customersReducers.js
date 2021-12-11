const defaultState = {
    customers: [
        {
            id: "1",
            name : "Hakim",
            where_from: "Şuşa",
            where: "Masalli",
            hour: "17:00",
            price: 25,
            tel: "505110003",
            category: 2,
        },
        {
            id: "2",
            name : "Nadir",
            where_from: "Bakı",
            where: "Masalli",
            hour: "18:30",
            price: 15,
            tel: "505110003",
            category: 2,
        },
        {
            id: "3",
            name : "Eli",
            where_from: "Gence",
            where: "Baki",
            hour: "06:30",
            price: 10,
            tel: "505110003",
            category: 2,
        }
    ],
    error: '',
}

export const customersReducers = (state = defaultState, action) => {
    switch(action.type) {
        case  "GET_CUSTOMERS":
            return {...state, customers: action.payload, error: ''} 
        case "ADD_CUSTOMERS":
            return {...state, customers: [...state.customers, action.payload], error : ''}
        case "GET_CUSTOMERS_ERROR":
        case "ADD_CUSTOMERS_ERROR":
            return {...state, error : 'Yuklenme error'}
        default: return state;
    }
}