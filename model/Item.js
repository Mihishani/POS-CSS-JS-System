export class Item{
    constructor(item_Code , item_Name , item_Price , item_Qty) {
        this._item_Code=item_Code;
        this._item_Name=item_Name;
        this._item_Price=item_Price;
        this._item_Qty=item_Qty;
    }

    get item_Code(){
        return this._item_Code;
    }

    get item_Name(){
        return this._item_Name;
    }

    get item_Price(){
        return this._item_Price;
    }

    get item_Qty(){
        return this._item_Qty;
    }

    set item_Code(item_Code){
        this._item_Code=item_Code;
    }

    set item_Name(item_Name){
        this._item_Name=item_Name;
    }

    set item_Price(item_Price){
        this._item_Price=item_Price;
    }

    set item_Qty(item_Qty){
        this._item_Qty=item_Qty;
    }
}