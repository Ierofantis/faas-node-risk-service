"use strict"

module.exports = (context, callback) => {
    const content = JSON.parse(context);

    let weather = { 'rainy': 3, 'cloudy': 2, 'snowy': 1, 'sunny': -1, 'other': 0 };

    let index = (1024 / content.airlineRanking) - (30 * weather[content.condition]);

    callback(undefined, { status: index });
}