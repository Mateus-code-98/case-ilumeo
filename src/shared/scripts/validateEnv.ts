import "dotenv/config";
import { envSchema } from "../schemas/env.shemas";
import { validateSchema } from "../services/validateSchema";

const execute = async () => {
    const { haveError, message } = await validateSchema({ data: process.env, schema: envSchema })
    if (haveError) {
        console.log("\n" + "🔴 " + message + "\n")
        process.exit(1)
    }
    else {
        console.log("\n" + "🟢 " + "Environment variables are valid" + "\n")
    }
}

execute()