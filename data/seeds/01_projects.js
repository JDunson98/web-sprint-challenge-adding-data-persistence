
exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      id: 16,
      name: "The First Project",
      description: "test data",
      is_complete: false,
    },
    {
      id: 17,
      name: "Project the Second",
      description: "more test data",
      is_complete: false,
    },
    {
      id: 18,
      name: "Wow a Third Project",
      description: "a third test data",
      is_complete: false,
    },
  ]);
};
