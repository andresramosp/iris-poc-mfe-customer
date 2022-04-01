<template>
  <div>
    <span class="microfront-title"
      >Componente traído de Micro Frontend Gossan</span
    >
    <div style="margin-top: 5px; width: 500px; background-color: white; padding: 15px;">
      <el-steps :active="active" finish-status="success">
        <el-step
          v-for="(step, index) of steps"
          :key="index"
          :title="step.name"
        />
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import "element-plus/dist/index.css";
import { ElButton, ElSteps, ElStep } from "element-plus";
export default {
  components: {
    ElButton,
    ElSteps,
    ElStep,
  },
  props: { steps: { type: Array } },
  setup() {
    const active = ref(0);

    const next = () => {
      if (active.value++ > 2) active.value = 0;
    };

    return { active, next };
  },
};
</script>