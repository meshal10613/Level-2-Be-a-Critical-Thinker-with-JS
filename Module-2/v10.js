//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events
// You need to "bin" this events into 30 minute intervals & count them to see engagement over time

//? Input
const events = [
    { timeStamp: "2025-10-22T10:01:00Z", type: "click" },
    { timeStamp: "2025-10-22T10:05:00Z", type: "scroll" },
    { timeStamp: "2025-10-22T10:14:00Z", type: "click" },
    { timeStamp: "2025-10-22T10:31:00Z", type: "click" },
    { timeStamp: "2025-10-22T10:45:00Z", type: "scroll" },
    { timeStamp: "2025-10-22T11:02:00Z", type: "click" },
];

const interval = 30 * 60 * 1000; //30 mins in ms

const getBinningTimeStamp = (timeStamp) => {
    const date = new Date(timeStamp);
    const flooredDate = Math.floor(date.getTime() / interval) * interval;
    return new Date(flooredDate).toISOString();
};

const binnedData = events.reduce((acc, event) => {
    const bin = getBinningTimeStamp(event.timeStamp)
    if(!acc[bin]){
        acc[bin] = { total: 0 };
    };

    acc[bin].total += 1;

    return acc;
}, {});

console.log(binnedData)