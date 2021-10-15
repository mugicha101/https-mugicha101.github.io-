import React from "react";

const Task = ({ name}) => {
  return (
    <div>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
       <div id={"task-"+name}>
          <li>{name}</li>
          <button id="remove" onClick={function() {
           document.getElementById("task-"+name).remove();
         }}>Remove</button>
       </div>
    </div>
  );
};

export default Task;
