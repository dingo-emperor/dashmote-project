export const filterProject = (projectList, filterCondition) => {
  return projectList.filter(
    (project) => project.name.indexOf(filterCondition) != -1
  );
};
