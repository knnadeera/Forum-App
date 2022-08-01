//import ExpenseItem from "./components/ExpenseItem";

import Expenses from "./components/Expenses/JS/Expenses";
import NewExpense from './components/NewExpense/NewExpense'

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Drone",
    amount: 1000,
    date: new Date(2022, 3, 22),
  },
];

const App = () => {
  return (
    <div>
      <NewExpense/>
      <div>
      <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;