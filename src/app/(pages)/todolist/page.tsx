import TodoList from "@/app/components/todolist/TodoList";
import React from "react";

export const metadata = {
  title: "KYRIZKYP - TodoList",
};

const page = () => {
  return (
    <main>
      <section>
        <div className="flex items-center justify-center">
          <TodoList />
        </div>
      </section>
    </main>
  );
};

export default page;
