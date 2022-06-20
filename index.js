/* Your Code Here */

let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]


let thor = ["Thor", "Odinsson", "Electrical Engineer", 45];



function createEmployeeRecord (detailsArray){
    let employee ={};
    employee.firstName = detailsArray[0];
    employee.familyName = detailsArray[1];
    employee.title = detailsArray[2];
    employee.payPerHour = detailsArray[3];
    employee.timeInEvents = [];
    employee.timeOutEvents = [];
    return employee
}


function createEmployeeRecords(arrayOfArrays){
    let employeeRecords = [];
    if (arrayOfArrays.length === 2){
        for (let i = 0; i<2; i++){
            let employeeObj = createEmployeeRecord(arrayOfArrays[i])
            employeeRecords.push(employeeObj)
        }
        return employeeRecords
    }

    else{
        employeeRecords = arrayOfArrays.map(elem => createEmployeeRecord(elem))
    }
    return employeeRecords

}

function createTimeInEvent(empOb, dateStamp){
    let splitDate = dateStamp.split(" ");
    let date = splitDate[0];
    let hour = splitDate[1];
    let timeInObj = {};
    timeInObj.type = "TimeIn"
    timeInObj.date = date;
    timeInObj.hour = parseInt(hour);
    empOb.timeInEvents.push(timeInObj)
    return empOb

}



function createTimeOutEvent(empObj, dateStamp){
    let splitDate = dateStamp.split(" ");
    let date = splitDate[0];
    let hour = splitDate[1];
    let timeOutObj = {};
    timeOutObj.type = "TimeOut"
    timeOutObj.date = date;
    timeOutObj.hour = parseInt(hour);
    empObj.timeOutEvents.push(timeOutObj)
    return empObj
}

function hoursWorkedOnDate(empObj, date){
    let timeInObj = createTimeInEvent(empObj, date);
    let timeOutObj = createTimeOutEvent(empObj, date);
    let timeOutHrs = timeOutObj.timeOutEvents[0].hour;
    let timeInHrs = timeInObj.timeInEvents[0].hour;
    return (timeOutHrs -timeInHrs)/100
}

function wagesEarnedOnDate(empObj, date){
    let wagesPerHr = empObj.payPerHour;
    let hrs = hoursWorkedOnDate(empObj, date)
    return wagesPerHr * hrs
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (){

}