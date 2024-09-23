import {HideLoader, ShowLoader} from "../redux/state-slice/Settings-Slice.js";
import store from "../redux/store/Store.js"
import {ErrorToast, SuccessToast} from "../helper/Helper.js";
import axios from "axios";
import {SetAllProducts, SetTotal} from "../redux/state-slice/Product-Slice.js";


const baseURL="http://localhost:5090/api/v1"

export function GetProductList(pageNo,perPage,searchKey){


    let URL= baseURL +"/ProductList/"+ pageNo + "/" + perPage + "/" + searchKey;
    store.dispatch(ShowLoader())


        axios.get(URL).then((res)=>{
            store.dispatch(HideLoader())
            if(res.status === 200 && res.data["status"] === "success"){
                console.log(res.data["data"].length)
                if(res.data["data"].length > 0){

                    store.dispatch(SetAllProducts(res.data["data"]));
                    store.dispatch(SetTotal(res.data["total"]));
                 }else{
                    store.dispatch(SetAllProducts([]))
                    store.dispatch(SetTotal(0))
                    ErrorToast("No Data Found");
                }
            }else{
                ErrorToast("something went wrong !");
            }
        }).catch((err)=>{
            store.dispatch(HideLoader())
        })

}