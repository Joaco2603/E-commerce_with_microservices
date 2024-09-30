import { defineConfig } from 'drizzle-kit'
import { DB_URL } from "./src/config";


// export default defineConfig({
//     schema: "./src/db/schema/*",
//     out: "./src/db/migrations",
//     dialect: 'postgresql',
//     driver: "turso",
//     dbCredentials: {
//         connectionString: DB_URL
//     },
//     verbose: true,
//     strict: true,
//     migrations: {
//         prefix: 'supabase',
//         table: "migrations",
//     }
// })


export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    dbCredentials: {
        url: DB_URL!,
    },
    verbose: true,
    strict: true
})