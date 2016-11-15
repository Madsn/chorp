import React, {PropTypes} from 'react';

const TaskItem = function (props) {
  return (
    <li>
      {props.task.title}
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
