<template>
    <div class="Home">
        <PageHeader></PageHeader>
        <PageSidebar/>
        <ProductsTable/>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageSidebar from '@/components/PageSidebar.vue'
import ProductsTable from '@/components/ProductsTable.vue'

export default {
    name: 'BlankPage',
    components: {
        PageHeader,
        PageSidebar,
        ProductsTable
    }
};

</script>

<style>

/* .charts{
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 50px;
  margin-top: 50px;
  justify-content: space-around;
} */

/* @media (max-width: 480px) {
    .charts {
      padding: 0 12px;
      flex-direction: column;
    }

    .chartSingle {
      width: 100% !important;
    }

    .chartSingleMiddle {
      margin-top: 50px !important;
    }
} */
</style>