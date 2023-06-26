export class Cart{
    constructor(item_Code,item_Qty,total) {
        this._item_Code=item_Code;
        this._item_Qty=item_Qty;
        this._total=total;
    }


    get item_Code() {
        return this._item_Code;
    }

    set item_Code(item_Code) {
        this._item_Code = item_Code;
    }

    get item_Qty() {
        return this._item_Qty;
    }

    set item_Qty(item_Qty) {
        this._item_Qty = item_Qty;
    }

    get total() {
        return this._total;
    }

    set total(total) {
        this._total = total;
    }
}