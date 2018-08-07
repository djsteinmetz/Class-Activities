var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(columnDisplay, tableToSearch) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [columnDisplay, tableToSearch], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectType: function(selectWhat, table, col, specificType) {
    var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [selectWhat, table, col, specificType], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  // partiesByClient: function(tableOneCol, tableTwoColumn, tableTwoColumnTwo, tableTwo, tableOneKey) {
  //   var queryString =
  //     "SELECT ?, ?, ? FROM ? JOIN  p ON  = p.client_id ORDER BY c.client_name ASC, p.party_cost DESC;";
  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableTwoColumn, tableTwoColumnTwo, tableTwo, tableOneKey],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // }
};

module.exports = orm;
