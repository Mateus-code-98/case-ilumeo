namespace NodeJS {
    interface ProcessEnv {
        PORT: number,
        DB_DIALECT: string,
        DB_HOST: string,
        DB_NAME: string,
        DB_PASS: string,
        DB_USER: string,
        DB_PORT: number,
        JWT_EXPIRESIN: String,
        JWT_SECRET: string
    }
}