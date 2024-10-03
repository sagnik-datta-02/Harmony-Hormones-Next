export type Task = {
    id: number;
    title: string;
    status: TaskStatus;
    details: String;
  };
  
  export enum TaskStatus {
    todo = "todo",
    done = "done",
  }