#!/usr/bin/env node
interface BankAccount {
    debit(amount: number): void;
    credit(amount: number): void;
    checkBalance(): number;
}


class Customer {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNumber: string;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
}


class BankAccountImpl implements BankAccount {
    customer: Customer;
    balance: number;

    constructor(customer: Customer) {
        this.customer = customer;
        this.balance = 0;
    }

    debit(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Debit of $${amount} successful.`);
        } else {
            console.log("Debit amount exceeds account balance. Transaction canceled.");
        }
    }

    credit(amount: number): void {
        if (amount > 100) {
            amount -= 1;
        }
        this.balance += amount;
        console.log(`Credit of $${amount} successful.`);
    }

    checkBalance(): number {
        return this.balance;
    }
}


let customer1 = new Customer("Alice", "Smith", "Female", 30, "1234567890");
let account1 = new BankAccountImpl(customer1);

console.log("Initial Balance:", account1.checkBalance());
account1.credit(100);
console.log("Current Balance:", account1.checkBalance());
account1.debit(30);
console.log("Updated Balance:", account1.checkBalance());

