import "dotenv/config";
import { envSchema } from "../schemas/env.shemas";
import { validateSchemaService } from "../services/validateSchema.service";

const execute = async () => {

    const { haveError, messages } = await validateSchemaService({
        data: process.env,
        schema: envSchema
    });

    if (haveError) {
        console.log("\n");
        messages.forEach((message: string) => console.log("🔴 " + message + "\n"));
        process.exit(1);
    }
    else {
        const message = "Environment variables are valid";
        console.log("\n🟢 " + message + "\n");
    }
};

execute();