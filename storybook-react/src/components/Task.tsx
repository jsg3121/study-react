import React from 'react';

export interface TaskProps {
  task: {
    id?: string,
    title?: string,
    state?: string;
    updatedAt?: Date;
  },
  onArchiveTask: (id?: string) => void,
  onPinTask: (id?: string) => void;
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state, updatedAt }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" name="checked" defaultChecked={state === 'TASK_ARCHIVED'} disabled={true} />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;