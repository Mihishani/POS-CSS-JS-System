/*
 export default function saveCustomerDB(new_Customer){

    let pre_data=localStorage.getItem(data);
    let data_arr=[];
    if (pre_data){
        data_arr=JSON.parse(pre_data);
    }
    data_arr.push(new_Customer);
    localStorage.setItem(data,JSON.stringify(data_arr));
}

export function getCustomer(){
    let pre_data=localStorage.getItem(data);
    let data_arr=[];

    //undefine-----null----""/false

    if (pre_data){
        data_arr=JSON.parse(pre_data);
    }
    return data_arr;
}*/

const data = "DATA";
const data1 = "ITEM_DATA";
const  placeData = "PLACE_DATA";


export function saveCustomerDB(new_customer) {
    let pre_data = localStorage.getItem(data);
    console.log("ARR : ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_customer);
    localStorage.setItem(data, JSON.stringify(data_arr));
}

export function getCustomerDB() {
    let pre_data=localStorage.getItem(data);
    let data_arr=[];

    //undefine-----null----""/false

    if (pre_data){
        data_arr=JSON.parse(pre_data);
    }
    return data_arr;
}

export function updateCustomer(customer){
    let customer_data_arr = getCustomerDB();
    let index = customer_data_arr.findIndex((value)=>value._customer_id===customer._customer_id);

    customer_data_arr[index]=customer;
    localStorage.setItem(data,JSON.stringify(customer_data_arr));
}


export function deleteCustomer(customer){
    let customer_data_arr = getCustomerDB();

    let index = customer_data_arr.findIndex((value) => value._customer_id === customer._customer_id);
    console.log(index);
    customer_data_arr.splice(index, 1);
    localStorage.setItem(data, JSON.stringify(customer_data_arr));
}

/*///////////////////////////////////////////////////////////////////////////*/

export function saveItem(new_item) {
    let pre_data = localStorage.getItem(data1);
    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_item);
    localStorage.setItem(data1, JSON.stringify(data_arr));
}

export function getItemDB() {
    let pre_data=localStorage.getItem(data1);
    let data_arr=[];

    //undefine-----null----""/false

    if (pre_data){
        data_arr=JSON.parse(pre_data);
    }
    return data_arr;
}

export function updateItem(item){
    let item_data_arr = getItemDB();
    let index = item_data_arr.findIndex((value) => value._item_Code ===item._item_Code);

    item_data_arr[index]= item;
    localStorage.setItem(data1,JSON.stringify(item_data_arr));
}

export function deleteItem(item){
    let item_data_arr = getItemDB();

    let index = item_data_arr.findIndex((value) => value._item_Code ===item._item_Code);
    console.log(index);
    item_data_arr.splice(index, 1);
    localStorage.setItem(data1, JSON.stringify(item_data_arr));
}

/*////////////////////////////////////////////////////////////////////////////////////*/

export function placeOrder(order){
    let pre_data = localStorage.getItem(placeData);
    let data_arr = [];

    if (pre_data){
        data_arr=  JSON.parse(pre_data);
    }
    data_arr.push(order);
    localStorage.setItem(placeData,JSON.stringify(data_arr));
}