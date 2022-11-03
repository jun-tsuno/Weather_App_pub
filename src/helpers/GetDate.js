export const getYear = (dt) => dt.getFullYear();

const dayT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const getMonth = (dt) => dayT[dt.getMonth()];

export const getDate = (dt) => dt.getDate();

const dateT = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export const getDay = (dt) => dateT[dt.getDay()];

export const getHours = (dt) => {
    const hours = dt.getHours();
    if(hours < 12) {
        return `${hours} AM`;
    } else {
        return `${hours % 12} PM`
    }
};

export const getMinutes = (dt) => dt.getMinutes();