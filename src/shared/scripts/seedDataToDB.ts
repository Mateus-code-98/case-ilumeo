import { database } from "../../database/db";
import { Check, User } from "../../database/models";

const USERS_TO_CREATE = 5;
const CHECKS_TO_CREATE = 20;

const randomMinutes = () => Math.floor(Math.random() * 480);

const execute = async () => {
    console.log("\n 📝 - CREATING USERS AND CHECKS\n");
    for (let i = 0; i < USERS_TO_CREATE; i++) {
        const new_user = await User.create();
        let minus_days = 0;
        for (let j = 0; j < CHECKS_TO_CREATE; j++) {
            minus_days++;

            const new_check = await Check.create({ user_id: new_user.id, finished: true });

            const createdAt = new Date(new_check.createdAt);
            createdAt.setDate(createdAt.getDate() - minus_days);

            const updatedAt = new Date(createdAt);
            const plusMinutes = randomMinutes();
            updatedAt.setMinutes(updatedAt.getMinutes() + plusMinutes);
            
            await database.query(`UPDATE checks SET "createdAt" = '${createdAt.toLocaleString("pt-BR")}' WHERE id = '${new_check.id}'`);
            await database.query(`UPDATE checks SET "updatedAt" = '${updatedAt.toLocaleString("pt-BR")}' WHERE id = '${new_check.id}'`);
        }
        console.log(` 👤 - USER CREATED: ${new_user.code}`);
    }
    console.log("\n ✅ - DONE\n");
};

execute();