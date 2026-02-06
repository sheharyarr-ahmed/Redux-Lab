import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
export default store;

// previous reducer function
// function reducer(state = initialStateAccount, action) {

// function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// the concept of the combine reducers: when there are more than one states then this is how we use redux reducer

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 100 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "to buy a car" },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// // another way of creating the dispatch functions that is action creators

// store.dispatch(deposit(1000));
// console.log(store.getState());
// store.dispatch(deposit(1000));
// console.log(store.getState());

// function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString },
//   };
// }
// function updateName(fullName) {
//   return {
//     type: "account/updateName",
//     payload: fullName,
//   };
// }

// store.dispatch(createCustomer("Sheharyar Ahmed", "0334234"));
// console.log(store.getState());
