import * as ENVS from "./../utils/envs";
import { envSchema } from "../schemas/env.shemas";
import { validateSchemaService } from "../services/validateSchema.service";

const execute = async () => {

    const { haveError, messages } = await validateSchemaService({
        data: ENVS,
        schema: envSchema
    });

    if (haveError) {
        console.log("")
        messages.forEach((message: string) => console.log(" 🔴 - " + message.toUpperCase() + "\n"));
        process.exit(1);
    }
    else {
        const message = "ENVIRONMENT VARIABLES ARE VALID"
        console.log("\n 🟢 - " + message + "\n");
    }
};

execute();