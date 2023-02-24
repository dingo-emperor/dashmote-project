<script setup>
import { store } from "../store.js";
import { filterProject } from "../utils/filterProject";
import deleteButton from "./deleteButton.vue";
</script>

<template>
  <ul
    v-for="project in filterProject(store.projectList, store.filterCondition)"
    :key="project.name"
  >
    <div class="whole-project">
      <!-- render category part -->
      <div class="category-icon"></div>
      <div class="category-text">
        {{ project.category }}
      </div>

      <!-- render project name -->
      <div class="project-name">
        {{ project.name }}
      </div>

      <!-- render user number -->
      <div class="user-number">{{ project.users }} users</div>

      <!-- render dashboards number -->
      <div class="dashboard-number-display">
        <div class="dashboard-number-text">{{ project.dashboards }} dashboards</div>
      </div>

      <!-- render delete button -->
      <div class="delete-button">
        <deleteButton :projectName="project.name" />
      </div>
    </div>
  </ul>
</template>

<style scoped>
.whole-project {
  position: relative;
  width: 1145px;
  height: 70px;
  left: 135.62px;

  /* White */

  background: #ffffff;
  /* Big Shadow */

  box-shadow: 0px 4px 20px rgba(120, 120, 120, 0.15);
  border-radius: 8px;
}

.category-icon {
  position: absolute;
  width: 28px;
  height: 28px;
  left: 25.31px;
  top: 21px;

  /* Bright Blue */
  background: #d1e9ff;
}

.category-text {
  position: absolute;
  width: 26px;
  height: 16px;
  left: 26.38px;
  top: 24px;

  font-family: "Roboto Medium";
  font-size: 14px;
  line-height: 22px;

  /* or 157% */
  text-align: center;

  /* Bright Blue */
  color: #1990ff;
}

.project-name {
  position: absolute;
  width: 232.41px;
  height: 22px;
  left: 90.6px;
  top: 24px;

  font-family: "Roboto Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  /* Dark Blue */
  color: #223273;
}

.user-number {
  position: absolute;
  width: 161.51px;
  height: 22px;
  left: 617.38px;
  top: 24px;

  /* Paragraph Regular */
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  /* Dark Grey */
  color: #52594d;
}

.dashboard-number-display {
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 16px;
  gap: 10px;

  position: relative;
  width: 117px;
  height: 22px;
  left: 855.38px;
  top: 24px;

  /* GreenOpacity */
  background: #ccf5e3;
  /* Green */
  border: 1px solid #00cc74;
  border-radius: 4px;
}

.dashboard-number-text {
  width: 85px;
  height: 14px;

  /* Button Regular */
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: center;
  text-align: center;

  /* Green */
  color: #00cc74;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.delete-button {
  position: absolute;
  width: 161.51px;
  height: 22px;
  left: 1070.38px;
  top: 20px;
}
</style>
