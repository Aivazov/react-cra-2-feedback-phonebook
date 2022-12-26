import css from "./Task.module.css";

const Task = function ({numberOf}) {
  return (
    <p className={css.task}>
      Task <span>{numberOf}</span>
    </p>
  );
}

export default Task;