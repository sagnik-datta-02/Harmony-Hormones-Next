import { Input } from "./ui/input";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useTasks } from "../lib/hooks/use-tasks";

export function AddTodo() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (title) {
      addTask(title, details);
      setTitle("");
      setDetails(""); 
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col md:flex-row items-center mb-4 gap-2"> 
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Add a new Period Related Title..."
          className="flex-1 bg-[#FFEBEE] text-gray-800 rounded-md px-4 py-2 border-2 border-[#FFCDD2] focus:outline-none focus:border-[#F50057]" 
        />
        <Input
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          type="text"
          placeholder="Add new Details..."
          className="flex-1 bg-[#FFEBEE] text-gray-800 rounded-md px-4 py-2 border-2 border-[#FFCDD2] focus:outline-none focus:border-[#F50057]" 
        />
        <Button 
          type="submit" 
          disabled={!title} 
          onClick={handleAddTask} 
          variant="contained" 
          color="primary"
          className="bg-[#F50057] hover:bg-[#C51162] text-white"
        >
          Add
        </Button>
      </div>
    </form>
  );
}
