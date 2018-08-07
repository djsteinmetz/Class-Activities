var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAll("party_name", "parties");
orm.selectAll("client_name", "clients");
orm.selectType("*", "parties", "party_type", "grown-up", function(result) {
    var data = result;
    console.log(data);
});
// orm.partiesByClient("c.client_name", "p.party_name", "p.party_cost", "clients c", "parties p", "c.id", "p.client_id", "c.client_name", "ASC", "p.party_cost", "DESC");
// Find a pet in the pets table by an animal_name of Rachel.
//orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
//orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
