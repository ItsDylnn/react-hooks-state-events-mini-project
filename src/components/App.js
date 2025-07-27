import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data/tasks";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks =
    selectedCategory === "All"
      ? TASKS
      : TASKS.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
