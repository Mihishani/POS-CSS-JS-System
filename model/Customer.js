export class Customer {

    constructor(customer_id, customer_name, customer_Email, customer_address) {
        this._customer_id = customer_id;
        this._customer_name = customer_name;
        this._customer_Email = customer_Email;
        this._customer_address = customer_address;

    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(customer_id) {
        this._customer_id = customer_id;
    }

    get customer_name() {
        return this._customer_name;
    }

    set customer_name(customer_name) {
        this._customer_name = customer_name;
    }

    get customer_Email() {
        return this._customer_Email;
    }

    set customer_Email(customer_Email) {
        this._customer_Email = customer_Email;
    }

    get customer_address() {
        return this._customer_address;
    }

    set customer_address(customer_address) {
        this._customer_address = customer_address;
    }
}