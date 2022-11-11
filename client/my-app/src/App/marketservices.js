
export const currFormat = (data) => {
    return `$ ${data}`
}

export const toChartData = (data) => {

    return data.prices.map((elem) =>
     ({x:elem[0], y: elem[1]})
    )

}