
exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      id:10,
      name: "office chair4",
      description: "not very comfortable",
    },
    {
      id: 11,
      name: "box of markers4",
      description: "perfect for drawing on walls",
    },
    {
      id: 12,
      name: "Greg4",
      description: "Greg is from the IT department",
    },
  ]);
};
