import { database } from "../../database/db";
import { Check, User } from "../../database/models";

const USERS_TO_CREATE = 5;
const CHECKS_TO_CREATE = 20;

const randomMinutes = () => Math.floor(Math.random() * 480);

const execute = async () => {
    console.log("Creating users and checks...")
    for (let i = 0; i < USERS_TO_CREATE; i++) {
        const new_user = await User.create();
        console.log({ user_code: new_user.code });
        for (let j = 0; j < CHECKS_TO_CREATE; j++) {
            const new_check = await Check.create({ user_id: new_user.id });

            const createdAt = new Date(new_check.createdAt);

            const updatedAt = createdAt;
            updatedAt.setMinutes(updatedAt.getMinutes() + randomMinutes());

            await database.query(`UPDATE checks SET "createdAt" = '${createdAt.toLocaleDateString()}' WHERE id = '${new_check.id}'`);
            await database.query(`UPDATE checks SET "updatedAt" = '${createdAt.toLocaleDateString()}' WHERE id = '${new_check.id}'`);
        }
    }
};

execute();