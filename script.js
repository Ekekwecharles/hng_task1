document.addEventListener("DOMContentLoaded", (e) => {
  // Function to get current time in UTC
  function getCurrentTimeUTC() {
    const now = new Date();
    // console.log(now);
    return now.toUTCString().split(" ")[4];
  }

  // Function to get current day of the week
  function getCurrentDayOfWeek() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[now.getUTCDay()];
  }

  // Function to update the time and day in the DOM
  function updateTimeAndDay() {
    document.getElementById("current-time").textContent = getCurrentTimeUTC();
    document.getElementById("current-day").textContent = getCurrentDayOfWeek();
  }

  // Update the time and day immediately when the page loads
  updateTimeAndDay();

  // Set an interval to update the time and day every second (1000 milliseconds)
  setInterval(updateTimeAndDay, 1000);
});
