
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("description", 256)
      table.boolean("is_complete").notNull().defaultTo(false)
  })
  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("name").notNull().unique()
      table.text("description", 256)
  })
  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.text("description", 256).notNull()
      table.text("notes", 256)
      table.boolean("is_complete").notNull().defaultTo(false)
      // create a foreign key
      table
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
  })
  await knex.schema.createTable("projects_tasks", (table) => {
      table
        .integer("project_id")
        .notNull()
        .references("id")
        .inTable("projects")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
      table
        .integer("task_id")
        .notNull()
        .references("id")
        .inTable("tasks")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
  })
  await knex.schema.createTable("projects_resources", (table) => {
      table
        .integer("project_id")
        .notNull()
        .references("id")
        .inTable("projects")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
      table
        .integer("resource_id")
        .notNull()
        .references("id")
        .inTable("resources")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
  });
};

exports.down = async function(knex) {
  knex.schema.dropTableIfExists("projects");
  knex.schema.dropTableIfExists("tasks");
  knex.schema.dropTableIfExists("resources");
  knex.schema.dropTableIfExists("projects_tasks");
  knex.schema.dropTableIfExists("projects_resources");
}
