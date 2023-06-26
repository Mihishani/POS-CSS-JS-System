import {Order} from "../model/Order.js";
import {Cart} from "../model/cart.js";
import {getItemDB,getCustomerDB,placeOrder} from "../DB/db.js";
var cartArray = [];


export class OrderController{
    constructor() {
        $("#textField9").on('change',(event)=>{
            console.log(event.target.value);
            this.handleItemDetail(event.target.value);
        });

        $("#B20").click(this.handleAddToCart.bind(this));
        this.handleLoadIds();
        this.handleTotal();
        this. deleteField();

        $("#B22").click(this.handlePlaceOrder.bind(this));

    }

    handleLoadIds(){
        getCustomerDB().map(value => {
            $('#textField9').append("<option>"+ value._customer_id+"</option>")
        });

        getItemDB().map(value => {
            $('#textField13').append("<option>"+ value._item_Code+"</option>")
        });
    }

    handleItemDetail(item_Code){
        getItemDB().map(value => {
            if (value._item_Code === item_Code){
                $("#textField6").val(value._item_Name);
                $("#textField7").val(value._item_Price);
                $("#textField8").val(value._item_Qty);
            }
        });
    }

    handleTotal(){
        $("#textField17").on('keyup',(e)=>{
            let price = parseInt($("#textField15").val());
            let qty = parseInt($("#textField17").val());

            let total = price * qty;
            console.log(e.keyCode);

            if(e.key === "Backspace"){
                e.preventDefault();
                $("#textField20").val("");
            }else {
                $("#textField20").val(total);
            }
        });

    }

    handleAddToCart(){
        let item_Code = $("#textField13").val();
        let item_Qty = $("#textField17").val();
        let total = $("#textField20").val();

        let ct = new Cart(item_Code,item_Qty,total);

        $("#T3").append(`
         <tr>
            <td>${ct.item_Code}</td>> 
            <td>${ct.item_Qty}</td>> 
            <td>${ct.total}</td>> 
            <td><button type="button" style="margin: 0; padding: 3px 10px; color: #edeff1;background-color: #ff253a; border: none" class="raw">Delete</button></td>
            
        </tr>`);

        cartArray.push(ct);
        console.log(cartArray);
        this.clearTextField();
        this.findTotalCost();
    }

    deleteField(){
        $("#T3").on('click', (e)=>{
            console.log(e);
            if (!e.target.classList.contains("raw")){
                return;
            }
            const btn = e.target;
            btn.closest("tr").remove();

            this.findTotalCost();

        });


    }

    findTotalCost(){
        var table = document.getElementById("T3");
        var totalCost = 0;

        for (var i = 1; i < table.rows.length; i++){
            totalCost = totalCost + parseInt(table.rows[i].cells[2].innerHTML);
            console.log(totalCost);
            $("#InputBox12").val(totalCost);

        }

    }

    handlePlaceOrder(){

        let item_Code = $("#textField18").val();
        let customer_Id = $("#textField9").val();

        let order = new Order(item_Code,customer_Id,cartArray);

        placeOrder(order);

    }

    clearTextField(){
        $("#textField13").val("");
        $("#textField14").val("");
        $("#textField15").val("");
        $("#textField16").val("");
        $("#textField17").val("");
        $("#textField20").val("");

    }

}
new OrderController();