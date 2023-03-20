import { APP_TIMEZONE } from "../utils/app_timezone";

export const newDate = (date?: any) => {
    if (!date) date = new Date();
    else date = new Date(date);

    let difference = (APP_TIMEZONE * 60) + date.getTimezoneOffset();

    date.setMinutes(date.getMinutes() + difference);

    return date;
}