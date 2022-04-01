<template>
  <div>
    <h2 class="microfront-title">
      Micro Frontend Gossan - Tabla de Clientes
    </h2>
    <TableCustomers />
  </div>
</template>

<script>
import TableCustomers from "./components/TableCustomers.vue";

export default {
  name: "App",
  components: {
    TableCustomers,
  },
  setup() {
    return {};
  },
};
</script>

<style>
</style>
