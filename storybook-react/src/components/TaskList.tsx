import React from 'react';

import Task, { TaskProps } from './Task';

interface tasksList {
  id?: string,
  title?: string,
  state?: string;
  updatedAt?: Date;
}

export interface TaskListProps {
  loading?: boolean,
  tasks?: Array<tasksList>,
  onPinTask?: () => void,
  onArchiveTask?: () => void;

}

const TaskList: React.FC<TaskListProps> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;