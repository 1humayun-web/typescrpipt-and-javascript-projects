// This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.
class students {
    name: string
    enrolled: string[]
    balance: number
    tution_fees: number
    id: number
    constructor(name: string,
        enrolled: string[],
        balance: number,
        tution_fees: number,
        id: any) {
        this.name = name,
            this.id = (Math.floor(1000 + Math.random() * 90000))
        this.enrolled = enrolled
        this.balance = balance
        this.tution_fees = tution_fees

    }

    show_status() {
        return `Name: ${this.name}\nStudent ID: ${this.id}\nCourses Enrolled: ${this.enrolled.join(", ")}\nBalance: ${this.balance}\nPay Tution: ${this.tution_fees}`
    }
}

const student1: any = new students("Humayun", ['Math', 'Physics', 'Chemistry'], 1000, 500, (Math.floor(1000 + Math.random() * 90000)))
console.log("\n", "\t", student1.show_status())
const student2: any = new students("Wajih", ['Biology', 'Physics', 'English'], 10000, 5500, (Math.floor(1000 + Math.random() * 90000)))
console.log("\n", "\t", student2.show_status())
const student3: any = new students("Humayun", ['Math', 'Sindhi', 'History'], 3000, 0, (Math.floor(1000 + Math.random() * 90000)))
console.log("\n", "\t", student3.show_status())


