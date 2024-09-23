import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../state-slice/Product-Slice.js'
import SettingsReducer from '../state-slice/Settings-Slice.js'
export default configureStore({
    reducer:{
        Product: ProductReducer,
        Settings: SettingsReducer,


    }
})
