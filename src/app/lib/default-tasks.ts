import { Task, TaskStatus } from "./tasks.types";

export const defaultTasks: Task[] = [
    {
        id: 1,
        title: " Demo - Period Start - 27/09/2024",
        status: TaskStatus.done,
        details: "First day of the period"
      },
      {
        id: 4,
        title: "Demo - Ovulation Day - 11/10/2024",
        status: TaskStatus.todo,
        details: "Estimated ovulation day"
      },
      {
        id: 7,
        title: "Demo - Next Period Start - 25/10/2024",
        status: TaskStatus.todo,
        details: "Estimated start of the next period"
      }
      
];