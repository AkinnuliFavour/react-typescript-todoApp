import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Container from "./Container";
import api from "./api/tasks";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import AllTasks from "./AllTasks";
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

export type Props = {
  id: number;
  title: string;
  datetime: string;
  body: string;
  checked: boolean;
}[];

function App() {
  const [tasks, setTasks] = useState<Props | []>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        console.log(response.data);
        setTasks(response.data);
        console.log(tasks);
      } catch (err) {
        let message;
        if (err instanceof Error) {
          // Not in the 200 response range
          message = err.message;
          console.log(message);
        } else {
          message = String(err);
          console.log(message);
        }
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route
              index
              element={<AllTasks tasks={tasks} setTasks={setTasks} />}
            />

            <Route
              path="/pending-tasks"
              element={<PendingTasks tasks={tasks} setTasks={setTasks} />}
            />

            <Route
              path="/completed-tasks"
              element={<CompletedTasks tasks={tasks} setTasks={setTasks} />}
            />
          </Route>

          <Route
            path="/add-task"
            element={<NewTask tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="edit-task/:id"
            element={<EditTask tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
