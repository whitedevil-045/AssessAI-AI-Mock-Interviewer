/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:XIjHlOs90eUt@ep-purple-cell-a57oofht.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };