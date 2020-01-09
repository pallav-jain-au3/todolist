import React from "react";
import "./App.scss";
import { Headers } from "./components/layout/Headers";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Headers />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
