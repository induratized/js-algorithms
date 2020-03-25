/**
 * URL - http://mycodeschool.com/work-outs/sorting/8
 * 
 * Problem statement
    Mr. X has to buy a flight ticket for his next trip. He prefers to fly cheap. However, if two flights have same price, he prefers one with shorter flight duration. If two flights have same price and flight duration, he prefers to fly during early hours in a day. Mr. X needs your help. Given description of his flight options in format '{flight number} {departure time} {flight duration} {price}', he wants you to give him three options out of all in decreasing order of his preference.

    Input
    First line of input will contain a positive integer T = number of test cases. Each test case will contain multiple lines. First line will contain a positive integer N = number of flight options. Next N lines will contain description of flights in format '{flight number} {departure time} {flight duration} {price}' . Departure time will be in format 'HH:mm' where HH is hour in 24 hour clock and mm is minutes. Flight duration will be in minutes.

    Output
    For each test case, print on a single line flight number of top three options for Mr. X in decreasing order of his preference. The flight numbers should be separated by single space. There should be no space after last flight number on each line.

    Sample Input
    1
    6
    EK404 07:35 135 3000
    IT404 08:30 165 3500
    SG531 05:36 195 2700
    AI440 18:20 155 3500
    GA321 11:35 205 3000
    EK345 15:35 215 2700

    Sample Output
    SG531 EK345 EK404
 */

 import { doTheSwap } from "../../utility";

 const FLIGHTS_DATA = [
    {flightNo: 'EK404', time: '07:35', duration: 135, price: 3000},
    {flightNo: 'IT404', time: '08:30', duration: 165, price: 3500},
    {flightNo: 'SG531', time: '05:36', duration: 195, price: 2700},
    {flightNo: 'AI440', time: '18:20', duration: 155, price: 3500},
    {flightNo: 'GA321', time: '11:35', duration: 205, price: 3000},
    {flightNo: 'EK345', time: '15:35', duration: 215, price: 2700},
]

function getBestFlights(flights, nTopChoices) {
    for(let i = 1; i < flights.length; i++) {
        let hole = i;
        let currentFlight = flights[i];
        while (hole > 0 && isFlightB_BetterThan_FlightA(currentFlight, flights[hole-1]))  {
            doTheSwap(flights, hole-1, hole)
            hole--;
        }
        flights[hole] = currentFlight;
    }

    return flights.slice(0, nTopChoices).map(flight => flight.flightNo);
}

function isFlightB_BetterThan_FlightA(flightB, flightA) {
    if(flightA.price > flightB.price) {
        return true;
    } else if(flightA.price == flightB.price) {
        if(flightA.duration > flightB.duration) {
            return true;
        } else if(flightA.duration == flightB.duration) {
            if(isFlightB_EarlierThan_FlightA(flightB, flightA))  {
                return true
            }
        }
    }

    return false;
}

function isFlightB_EarlierThan_FlightA(flightB, flightA) {
    let faTime = flightA.time.split(':');
    let fbTime = flightB.time.split(':');

    if(faTime[0] > fbTime[0]) {
        return true;
    } else if(faTime[0] ==fbTime[0]) {
        if(faTime[1] > fbTime[1]) {
            return true;
        }
    }

    return false;
}

console.log(getBestFlights(FLIGHTS_DATA, 3))