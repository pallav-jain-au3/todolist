import React, { useState } from "react";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";
import { firebase } from "../firebase";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");
  const projectId = generatePushId();

  const { setProjects } = useProjectsValue();
  const addProject = () => {
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectId: projectId,
        name: projectName,
        useId: "1234"
      })
      .then(() => {
        setProjects([]);
        setShow(false);
        setProjectName("");
      });
  };
  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            type="text"
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
          >
            {" "}
            Cancel
          </span>
        </div>
                
      )}
      <span className = "add-project__plus">+</span>
      <span data_testid = "add-project-action"
      className = "add-project__text"
      onClick = {()=> setShow(!show)}
      >Add project here</span>
    </div>
  );
};
