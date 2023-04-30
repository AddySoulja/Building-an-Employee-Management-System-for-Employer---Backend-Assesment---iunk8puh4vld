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
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: "Failed to get employee details" });
  }
};

//Updating Employee
const updateEmployee = async (req, res) => {
  try {
    //Write a code here for updating Employee details using 'PUT' request
    await Employee.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    const employee = await Employee.find();
    console.log("Updated: ", employee);
    res.status(201).json({
      message: "Employee details updated successfully",
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update employee details" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    //Write a code here for Deleting all the employees whose salary is greater than 10000
    const users = await Employee.find();
    for (let i = 0; i < users.length; i++) {
      if (users[i].salary > 10000) {
        await Employee.deleteOne({ _id: users[i].id });
      }
    }
    const newUsers = await Employee.find();
    if (users.length === newUsers.length) {
      res.status(404).json({ error: "No employees found" });
    } else {
      res.status(200).json({
        message: "employees deleted successfully",
        perv: users,
        next: newUsers,
      });
    }
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
