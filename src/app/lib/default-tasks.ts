import { Task, TaskStatus } from "./tasks.types";

export const defaultTasks: Task[] = [
    {
        id: 1,
        title: "Period Start - 27/09/2024",
        status: TaskStatus.done,
        details: "First day of the period"
      },
      {
        id: 2,
        title: "Period End - 01/10/2024",
        status: TaskStatus.done,
        details: "Last day of the period"
      },
      {
        id: 3,
        title: "Fertile Window - 08/10/2024 to 12/10/2024",
        status: TaskStatus.todo,
        details: "Track fertility for potential conception"
      },
      {
        id: 4,
        title: "Ovulation Day - 11/10/2024",
        status: TaskStatus.todo,
        details: "Estimated ovulation day"
      },
      {
        id: 5,
        title: "Track Symptoms - 13/10/2024",
        status: TaskStatus.todo,
        details: "Log symptoms like cramps, mood swings, etc."
      },
      {
        id: 6,
        title: "Prepare for Next Cycle - 24/10/2024",
        status: TaskStatus.todo,
        details: "Prepare for the start of the next cycle"
      },
      {
        id: 7,
        title: "Next Period Start - 25/10/2024",
        status: TaskStatus.todo,
        details: "Estimated start of the next period"
      }
      
];