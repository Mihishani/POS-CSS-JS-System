/*

/!*import Customer from "/model/Customer.js";*!/

import Customer from "../model/Customer.js"

$("#TB1").on('click','tr',function(event){
    console.log($(event.target).text());
    let customer_id = $(this).children().eq(0).text();
    let customer_name = $(this).children().eq(1).text();
    let customer_Email = $(this).children().eq(2).text();
    let customer_address = $(this).children().eq(3).text();

    $("#textField1").val(customer_id);
    $("#textField2").val(customer_name);
    $("#textField3").val(customer_Email);
    $("#textField4").val(customer_address);

});

//send data local Storage
const data = "CUSTOMERDATA";

var customer_arr = [];

function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    console.log(customer_data_arr);

    $('#TB1 tr').remove();

    customer_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result.customer_id + "</td>" +
            "<td>" + result.customer_name + "</td>" +
            "<td>" + result.customer_Email + "</td>" +
            "<td>" + result.customer_address + "</td>" +
            "</tr>";
        $('#TB1').append(row);
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

    let index = arr.findIndex(value => value._customer_id === id);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})
/!*!////////////////////////////////////////////////////////////////////////////////////////////////////////////////////!*!/
 */


import {Customer} from "../model/Customer.js";
import {saveCustomerDB,getCustomerDB,updateCustomer,deleteCustomer} from "../DB/db.js";

export class CustomerController{
    constructor() {
        $("#B8").click(this.handleSaveCustomerValidation.bind(this));
        $("#B10").click(this.handleUpdateCustomer.bind(this));
        $("#B9").click(this.handleDeleteCustomer.bind(this));
        this.handleLoadCustomer();
        this.tableSelectedRaw();
    }

    handleLoadCustomer(){
        let customer_data_arr = getCustomerDB();
        $('#T1 tbody ').empty();

        console.log(customer_data_arr);

        customer_data_arr.map((result, index) => {
            const row = "<tr>" + "<td>" +
                result._customer_id +
                "</td>" + "<td>" +
                result._customer_name +
                "</td>" + "<td>" +
                result._customer_Email +
                "</td>" + "<td>" +
                result._customer_address +
                "</td>" + "</tr>";
            $("#T1 tbody  ").append(row);
        });
    }

    handleSaveCustomerValidation(){

        var customer_id = $("#textField1").val();
        var customer_name = $("#textField2").val();
        var customer_Email = $("#textField3").val();
        var customer_address = $("#textField4").val();

        const regexNumber= /^\d+$/;
        if (!regexNumber.test(customer_id)){
            alert("Invalid Id");
        }else if(!customer_name){
            alert("Invalid  Name");
        }else if(!customer_Email){
            alert("Invalid Email");
        }else if(!customer_address){
            alert("Invalid Address");
        }else {
            this.handleSaveCustomer();
        }

    }

    handleSaveCustomer(){
        console.log("Handel save");
        var customer_id = $("#textField1").val();
        var customer_name = $("#textField2").val();
        var customer_Email= $("#textField3").val();
        var customer_address = $("#textField4").val();

        let new_customer = new Customer(customer_id,customer_name,customer_Email,customer_address);
        saveCustomerDB(new_customer);
        this.handleLoadCustomer();
        this.clearTextField();

    }


    handleUpdateCustomer(){
        console.log("Handel Update");

        let customer_id = $("#textField1").val();
        let customer_name = $("#textField2").val();
        let customer_Email = $("#textField3").val();
        let customer_address = $("#textField4").val();

        let customer = new Customer(customer_id,customer_name,customer_Email,customer_address);
        updateCustomer(customer);
        this.handleLoadCustomer();
        this.clearTextField();

    }

    handleDeleteCustomer(){
        console.log("Handel Delete");

        let customer_id = $("#textField1").val();
        let customer_name = $("#textField2").val();
        let customer_Email = $("#textField3").val();
        let customer_address = $("#textField4").val();

        let customer  = new Customer(customer_id,customer_name,customer_Email,customer_address);
        deleteCustomer(customer);
        this.handleLoadCustomer();
        this.clearTextField();

    }

    tableSelectedRaw(){
        $("#T1").on("click", "tr", function (event) {
            console.log($(event.target).text());
            let customer_id = $(this).children().eq(0).text();
            let customer_name = $(this).children().eq(1).text();
            let customer_Email = $(this).children().eq(2).text();
            let customer_address = $(this).children().eq(3).text();

            $("#textField1").val(customer_id);
            $("#textField2").val(customer_name);
            $("#textField3").val(customer_Email);
            $("#textField4").val(customer_address);
        });
    }

    clearTextField(){
        $("#textField1").val("");
        $("#textField2").val("");
        $("#textField3").val("");
        $("#textField4").val("");
    }


}


new CustomerController();

