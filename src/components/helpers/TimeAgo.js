// Return date in full date format: dd.hh.yyyy
const InFullDateFormat = (date) => {
    return `at ${date.getDate()}.${date.getMonth()}.${date.getYear()}`
}

// Calculate the difference between the date and now
// and return it in format "n minutes/hours/days ago" or "24.01.2021"
const TimeAgo = (date) => {
    // To date type
    let resultDate = new Date(date);

    // Get current datetime
    const now = new Date();

    if (now.getFullYear() === resultDate.getFullYear() && 
        now.getMonth() === resultDate.getMonth()
        && now.getDate() === resultDate.getDate()) {
            const nowHours = now.getHours();
            const resultHours = resultDate.getHours();
            return (nowHours === resultHours) ? 
                now.getMinutes() - resultDate.getMinutes() + ' minutes ago'
                : nowHours - resultHours + ' hours ago ' 
    } else return InFullDateFormat(resultDate)
}

export default TimeAgo