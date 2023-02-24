export const deleteProject = (projectList, projectName) => {
  return projectList.filter((project) => project.name !== projectName);
};
