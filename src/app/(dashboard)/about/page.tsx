const About = () => {
  return (
    <div className="p-4">
      <div className="text-2xl text-gray-800 font-semi-bold ">
        About Our Todo App
      </div>
      <div className="text-xl">
        Welcome to our todo app! Our mission is to help you stay organized and
        productive by providing a simple and intuitive platform for managing
        your tasks.
      </div>

      <div className="text-2xl text-gray-800 font-semi-bold pt-4">
        How to Use
      </div>
      <ul className="pt-2">
        <li>
          <span className="font-bold text-gray-800">Create a Task:</span> Click
          on the Add Task button and enter the task details, such as title,
          description, priority, and due date.
        </li>
        <li>
          <span className="font-bold text-gray-800">Edit a Task:</span> To edit
          a task, simply click on the task and make your changes. You can update
          the title, description, priority, due date, or mark the task as
          completed.
        </li>
        <li>
          <span className="font-bold text-gray-800">Delete a Task:</span> If you
          no longer need a task, you can delete it by clicking on the delete
          icon next to the task.
        </li>
        <li>
          <span className="font-bold text-gray-800">Filter and Sort:</span> Use
          the filter and sort options to organize your tasks based on priority,
          due date, or category.
        </li>
        <li>
          <span className="font-bold text-gray-800">Stay Organized:</span> Keep
          your tasks organized by assigning priority levels, setting due dates,
          and categorizing tasks into different groups.
        </li>
      </ul>

      <div className="text-2xl text-gray-800 font-semi-bold pt-4">Our Team</div>
      <div className="text-xl">
        Our team is passionate about productivity and helping people achieve
        their goals. We re constantly working on improving our app to provide
        you with the best task management experience possible.
      </div>
    </div>
  );
};

export default About;
