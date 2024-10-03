import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { createContext, useContext, useState, ReactNode } from "react";
import { defaultTasks } from "../default-tasks";
import { Task, TaskStatus } from "../tasks.types";

let nextId = defaultTasks.length + 1;

type TasksContextType = {
  tasks: Task[];
  addTask: (title: string,details: string) => void;
  setTaskStatus: (id: number, status: TaskStatus) => void;
  deleteTask: (id: number) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  useCopilotReadable({
    description: "The state of the period calendar tasks",
    value: JSON.stringify(tasks),
  });

  useCopilotAction({
    name: "addTask",
    description: `You will Offer detailed personalized care routines during the different phases of the menstrual cycle based on:
Last period date
Cycle length
Presence of conditions such as PCOS/PCOD
Number of days of bleeding . Title will include the important dates for tracking periods, ovulation, fertile windows,  and  details will include personalized care planner for each phase. Delete all the previous tasks once starting to add tasks. Each phase should be individual task. Make the language easier and interactive. `,
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the task",
        required: true,
      },
      {
        name: "details",
        type: "string",
        description: "The details of the task",
        required: true,
      },
    ],
    handler: ({ title, details }) => {
      addTask(title, details);
    }
  });

  useCopilotAction({
    name: "deleteTask",
    description: "Deletes a task from the todo list",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
    ],
    handler: ({ id }) => {
      deleteTask(id);
    }
  });

  useCopilotAction({
    name: "setTaskStatus",
    description: "Sets the status of a task",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
      {
        name: "status",
        type: "string",
        description: "The status of the task",
        enum: Object.values(TaskStatus),
        required: true,
      },
    ],
    handler: ({ id, status }) => {
      setTaskStatus(id, status);
    }
  });

  const addTask = (title: string ,details: string) => {
    setTasks([...tasks, { id: nextId++, title,details, status: TaskStatus.todo }]);
  };

  const setTaskStatus = (id: number, status: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  return (
    <TasksContext.Provider value={{ tasks, addTask, setTaskStatus, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};