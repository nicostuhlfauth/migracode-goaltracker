import { useState } from "react";
import { FancyButton } from "./FancyButton";
import styles from "./Goals.module.css";

export const Goals = () => {
  const initialGoals = [
    { name: "Drink more coffee", completed: false },
    { name: "Enjoy Life", completed: false },
    { name: "Learn React", completed: false },
  ];
  const [goals, setGoals] = useState(initialGoals);
  const [newGoal, setNewGoal] = useState("");

  const isGoalsListEmpty = goals.length === 0;

  const updateGoal = (goalName) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.map((goal) => {
        if (goal.name === goalName) {
          return { ...goal, completed: !goal.completed };
        }
        return goal;
      });
      return updatedGoals;
    });
  };

  const handleAddGoal = (event) => {
    if (event.key === "Enter" && newGoal.trim() !== "") {
      setGoals((prevGoals) => [
        ...prevGoals,
        { name: newGoal, completed: false },
      ]);
      setNewGoal("");
    }
  };

  const handleDeleteGoal = (goalName) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.name !== goalName);
      return updatedGoals;
    });
  };

  return (
    <section className={styles.wrapper}>
      <input
        type="text"
        placeholder="Add a new goal"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        onKeyDown={handleAddGoal}
        className={styles.input}
      />
      {goals.map((goal) => (
        <div key={goal.name} className={styles.buttonGroup}>
          <FancyButton
            text={goal.name}
            variant={goal.completed ? "primary" : "secondary"}
            handleClick={() => updateGoal(goal.name)}
          />
          <FancyButton
            text="Remove"
            variant="secondary"
            handleClick={() => handleDeleteGoal(goal.name)}
          />
        </div>
      ))}
      {isGoalsListEmpty ? <p>You have no goals yet! Create one!</p> : null}
    </section>
  );
};
