let chart; // Global chart variable

// Calculate budget and update chart
function calculateBudget() {
  // 1. Read values from inputs
  let income = Number(document.getElementById("income").value);
  let rent = Number(document.getElementById("rent").value);
  let groceries = Number(document.getElementById("groceries").value);
  let utilities = Number(document.getElementById("utilities").value);
  let other = Number(document.getElementById("other").value);

  // 2. Compute totals
  let totalExpenses = rent + groceries + utilities + other;
  let balance = income - totalExpenses;

  // 3. Update the results in the DOM
  document.getElementById("total-expenses").textContent = totalExpenses;
  document.getElementById("balance").textContent = balance;

  // 4. Draw (or redraw) the animated pie chart
  drawChart([rent, groceries, utilities, other, balance]);
}

// Draws an animated pie chart using Chart.js
function drawChart(data) {
  const ctx = document.getElementById("budgetChart").getContext("2d");

  // If a chart already exists, destroy it before making a new one
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["🏠 Rent", "🍔 Groceries", "🔌 Utilities", "🎮 Other", "💰 Remaining"],
      datasets: [{
        data: data,
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#a9a9a9", "#8bc34a"]
      }]
    },
    options: {
      responsive: false,
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 1000 // 1 second
      }
    }
  });
}

// RESET button functionality
document.getElementById("reset-btn").addEventListener("click", () => {
  // Clear all input fields
  ["income", "rent", "groceries", "utilities", "other"].forEach(id => {
    document.getElementById(id).value = "";
  });

  // Reset displayed results
  document.getElementById("total-expenses").textContent = "0";
  document.getElementById("balance").textContent = "0";

  // Remove the chart if it exists
  if (chart) {
    chart.destroy();
  }
});
