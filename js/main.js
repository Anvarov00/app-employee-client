let employee = [];
let accepted = [];

function addEmployee(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let age = document.getElementById("age").value;
    let salary = document.getElementById("salary").value;
    let position = document.getElementById("position").value;

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("position").value = "";

    let newEmployee = {
        name: firstName,
        surname: lastName,
        age: age,
        salary: salary,
        position: position
    }
    employee.push(newEmployee);
    drawPage();
}

function drawPage(){
    let result = "";
    for (let i = 0; i < employee.length; i++){
        result +=
            "<div class='col-6 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h4>"+ employee[i].name + " " + employee[i].surname +"</h4></div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ employee[i].age +"</b></p>" +
            "<p>Salary: <b>"+ employee[i].salary +"</b></p>" +
            "<p>Position: <b>"+ employee[i].position +"</b></p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<button type='button' class='btn btn-success btn-block' onclick='accaptedEmployee("+ i +")'>Accepted</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result1").innerHTML = result;

    let resul2 = "";
    for (let i = 0; i < accepted.length; i++){
        resul2 +=
            "<div class='col-6 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h4>"+ accepted[i].name + " " + accepted[i].surname +"</h4></div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ accepted[i].age +"</b></p>" +
            "<p>Salary: <b>"+ accepted[i].salary +"</b></p>" +
            "<p>Position: <b>"+ accepted[i].position +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-success'>Edit</button>" +
            "<button type='button' class='btn btn-danger'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result2").innerHTML = resul2;
}

function accaptedEmployee(index){
    accepted.push(employee[index]);
    employee.splice(index, 1);
    drawPage();
}