<template>
  <el-table v-if="tableData.length > 0" :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" :sortable="true" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="email" label="email" />
    <el-table-column prop="company" label="company" />
  </el-table>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {},
  setup() {
    const store = useStore();
    store.dispatch("getCustomers");
    let tableData = computed(() => store.getters.customers);

    return { tableData };
  },
};
</script>
