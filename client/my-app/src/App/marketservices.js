import moment from "moment";

export const currFormat = (data) => {
    return `$ ${data}`;
}

export const toChartData = (data) => {
    return data.prices?.map((elem) =>
     ({x:moment(elem[0]).format("MMM Do YY"), y: elem[1]}));
}
export const id_Format = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
}
export const symbol_Format = (data) => {
    return data.toUpperCase();
}