import { combineReducers } from "redux";
import { customersReducers } from "./reducers/customersReducers";
import { driversReducers } from "./reducers/driversReducers";

export const rootReducers = combineReducers({

    customers: customersReducers,
    drivers: driversReducers,

});

