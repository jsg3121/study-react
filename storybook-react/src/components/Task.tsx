import React from 'react';

export interface TaskProps {
  task: {
    id?: string,
    title?: string,
    state?: string;
    updatedAt?: Date;
  },
  onArchiveTask: () => void,
  onPintask: () => void;
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state, updatedAt }, onArchiveTask, onPintask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;