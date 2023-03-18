declare module '*.jpg';
declare module '*.png';
declare module '*.ttf';
declare module '*.pdf';
declare module 'pluralize-ptbr'
declare module 'gn-api-sdk-node'

namespace NodeJS {
    interface ProcessEnv {
        PORT: number,
        DB_DIALECT: string,
        DB_HOST: string,
        DB_NAME: string,
        DB_PASS: string,
        DB_USER: string,
        DB_PORT: number,
        JWT_EXPIRESIN: number,
        JWT_SECRET: string,
        MODE: "DEV" | "PROD"
    }
}