import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FilterRow from "./components/FilterRow";
import CategoryFilter from "./components/CategoryFilter";
import Summary from "./components/Summary";
import ExpForm from "./components/ExpForm";
import ExpList from "./components/ExpList";

const initialExpensesList = [
  {
    id: "TXN-SD-001",
    name: "Breakfast Treebo Hotel ",
    amount: 800,
    category: "Food",
  },
  {
    id: "TXN-SD-002",
    name: "Flight to Hyderabad",
    amount: 7200,
    category: "Travel",
  },
  {
    id: "TXN-SD-003",
    name: "DMart Essentials",
    amount: 3499,
    category: "Shopping",
  },
  {
    id: "TXN-SD-004",
    name: "Electricity bill",
    amount: 1875,
    category: "Bills",
  },
  {
    id: "TXN-SD-005",
    name: "Dinner Salt",
    amount: 1640,
    category: "Food",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpensesList);
  const [showClock, setShowClock] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log("app started");
    document.title = `Expense Tracker - ${expenses.length} expenses`;
  }, []);

  useEffect(() => {
    const visibleCount =
      selectedCategory === "All"
        ? expenses.length
        : expenses.filter((expense) => expense.category === selectedCategory)
            .length;

    document.title = `(${visibleCount}) Expense Tracker - ${selectedCategory}`;
  }, [selectedCategory, expenses]);

  const filteredExpenses = useMemo(() => {
    if (selectedCategory === "All") return expenses;
    return expenses.filter((expense) => expense.category === selectedCategory);
  }, [expenses, selectedCategory]);

  const total = useMemo(
    () => filteredExpenses.reduce((sum, expenses) => sum + expenses.amount, 0),
    [filteredExpenses],
  );

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };

  return (
    <>
      <Header
        showClock={showClock}
        onToggleClock={() => setShowClock((prev) => !prev)}
      />
      <MainSection>
        <FilterRow>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
            visibleCount={filteredExpenses.length}
            totalCount={expenses.length}
          />
          <Summary total={total} />
        </FilterRow>
        <ExpForm onAddExpense={handleAddExpense} totalCount={expenses.length} />

        <ExpList expenses={filteredExpenses} onDelete={handleDeleteExpense} />
      </MainSection>
    </>
  );
};

export default App;
