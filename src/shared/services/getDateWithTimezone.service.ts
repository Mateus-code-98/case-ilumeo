export const getDateWithTimezoneService = (timezone: number) => {
    let date = new Date();

    let difference = (timezone * 60) + date.getTimezoneOffset();

    date.setMinutes(date.getMinutes() + difference);

    return date;
}