let chart; // Global variable

function calculateBudget() {
  let income = Number(document.getElementById("income").value);
  let rent = Number(document.getElementById("rent").value);
  let groceries = Number(document.getElementById("groceries").value);
  let utilities = Number(document.getElementById("utilities").value);
  let other = Number(document.getElementById("other").value);

  let totalExpenses = rent + groceries + utilities + other;
  let balance = income - totalExpenses;

  document.getElementById("total-expenses").textContent = totalExpenses;
  document.getElementById("balance").textContent = balance;

  drawChart([rent, groceries, utilities, other, balance]);
}

function drawChart(data) {
  const ctx = document.getElementById('budgetChart').getContext('2d');

  // Destroy old chart if it exists
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Rent', 'Groceries', 'Utilities', 'Other', 'Remaining'],
      datasets: [{
        label: 'Budget Breakdown',
        data: data,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#a9a9a9', '#8bc34a']
      }]
    },
    options: {
      responsive: false
    }
  });
}
