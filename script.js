document.getElementById("startBtn").addEventListener("click", () => {
  const targetDateTime = document.getElementById("datetime").value;

  if (!targetDateTime) {
    alert("Please select a date and time!");
    return;
  }

  const targetTime = new Date(targetDateTime).getTime();

  if (isNaN(targetTime)) {
    alert("Invalid date format!");
    return;
  }

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById("message").innerText = "🎉 Time's up! 🎉";
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
});
