
/*
 Project: Employee Salary & Attendance Management System
 Company: Aventra Innovations
 Technology: JavaScript
*/

// Function to calculate employee attendance and salary
function calculateEmployeeSalary(
    employeeName,
    employeeId,
    totalWorkingDays,
    daysPresent,
    dailySalary
) {
    // Validate employee details
    if (
        typeof employeeName !== "string" ||
        employeeName.trim() === ""
    ) {
        console.log("Error: Employee name is required.");
        return;
    }

    if (
        employeeId === undefined ||
        employeeId === null ||
        String(employeeId).trim() === ""
    ) {
        console.log("Error: Employee ID is required.");
        return;
    }

    // Validate total working days
    if (
        !Number.isInteger(totalWorkingDays) ||
        totalWorkingDays <= 0
    ) {
        console.log(
            "Error: Total working days must be greater than zero."
        );
        return;
    }

    // Validate days present
    if (
        !Number.isInteger(daysPresent) ||
        daysPresent < 0 ||
        daysPresent > totalWorkingDays
    ) {
        console.log(
            "Error: Days present must be between 0 and total working days."
        );
        return;
    }

  
    // Validate daily salary
    if (
        typeof dailySalary !== "number" ||
        !Number.isFinite(dailySalary) ||
        dailySalary < 0
    ) {
        console.log(
            "Error: Daily salary must be a valid, non-negative number."
        );
        return;
    }


    // Attendance calculations
    const absentDays = totalWorkingDays - daysPresent;

    const attendancePercentage =
        (daysPresent / totalWorkingDays) * 100;

    // Salary calculations
    const totalPossibleSalary =
        totalWorkingDays * dailySalary;

    const salaryBasedOnAttendance =
        daysPresent * dailySalary;

    const finalPayableSalary = salaryBasedOnAttendance;

    // Determine attendance status
    let attendanceStatus;

    if (attendancePercentage >= 90) {
        attendanceStatus = "Excellent Attendance";
    } else if (attendancePercentage >= 75) {
        attendanceStatus = "Good Attendance";
    } else if (attendancePercentage >= 50) {
        attendanceStatus = "Average Attendance";
    } else {
        attendanceStatus = "Poor Attendance";
    }

    // Display employee report
    console.log("\n========================================");
    console.log(" EMPLOYEE SALARY & ATTENDANCE REPORT");
    console.log("========================================");

    console.log("Employee Name       :", employeeName.trim());
    console.log("Employee ID         :", employeeId);
    console.log("Total Working Days  :", totalWorkingDays);
    console.log("Days Present        :", daysPresent);
    console.log("Absent Days         :", absentDays);

    console.log(
        "Attendance Percentage:",
        attendancePercentage.toFixed(2) + "%"
    );

    console.log("Attendance Status   :", attendanceStatus);

    console.log(
        "Daily Salary        : Rs. " + dailySalary.toFixed(2)
    );

    console.log(
        "Total Possible Salary: Rs. " +
        totalPossibleSalary.toFixed(2)
    );

    console.log(
        "Salary Based on Attendance: Rs. " +
        salaryBasedOnAttendance.toFixed(2)
    );

    console.log(
        "Final Payable Salary: Rs. " +
        finalPayableSalary.toFixed(2)
    );

    console.log("========================================\n");
}

// ------------------------------------------
// TEST CASE 1: Employee with full attendance
// ------------------------------------------
calculateEmployeeSalary(
    "Gayatri Hajare",
    "EMP101",
    26,
    26,
    800
);

// ------------------------------------------
// TEST CASE 2: Employee with partial attendance
// ------------------------------------------
calculateEmployeeSalary(
    "Bhakti Deshmukh",
    "EMP102",
    26,
    22,
    800
);

// ------------------------------------------
// TEST CASE 3: Employee with low attendance
// ------------------------------------------
calculateEmployeeSalary(
    "Gayatri Chavan",
    "EMP103",
    26,
    12,
    800
);

// ------------------------------------------
// TEST CASE 4: Invalid input demonstration
// ------------------------------------------
calculateEmployeeSalary(
    "Anuja Bhagwat",
    "EMP104",
    0,
    10,
    800
);
calculateEmployeeSalary(
    "Test Employee",
    "EMP105",
    26,
    20,
    -500
);