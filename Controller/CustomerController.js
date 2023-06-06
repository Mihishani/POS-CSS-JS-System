
import {Customer}from "../model/Customer";

/*
document.getElementsByTagName('save').addEventListener('click',function (){
    const customer = new Customer('C001','Frimeshani','Kalutara','0779145926');
})

$('#B8').on('click' , function (event){
    console.log("----------------------Clicked!");
})*/


$("#TB1").on('click','tr',function(event){
    console.log($(event.target).text());
    let id = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let Email = $(this).children().eq(2).text();
    let address = $(this).children().eq(3).text();

    $("#textField1").val(id);
    $("#textField2").val(name);
    $("#textField3").val(Email);
    $("#textField4").val(address);

});

//send data local Storage
const data = "DATA";

var customer_arr = [];

function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    console.log(customer_data_arr);

    $('table tbody tr').remove();

    customer_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.customer_id + "</td>" +
            "<td>" + result.customer_name + "</td>" +
            "<td>" + result.customer_Email + "</td>" +
            "<td>" + result.customer_address + "</td>" +
            "</tr>";
        $('tbody').append(row);
    })
}
//add customer
$('#B8').click(function () {
    // var customer_id = document.getElementById("customer_id").value;
    // var customer_first_name = document.getElementById("first_name").value;
    // var customer_last_name = document.getElementById("last_name").value;
    // var customer_address = document.getElementById("customer_address").value;

    var customer_id = $('#textField1').val();
    var customer_name = $('#textField2').val();
    var customer_Email = $('#textField3').val();
    var customer_address = $('#textField4').val();



    let pre_data = localStorage.getItem(data);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    var obj = {
        customer_id: customer_id,
        customer_name: customer_name,
        customer_Email: customer_Email,
        customer_address: customer_address
    }

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data, JSON.stringify(data_arr));
    loadData();

});

loadData();


//update customer
$('#B10').on('click',(event)=>{
    let customer_id = $("#textField1").val();
    let pre_data = localStorage.getItem(data);
    let customer_data_arr =JSON.parse(pre_data);

    let index = customer_data_arr.findIndex(value => value.customer_id===customer_id);
    if (index > -1){
        console.log(customer_data_arr[index]);
        customer_data_arr[index].id = $("#textField1").val();
        customer_data_arr[index].customer_name = $("#textField2").val();
        customer_data_arr[index].customer_Email = $("#textField3").val();
        customer_data_arr[index].customer_address = $("#textField4").val();
        localStorage.setItem(data,JSON.stringify(customer_data_arr));
        loadData();

    }
});
//delete Customer
$('#B9').on("click",(event)=>{

    let id = $("#textField1").val();

    let per_arr = localStorage.getItem(data);
    let arr = [];
    if(per_arr){
        arr = JSON.parse(per_arr);
    }

    let index = arr.findIndex(value => value.customer_id === id);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})
