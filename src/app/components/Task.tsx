"use client";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { cn } from "../lib/utils";
import { useTasks } from "../lib/hooks/use-tasks";
import { motion } from "framer-motion";
import { TaskStatus, type Task } from "../lib/tasks.types";

export function Task({ task: { id, title, details, status } }: { task: Task }) {
  const { setTaskStatus, deleteTask } = useTasks();

  return (
    <motion.div
      key={`${id}_${status}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center gap-4 p-4 rounded-lg shadow-md"
      style={{
        background: status === TaskStatus.done ? '#FFD8DF' : '#FFE5E8', // Use different shades for done and todo tasks
      }}
    >
      <Checkbox
        id={`task_${id}`}
        onClick={() => setTaskStatus(id, status === TaskStatus.done ? TaskStatus.todo : TaskStatus.done)}
        checked={status === TaskStatus.done}
        className="transition-transform duration-200"
      />

      <Label
        htmlFor={`task_${id}`}
        className={cn(
          "flex-1 text-sm",
          status === TaskStatus.done ? "line-through text-gray-500" : "text-gray-800" // Change color based on status
        )}
      >
        <div className="font-bold text-lg">{title}</div> {/* Updated font size and weight for title */}
        <div className="text-gray-600 text-xs">{details}</div>
      </Label>

      <Button
        variant="outlined"
        size="small"
        onClick={() => deleteTask(id)}
        className="flex items-center gap-1 text-red-500 hover:bg-red-100 transition duration-200"
      >
        <DeleteIcon className="w-4 h-4" />
        <span className="sr-only">Delete</span>
      </Button>
    </motion.div>
  );
}
