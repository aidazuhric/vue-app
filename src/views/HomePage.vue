<template>
    <div class="ProductsPage">
        <PageHeader></PageHeader>
        <PageSidebar></PageSidebar>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageSidebar from '@/components/PageSidebar.vue'


export default {
    name: 'ProductsPage',
    components: {
        PageHeader,
        PageSidebar
    }
};

</script>

<style>
body{
    margin-top:-3.8%;
}

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