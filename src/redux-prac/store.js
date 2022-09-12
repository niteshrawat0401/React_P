import thunk from "redux-thunk"
import {applyMiddleware, legacy_createStore as createStore, combineReducers, compose} from "redux"
import {getreducer} from "./reducer/product.reducer"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk)
    )

    const reducer = combineReducers({
        allProducts: getreducer
    })

    export const store = createStore(getreducer, enhancer)