
exports.seed = async function(knex) {
  await knex("projects_tasks").insert([
    {project_id: 16, task_id: 1},
    {project_id: 17, task_id: 2},
    {project_id: 18, task_id: 3},
  ]);
};
