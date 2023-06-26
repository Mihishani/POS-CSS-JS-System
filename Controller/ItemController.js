/*
import Item from "../model/Item.js";

$("#TB2").on('click','tr',function(event){
    console.log($(event.target).text());
    let item_Code = $(this).children().eq(0).text();
    let item_Name = $(this).children().eq(1).text();
    let item_Price = $(this).children().eq(2).text();
    let item_Qty = $(this).children().eq(3).text();

    $("#textField5").val(item_Code);
    $("#textField6").val(item_Name);
    $("#textField7").val(item_Price);
    $("#textField8").val(item_Qty);

});

//send data local Storage
const data1 = "ITEMDATA";

var item_arr = [];

function loadData() {
    let pre_data_item = localStorage.getItem(data1);
    console.log(pre_data_item);
    let item_data_arr = JSON.parse(pre_data_item);
    console.log(item_data_arr);

    $('t#TB2 tr').remove();

    item_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.item_Code + "</td>" +
            "<td>" + result.item_Name + "</td>" +
            "<td>" + result.item_Price + "</td>" +
            "<td>" + result.item_Qty + "</td>" +
            "</tr>";
        $('#TB2').append(row);
    })
}
//add Item
$("#B14").click(function () {

    var item_Code = $('#textField5').val();
    var item_Name = $('#textField6').val();
    var item_Price = $('#textField7').val();
    var item_Qty = $('#textField8').val();



    let pre_data_item = localStorage.getItem(data1);
    console.log("ARR: ", pre_data_item);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data_item) {
        data_arr = JSON.parse(pre_data_item);
    }

    var obj = {
        item_Code: item_Code,
        item_Name: item_Name,
        item_Price: item_Price,
        item_Qty: item_Qty
    }

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data1, JSON.stringify(data_arr));
    loadData();

});

loadData();


//update Item
$('#B16').on('click',(event)=>{
    let item_Code = $("#textField5").val();
    let pre_data_item = localStorage.getItem(data1);
    let item_data_arr =JSON.parse(pre_data_item);

    let index = item_data_arr.findIndex(value => value.item_Code===item_Code);
    if (index > -1){
        console.log(item_data_arr[index]);
        item_data_arr[index].code = $("#textField5").val();
        item_data_arr[index].item_Name = $("#textField6").val();
        item_data_arr[index].item_Price = $("#textField7").val();
        item_data_arr[index].item_Qty = $("#textField8").val();
        localStorage.setItem(data1,JSON.stringify(item_data_arr));
        loadData();

    }
});
//delete Item
$('#B15').on("click",(event)=>{

    let code = $("#textField5").val();

    let per_arr_item = localStorage.getItem(data1);
    let arr = [];
    if(per_arr_item){
        arr = JSON.parse(per_arr_item);
    }

    let index = arr.findIndex(value => value._item_Code === code);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data1, JSON.stringify(arr));
    loadData();
})
*/


/*//////////////////////////////////////////////////////////////////////////////////////*/
/*
import Item from "../model/Item.js";



const data = "DATA"; //local storage save key

var item_arr = []; //

export class Item_controller{
    constructor() {
        $("#B14").click(this.handledSaveItem.bind(this))
        $('#B16').click(this.handledUpdateItem.bind(this))
        $('#B15').click(this.handledDeleteItem.bind(this))
        this.handleLoadItem()
        this.handleSaveItemValidation()
    }

    handleSaveItemValidation(){
        var item_Code= $('#textField5').val();
        var item_Name = $('#textField6').val();
        var item_Price = $('#textField7').val();
        var item_Qty = $('#textField8').val();
        const regexNumber = /^\d+$/;
        if (!regexNumber.test(item_Code)){
            alert('Invalid Id');
        }else if (!item_Name){
            alert('Invalid Name');
        }else if (!item_Price){
            alert('Invalid Price');
        }else if (!item_Qty){
            alert('Invalid Qty');
        }else {
            this.handledSaveItem();
        }
    }

    handledSaveItem(){
        console.log("hi..........")
        var item_Code= $('#textField5').val();
        var item_Name = $('#textField6').val();
        var item_Price = $('#textField7').val();
        var item_Qty = $('#textField8').val();

        // validation
        const regexNumber = /^\d+$/;
        if(!regexNumber.test(item_Code)){
            alert('Incorrect ID')
        }

        let pre_data = localStorage.getItem(data);
        let data_arr = [];

        // undefine/ null/ "" / false
        if (pre_data) {
            data_arr = JSON.parse(pre_data);
        }

        let new_item = new Item( item_Code , item_Name , item_Price , item_Qty);
        console.log(new_item)

        data_arr.push(new_item);
        console.log(data_arr);
        localStorage.setItem(data, JSON.stringify(data_arr));

        this.handleLoadItem();
    }

    handleLoadItem(){
        let pre_data = localStorage.getItem(data);
        console.log(pre_data);
        let item_data_arr = JSON.parse(pre_data);
        console.log(item_data_arr);

        $('table tbody tr').remove();

        item_data_arr.map((result, index) => {
            var row = "<tr>" +
                "<td>" + result._item_Code + "</td>" +
                "<td>" + result._item_Name + "</td>" +
                "<td>" + result._item_Price + "</td>" +
                "<td>" + result._item_Qty + "</td>" +
                "</tr>";
            $('#TB2').append(row);
        })

    }


    handledUpdateItem(){
        console.log("Handle Update Item!");
        $('#B16').on('click',(event)=>{
            let item_Code = $("#textField5").val();
            let pre_data = localStorage.getItem(data);
            let item_data_arr =JSON.parse(pre_data);

            let index = item_data_arr.findIndex(value => value.item_Code==item_Code);
            if (index > -1){
                console.log(item_data_arr[index]);
                item_data_arr[index].item_Code = $("#textField5").val();
                item_data_arr[index].item_Name = $("#textField6").val();
                item_data_arr[index].item_Price = $("#textField7").val();
                item_data_arr[index].item_Qty = $("#textField8").val();
                localStorage.setItem(data,JSON.stringify(item_data_arr));
                this.handleLoadItem();

            }
        });

    }

    handledDeleteItem(){
        console.log("Handle Delete Item!");

        $('#B15').on("click",(event)=>{

            let id = $("#textField5").val();

            let per_arr = localStorage.getItem(data);
            let arr = [];
            if(per_arr){
                arr = JSON.parse(per_arr);
            }

            let index = arr.findIndex(value => value.item_Code === id);
            console.log(index);
            arr.splice(index, 1);

            localStorage.setItem(data, JSON.stringify(arr));
            this.handleLoadItem()
        })

    }
}

new Item_controller()*/


 import {Item} from "../model/Item.js";
 import {saveItem, getItemDB, updateItem,deleteItem} from "../DB/db.js";

 export class ItemController{
     constructor() {
         $("#B14").click(this.handleSaveItemValidation.bind(this));
         $("#B16").click(this.handleUpdateItem.bind(this));
         $("#B15").click(this.handleDeleteItem.bind(this));
         this.handleLoadItem();
         this.itemTableSelectedRaw();
     }

     handleLoadItem(){
         let item_data = getItemDB();
         $('#T2 tbody').empty();

         item_data.map((result, index) => {
             const row = "<tr>" + "<td>" +
                 result._item_Code +
                 "</td>" + "<td>" +
                 result._item_Name +
                 "</td>" + "<td>" +
                 result._item_Price +
                 "</td>" + "<td>" +
                 result._item_Qty +
                 "</td>" + "</tr>";
             $("#T2 tbody").append(row);
         });
     }

     handleSaveItemValidation(){

         var item_Code = $("#textField5").val();
         var item_Name = $("#textField6").val();
         var item_Price = $("#textField7").val();
         var item_Qty = $("#textField8").val();

         const regexNumber= /^\d+$/;
         if (!regexNumber.test(item_Code)){
             alert("Invalid Id");
         }else if(!item_Name){
             alert("Invalid Name");
         }else if(!item_Price){
             alert("Invalid Price");
         }else if(!item_Qty){
             alert("Invalid Qty");
         }else {
             this.handleSaveItem();
         }

     }


     handleSaveItem(){
         console.log("Item-added");
         let item_Code = $("#textField5").val();
         let item_Name = $("#textField6").val();
         let item_Price = $("#textField7").val();
         let item_Qty = $("#textField8").val();

         let new_item = new Item(item_Code,item_Name,item_Price,item_Qty);
         saveItem(new_item);
         this.handleLoadItem();
         this.clearFields();

     }

     handleUpdateItem(){
         let item_Code = $("#textField5").val();
         let item_Name = $("#textField6").val();
         let item_Price = $("#textField7").val();
         let item_Qty = $("#textField8").val();

         let new_item = new Item(item_Code,item_Name,item_Price,item_Qty);
         updateItem(new_item);
         this.handleLoadItem();
         this.clearFields();
     }

     handleDeleteItem(){
         let item_Code = $("#textField5").val();
         let item_Name = $("#textField6").val();
         let item_Price = $("#textField7").val();
         let item_Qty = $("#textField8").val();

         let new_item = new Item(item_Code,item_Name,item_Price,item_Qty);
         deleteItem(new_item);
         this.handleLoadItem();
         this.clearFields();
     }

     itemTableSelectedRaw(){
         $("#T2").on("click", "tr", function (event) {
             console.log($(event.target).text());
             let item_Code = $(this).children().eq(0).text();
             let item_Name = $(this).children().eq(1).text();
             let item_Price = $(this).children().eq(2).text();
             let item_Qty = $(this).children().eq(3).text();

             $("#textField5").val(item_Code);
             $("#textField6").val(item_Name);
             $("#textField7").val(item_Price);
             $("#textField8").val(item_Qty);
         });
     }

     clearFields(){
         $("#textField5").val("");
         $("#textField6").val("");
         $("#textField7").val("");
         $("#textField8").val("");
     }

 }

new ItemController();