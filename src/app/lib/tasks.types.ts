export type Task = {
    id: number;
    title: string;
    status: TaskStatus;
    details: string;
  };
  
  export enum TaskStatus {
    todo = "todo",
    done = "done",
  }