import moment from "moment";
import { checksInstance } from "../model/checks.model";

const isSameDay = (createdAt: Date, updatedAt: Date) => {
    const createdDate = moment(createdAt);
    const updatedDate = moment(updatedAt);

    if (createdDate.isSame(updatedDate, "day")) return true;

    const nextDay = createdDate.clone().add(1, "day").startOf("day");
    if (updatedDate.isSame(nextDay, "minute")) return true;

    return false;
};

const splitCheck = (check: checksInstance, splitDate: Date) => {
    splitDate = new Date(splitDate.setHours(0, 0, 0, 0))
    const createdAt = new Date(check.createdAt);
    const updatedAt = new Date(check.updatedAt);

    const check1 = { createdAt, updatedAt: splitDate, finished: true };
    const check2 = { createdAt: splitDate, updatedAt, finished: check.finished };

    return [check1, check2] as checksInstance[];
};

const replaceCheck = (checks: checksInstance[], index: number, newChecks: checksInstance[]) => {
    const updatedChecks = [...checks];
    updatedChecks.splice(index, 1, ...newChecks);
    return updatedChecks;
};

export const breakChecks = (checks: checksInstance[]) => {
    for (let index = 0; index < checks.length; index++) {
        const check = checks[index];
        const createdAt = new Date(check.createdAt);
        const updatedAt = new Date(check.updatedAt);

        const datesInSameDay = isSameDay(createdAt, updatedAt)
        if (!datesInSameDay) {
            let currentCheck = check;
            let currentCreatedAt = createdAt;

            let datesNotInSameDay = !isSameDay(currentCreatedAt, updatedAt)

            while (datesNotInSameDay) {
                const nextCreatedAt = new Date(currentCreatedAt);
                nextCreatedAt.setDate(currentCreatedAt.getDate() + 1);

                const newChecks = splitCheck(currentCheck, nextCreatedAt);

                checks = replaceCheck(checks, index, newChecks);

                index += newChecks.length - 1;
                currentCheck = newChecks[1];
                currentCreatedAt = nextCreatedAt;
                datesNotInSameDay = !isSameDay(currentCreatedAt, updatedAt);
            }
        }
    }

    return checks;
};