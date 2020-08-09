"use strict"

module.exports = async (event, context) => {
    const content = event;

    let weather = { 'rainy': 3, 'cloudy': 2, 'snowy': 1, 'sunny': -1, 'other': 0 };

    let index = (1024 / content.body.airlineRanking) - (30 * weather[content.body.condition]);
    const result = {
        'status': 'Received input: ' + JSON.stringify(index)
    }
    return context
        .headers(
            {
                "Content-type": "text/plain",
                "Access-Control-Allow-Origin": "*"
            }
        )
        .status(200)
        .succeed(result)
} 