
exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      id: 7, 
      description: "Make some bacon and eggs2",
      notes: "Toast would also be nice",
      is_complete: false,
    },
    {
      id: 8,
      description: "Take a shower2",
      notes: "You might want to use soap",
      is_complete: false,
    },
    {
      id: 9,
      description: "Get Coding2",
      notes: "Boot up your pc and get to work",
      is_complete: false,
    },
  ]);
}
