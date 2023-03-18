import { checksInstance } from "../model/checks.model";

const splitCheck = (check: checksInstance, splitDate: Date) => {
    splitDate = new Date(splitDate.setHours(0, 0, 0, 0))
    const createdAt = new Date(check.createdAt);
    const updatedAt = new Date(check.updatedAt);

    const check1 = { createdAt, updatedAt: splitDate };
    const check2 = { createdAt: splitDate, updatedAt };

    return [check1, check2] as checksInstance[];
}

const replaceCheck = (checks: checksInstance[], index: number, newChecks: checksInstance[]) => {
    checks.splice(index, 1, ...newChecks);
}

export const breakChecks = (checks: checksInstance[]) => {
    for (let index = 0; index < checks.length; index++) {
        const check = checks[index];
        const createdAt = new Date(check.createdAt);
        const updatedAt = new Date(check.updatedAt);

        updatedAt.setDate(updatedAt.getDate() - 1)

        const datesInSameDay = createdAt.toDateString() === updatedAt.toDateString();

        if (datesInSameDay) {
            const newChecks = splitCheck(check, updatedAt);
            replaceCheck(checks, index, newChecks);
            index += newChecks.length - 1;
        } else {
            let currentCheck = check;
            let currentCreatedAt = createdAt;

            const datesNotInSameDay = currentCreatedAt.toDateString() !== updatedAt.toDateString();

            while (datesNotInSameDay) {
                const nextCreatedAt = new Date(currentCreatedAt);
                nextCreatedAt.setDate(currentCreatedAt.getDate() + 1);

                const newChecks = splitCheck(currentCheck, nextCreatedAt);

                replaceCheck(checks, index, newChecks);

                index += newChecks.length - 1;
                currentCheck = newChecks[1];
                currentCreatedAt = nextCreatedAt;
            }
        }
    }

    checks = checks.map(check => {
        const createdAt = check.createdAt.toLocaleString();
        const updatedAt = check.updatedAt.toLocaleString();

        return { createdAt, updatedAt } as checksInstance;
    })

    return checks;
}