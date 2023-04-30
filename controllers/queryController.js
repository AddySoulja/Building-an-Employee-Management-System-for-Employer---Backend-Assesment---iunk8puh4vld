const Employee = require("../models/employeeModel");

const filterQueries = async (req, res) => {
  try {
    //Write your code here for sorting & pagination
    //1) For sorting sort salary from ascending to descending order
    //2) For Pagination set limit 5 as a default limit and default page is 1
    // Formulae to implementing pagination: (page - 1) * limit
    // For Sorting use    .sort('salary')
    let page = parseInt(req.query.page),
      limit = parseInt(req.query.limit);
    const data = await Employee.find().sort({ salary: 1 });
    let pagination = (page || 1) * (limit || 5);
    pagination = data.slice(0, pagination);
    res.status(200).json({ pagination });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { filterQueries };
