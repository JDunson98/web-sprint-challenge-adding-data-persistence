
exports.seed =async  function(knex) {
  await knex("projects_resources").insert([
    {project_id: 16, resource_id: 1},
    {project_id: 17, resource_id: 2},
    {project_id: 18, resource_id: 3},
  ]);
};
