import {Item} from "../model/Item";

$("#TB2").on('click','tr',function(event){
    console.log($(event.target).text());
    let id = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let price = $(this).children().eq(2).text();
    let quantity = $(this).children().eq(3).text();

    $("#textField5").val(id);
    $("#textField6").val(name);
    $("#textField7").val(price);
    $("#textField8").val(quantity);

});

//send data local Storage
const data = "DATA";

var item_arr = [];

function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let item_data_arr = JSON.parse(pre_data);
    console.log(item_data_arr);

    $('table tbody tr').remove();

    item_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.item_Code + "</td>" +
            "<td>" + result.item_Name + "</td>" +
            "<td>" + result.item_Price + "</td>" +
            "<td>" + result.item_Qty + "</td>" +
            "</tr>";
        $('tbody').append(row);
    })
}
//add Item
$("#B14").click(function () {

    var item_Code = $('#textField5').val();
    var item_Name = $('#textField6').val();
    var item_Price = $('#textField7').val();
    var item_Qty = $('#textField8').val();



    let pre_data = localStorage.getItem(data);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    var obj = {
        item_Code: item_Code,
        item_Name: item_Name,
        item_Price: item_Price,
        item_Qty: item_Qty
    }

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data, JSON.stringify(data_arr));
    loadData();

});

loadData();


//update Item
$('#B16').on('click',(event)=>{
    let item_Code = $("#textField5").val();
    let pre_data = localStorage.getItem(data);
    let item_data_arr =JSON.parse(pre_data);

    let index = item_data_arr.findIndex(value => value.item_Code===item_Code);
    if (index > -1){
        console.log(item_data_arr[index]);
        item_data_arr[index].code = $("#textField5").val();
        item_data_arr[index].item_Name = $("#textField6").val();
        item_data_arr[index].item_Price = $("#textField7").val();
        item_data_arr[index].item_Qty = $("#textField8").val();
        localStorage.setItem(data,JSON.stringify(item_data_arr));
        loadData();

    }
});
//delete Item
$('#B15').on("click",(event)=>{

    let code = $("#textField5").val();

    let per_arr = localStorage.getItem(data);
    let arr = [];
    if(per_arr){
        arr = JSON.parse(per_arr);
    }

    let index = arr.findIndex(value => value.item_Code === code);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})
