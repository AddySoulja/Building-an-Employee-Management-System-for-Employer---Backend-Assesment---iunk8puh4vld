const Employee = require("../models/employeeModel");

//Registering Employee into database
const createEmployee = async (req, res) => {
  try {
    // Write a code here to store Employee data
    const employee = await Employee.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      companyName: req.body.companyName,
      email: req.body.email,
      salary: req.body.salary,
    });
    console.log("new emp: ", employee);
    res.status(201).json({
      newEmployee: employee,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to create employee" });
  }
};

//Get Employee From a Particular id
const getEmployee = async (req, res) => {
  try {
    // Write a code here to get Employee from a Particular id
    const employee = await Employee.find((employee) => employee.id);
    console.log(employee);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: "Failed to get employee details" });
  }
};

//Updating Employee
const updateEmployee = async (req, res) => {
  try {
    //Write a code here for updating Employee details using 'PUT' request
  } catch (err) {
    res.status(500).json({ error: "Failed to update employee details" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    //Write a code here for Deleting all the employees whose salary is greater than 10000
  } catch (err) {
    res.status(500).json({ error: "Failed to delete employees" });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
