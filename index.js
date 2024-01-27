// Your code here
function createEmployeeRecord(array) {
    const obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(nestedArray) {
    const newArray = []
    nestedArray.forEach(array => {
        newArray.push(createEmployeeRecord(array))
    })
    return newArray
}

function createTimeInEvent(employeeRecord, dateStamp) {
    const dateStampArray = dateStamp.split(" ")
    const hour = parseInt(dateStampArray[1])
    const date = dateStampArray[0]

    const timeInObj = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    const timeInArray = employeeRecord.timeInEvents
    timeInArray.push(timeInObj)
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp) {
    const dateStampArray = dateStamp.split(" ")
    const hour = parseInt(dateStampArray[1])
    const date = dateStampArray[0]

    const timeOutObj = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    const timeOutArray = employeeRecord.timeOutEvents
    timeOutArray.push(timeOutObj)
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date) {
    let timeIn;
    const dateIn = employeeRecord.timeInEvents
    dateIn.find(timeInObj => {
        if (timeInObj.date === date) {
            return timeIn = timeInObj.hour
        }
    })
    let timeOut;
    const dateOut = employeeRecord.timeOutEvents
    dateOut.find(timeOutObj => {
        if (timeOutObj.date === date) {
            return timeOut = timeOutObj.hour
        }
    })
    const hoursWorked = timeOut - timeIn
    return parseInt(hoursWorked.toString().slice(0, -2))
}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date)
    const payRate = employeeRecord.payPerHour
    return payRate * hoursWorked
}

function allWagesFor(employeeRecord) {
    const dates = employeeRecord.timeInEvents
    const datesArray = dates.map(day => {
        return day.date       
    })
    const totalWage = datesArray.reduce((accumulator, currentValue) => {
        const wage = wagesEarnedOnDate(employeeRecord, currentValue)
        return accumulator + wage
    }, 0)
    return totalWage
}

function calculatePayroll(arrayOfObjects) {
    const totalPayroll = arrayOfObjects.reduce((accumulator, element) => {
        return accumulator + allWagesFor(element);   
    }, 0)
    return totalPayroll
}


/* My pseudocode here:
complete the tests 1 by 1 to be guided to the solution


*/

/* My written description of what code does here:

*/


//Test Code 
console.log("")

console.log("")

console.log("")

