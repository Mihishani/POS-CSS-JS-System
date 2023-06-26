export class Order{
    constructor(order_Id , order_Date) {
        this._order_Id = order_Id;
        this._order_Date=order_Date;
        this._orderDetailArray=orderDetailArray;
    }

    get order_Id(){
        return this._order_Id;
    }

    get order_Date(){
        return this._order_Date
    }

    get orderDetailArray(){
        return this._orderDetailArray;
    }


    set order_Id(order_Id){
        this._order_Id=order_Id;
    }

    set order_Date(order_Date){
        this._order_Date=order_Date;
    }

    set orderDetailArray(orderDetailArray){
        this._orderDetailArray=orderDetailArray;
    }
}