let employee = {
    name: "Vasu Joe",
    salary: 500000,
    experience: 2,
    promote: function() {
        this.salary += 5000;
        this.experience += 1;
        console.log(`After Promotion:
Name: ${this.name}
Salary: ₹${this.salary}
Experience: ${this.experience} years`);
    }
};
console.log("Before Promotion:",employee);
employee.promote();
console.log("Final Object State:", employee);