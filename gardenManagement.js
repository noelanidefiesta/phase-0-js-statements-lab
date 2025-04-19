const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// check temperature
if (temperature > 80) {
    console.log("watering on");
} else {
    console.log("Watering off");
};

// time of day
if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}

// increase soilMoisture until it reaches 40
while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}
