const defaultState = {
    drivers : [
        {
            id: 1,
            name : "Imran",
            where_from: "Bakı",
            where: "Şuşa",
            hour: "17:00",
            price: 45,
            tel: "505110003",
            category: "1",
        },
        {
            id: 2,
            name : "Isaxan",
            where_from: "Bakı",
            where: "Masalli",
            hour: "18:30",
            price: 20,
            tel: "505110003",
            category: "1",
        },
        {
            id: 3,
            name : "Ayxan",
            where_from: "Gedebey",
            where: "Baki",
            hour: "06:30",
            price: 15,
            tel: "505110003",
            category: "1",
        }
    ],
    error: '',
}

export const driversReducers = (state = defaultState, action) => {
    switch(action.type) {
        case  "GET_DRIVERS":
            return {...state, drivers: action.payload, error: ''} 
        case "ADD_DRIVERS":
            return {...state, drivers: [...state.drivers, action.payload], error : ''}
        case "GET_DRIVERS_ERROR":
        case "ADD_DRIVERS_ERROR":
            return {...state, error : 'Yuklenme error'}
        default: return state;
    }
}