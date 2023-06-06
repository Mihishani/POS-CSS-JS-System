class Order{
    constructor(order_Id , order_Date) {
        this._order_Id = order_Id;
        this._order_date=order_Date;
    }

    get order_Id(){
        return _order_Id;
    }

    get order_Date(){
        return _order_Date
    }

    set order_Id(order_Id){
        this._order_Id=order_Id;
    }

    set order_Date(order_Date){
        this._order_date=order_Date;
    }
}