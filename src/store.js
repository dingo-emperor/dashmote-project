import { reactive } from "vue";
import mini_json from "./mini_json.json";
import { deleteProject } from "./utils/deleteProject";

export const store = reactive({
  projectList: mini_json.projectList,
  filterCondition: "",

  // set newCondition as filter condition
  changeFilterCondition(newCondition) {
    this.filterCondition = newCondition;
  },
  // delete project named projectName from project list
  deleteCertainProject(projectName) {
    this.projectList = deleteProject(this.projectList, projectName);
  },
});
