// public/budgetData.ts

const budgetData = {
    monthlyBudget: 500,
    spent: 320,
    remaining: 180,
    percentSpent: 64,
    transactions: [
      {
        id: 1,
        date: "Apr 5, 2025",
        title: "Dinner at Bella's",
        amount: 85,
        category: "Restaurant",
      },
      {
        id: 2,
        date: "Apr 2, 2025",
        title: "Movie Night",
        amount: 45,
        category: "Activity",
      },
      {
        id: 3,
        date: "Mar 28, 2025",
        title: "Botanical Gardens",
        amount: 30,
        category: "Activity",
      },
      {
        id: 4,
        date: "Mar 21, 2025",
        title: "Coffee Shop",
        amount: 25,
        category: "Restaurant",
      },
      {
        id: 5,
        date: "Mar 15, 2025",
        title: "Hiking Trip",
        amount: 60,
        category: "Sports",
      },
      {
        id: 6,
        date: "Mar 8, 2025",
        title: "Weekend Getaway",
        amount: 350,
        category: "Travel",
      },
    ],
    suggestions: [
      {
        id: 1,
        title: "Picnic in the Park",
        budget: "Under $30",
        category: "Activity",
        description: "Pack some sandwiches and enjoy nature together.",
      },
      {
        id: 2,
        title: "Local Art Gallery",
        budget: "$0-20",
        category: "Activity",
        description:
          "Many galleries offer free admission or suggested donations.",
      },
      {
        id: 3,
        title: "Casual Dining",
        budget: "$50-80",
        category: "Restaurant",
        description:
          "Try the new fusion restaurant downtown with great happy hour deals.",
      },
      {
        id: 4,
        title: "Bike Trail Adventure",
        budget: "$10-40",
        category: "Sports",
        description: "Rent bikes or bring your own for a day of exploration.",
      },
    ],
  };
  
  export default budgetData;
  