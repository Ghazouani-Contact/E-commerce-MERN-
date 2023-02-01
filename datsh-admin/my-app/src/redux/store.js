import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import orderReducer from "./orderRedux";
import categoriesRedux from "./categoriesRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactRedux from "./contactRedux";
import newsletterRedux from "./newsletterRedux";
const persistConfig = {
    key: "root",
    version: 1,
    storage, 
};

const rootReducer = combineReducers({ user: userReducer, product: productReducer, order: orderReducer, categorie: categoriesRedux, contact: contactRedux, newsletter: newsletterRedux });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);