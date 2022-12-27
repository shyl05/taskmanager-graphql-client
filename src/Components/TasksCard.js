import React from 'react';

function TaskCard({task}) {
  return (
    <div className="ms-2 me-auto">
        <div className="fw-bold">{task.title}</div>
        {task.description}
    </div>
  );
}

export default TaskCard;