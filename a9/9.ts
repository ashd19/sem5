// import { promises as fs } from "fs";
// import { resolve } from "path";

// // promise is an object which contains the status of completion of an operation
// // A promise has 3 states:
// // 1. Pending - operation is still running
// // 2. Fulfilled (Resolved) - operation completed successfully with a result
// // 3. Rejected - operation failed with an error
// // Promises allow us to handle asynchronous operations without blocking the main thread
// // We use await to wait for the promise to resolve and get the actual result
// // Without await, we get the promise object itself, not the data it will eventually contain

// // 1. loading data from a large data file
// //read the content  , utf-8 encoding is just another way to convert the raw bytes into string.
// // .readFile is async , it takes time to read the file , Code pauses at await, waits for file to be read completely, then continues.
// // without await you get the promise not the data
// //
// async function getData() {
//   console.time("getData");
//   const dataFile = resolve("data.json");
//   const content = await fs.readFile(dataFile, "utf-8");
//   console.log(content);

//   console.timeEnd("getData");
// }
// getData();

// // 2. Demonstrating async/await with timeout functions

// // Creating a promise that resolves after a delay
// function delay(ms: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Completed after ${ms}ms`);
//     }, ms);
//   });
// }

// // Demonstrating WITHOUT await - returns Promise
// function demonstrateWithoutAwait() {
//   console.log("=== WITHOUT AWAIT ===");
//   const result = delay(2000); // No await
//   console.log("Result:", result); // Promise { <pending> }
//   console.log("This runs immediately!");
// }

// // Demonstrating WITH await - waits for completion
// async function demonstrateWithAwait() {
//   console.log("=== WITH AWAIT ===");
//   console.time("awaitDemo");

//   const result = await delay(2000); // Waits 2 seconds
//   console.log("Result:", result); // "Completed after 2000ms"
//   console.log("This runs after 2 seconds!");

//   console.timeEnd("awaitDemo");
// }

// // Multiple async operations in sequence
// async function sequentialOperations() {
//   console.log("=== SEQUENTIAL OPERATIONS ===");
//   console.time("sequential");

//   console.log("Starting operation 1...");
//   await delay(1000);
//   console.log("Operation 1 done!");

//   console.log("Starting operation 2...");
//   await delay(1500);
//   console.log("Operation 2 done!");

//   console.timeEnd("sequential"); // Should be ~2.5 seconds
// }

// // Multiple async operations in parallel
// async function parallelOperations() {
//   console.log("=== PARALLEL OPERATIONS ===");
//   console.time("parallel");

//   console.log("Starting both operations...");
//   const [result1, result2] = await Promise.all([delay(1000), delay(1500)]);

//   console.log("Both operations done!");
//   console.log("Results:", result1, result2);

//   console.timeEnd("parallel"); // Should be ~1.5 seconds (longest delay)
// }

// // Run demonstrations
// async function runDemos() {
//   demonstrateWithoutAwait();

//   await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay

//   await demonstrateWithAwait();
//   await sequentialOperations();
//   await parallelOperations();
// }

// runDemos();

// 3. getting data from an external api

// Option 1: Using a free API that doesn't require a key
async function getWeather(city: string) {
  try {
    console.log(`🌤️ Fetching weather for ${city}...`);
    console.time("weatherAPI");

    // Using wttr.in - a free weather API that doesn't require API key
    const response = await fetch(`https://wttr.in/${city}?format=j1`);

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const weatherData = await response.json();
    const current = weatherData.current_condition[0];
    const location = weatherData.nearest_area[0];

    console.log(`Weather in ${location.areaName[0].value}:`);
    console.log(
      `🌡️ Temperature: ${current.temp_C}°C (feels like ${current.FeelsLikeC}°C)`
    );
    console.log(`☁️ Description: ${current.weatherDesc[0].value}`);
    console.log(`💧 Humidity: ${current.humidity}%`);
    console.log(`💨 Wind: ${current.windspeedKmph} km/h`);

    console.timeEnd("weatherAPI");
    return weatherData;
  } catch (error) {
    console.error(`❌ Failed to get weather for ${city}:`, error);
  }
}

// Option 2: Simulated weather API (always works)
async function getWeatherSimulated(city: string) {
  try {
    console.log(`🌤️ Getting simulated weather for ${city}...`);
    console.time(`weather-${city}`);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock weather data
    const mockWeather = {
      city: city,
      temperature: Math.floor(Math.random() * 35) + 5, // 5-40°C
      description: ["sunny", "cloudy", "rainy", "snowy"][
        Math.floor(Math.random() * 4)
      ],
      humidity: Math.floor(Math.random() * 60) + 40, // 40-100%
      windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
    };

    console.log(`Weather in ${city}:`);
    console.log(`🌡️ Temperature: ${mockWeather.temperature}°C`);
    console.log(`☁️ Condition: ${mockWeather.description}`);
    console.log(`💧 Humidity: ${mockWeather.humidity}%`);
    console.log(`💨 Wind: ${mockWeather.windSpeed} km/h`);

    console.timeEnd(`weather-${city}`);
    return mockWeather;
  } catch (error) {
    console.error(`❌ Error getting weather for ${city}:`, error);
  }
}

// Try the real API first, fallback to simulated
async function getWeatherSafe(city: string) {
  console.log("Trying real weather API...");
  try {
    return await getWeather(city);
  } catch (error) {
    console.log("Real API failed, using simulated data:");
    return await getWeatherSimulated(city);
  }
}

// Test both approaches
getWeatherSafe("New york");
