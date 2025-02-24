/**
* 王文俊
* 2024年07月24日
*/
<template>
  <div>
    <el-table :data="pageInfo.tableData" style="width: 100%">
      <el-table-column label="name" prop="CardPackageName">
      </el-table-column>
      <el-table-column label="RelationId" prop="RelationId">
      </el-table-column>
      <el-table-column label="ShopId" prop="ShopId">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" @click.stop="openDetail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination_wrapper" layout="prev, pager, next"
                   :total="parseInt(pageInfo.total)"
                   :page-size.sync="pageSize"
                   :current-page.sync="currentPage"
                   @current-change="pageChangeHandler"/>
    {{ loadingStatus }}
  </div>
</template>

<script setup>

import cardRepository from "~/repository/cardRepository.js";
import {reactive} from "vue";

let currentPage = ref(1);
let pageSize = ref(10);
let loadingStatus = ref('loading');

let pageInfo = reactive({
  total: 0,
  tableData: [],
})

const pageQuery = computed(() => {
  return {
    page: currentPage.value,
    pageSize: pageSize.value,
  }
})

const pageChangeHandler = (page) => {
  currentPage.value = page;
}

const openDetail = (row) => {
  let {RelationId, ShopId} = row;
  navigateTo({
    path: '/cardDetail',
    query: {
      RelationId,
      ShopId,
    }
  })
}

//api.js中定义
const {$api} = useNuxtApp();
// usePage2({
//   $api, cardRepository,
// })
let cardApi = cardRepository($api);
let {data, status} = await useAsyncData(`cardPage:${currentPage.value}`,
    () => cardApi.page(pageQuery.value),
    {
      watch: [pageQuery],
    });

watch(() => status.value, (newVal) => {
  if (newVal == 'success') {
    pageInfo.tableData = data.value.data.Data.Lists;
    pageInfo.total = data.value.data.Data.TotalNum;
    loadingStatus.value = 'success';
  } else {
    loadingStatus.value = 'loading...';
  }
}, {immediate: true})

</script>

<style scoped lang="scss">

</style>