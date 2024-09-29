import { defineConfig } from 'eslint-plugin-drizzle';
import { DB_URL } from "./src/config";


export default defineConfig({
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    dialect: 'postgresql',
    driver: "pg",
    dbCredentials:{
        connectionString: DB_URL
    },
    verbose: true,
    strict: true,
    migrations: {
        prefix: 'supabase'
    }
})
