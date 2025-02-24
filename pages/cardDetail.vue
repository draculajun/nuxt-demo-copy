/**
* 王文俊
* 2024年07月24日
*/
<template>
  <div>
    <h3>CardName: {{CardName}}</h3>
    <h3>CardSn: {{CardSn}}</h3>
  </div>
</template>

<script setup>

import cardRepository from "~/repository/cardRepository.js";

const route = useRoute();

let relationId = Number(route.query.RelationId);
let shopId = Number(route.query.ShopId);

let CardName = ref('');
let CardSn = ref('');

const {$api} = useNuxtApp();
let cardApi = cardRepository($api);
let {data, status} = await useAsyncData(`cardDetail:${relationId},${shopId}`,
    () => cardApi.getUserCardPackageRcardInfo({relationId, shopId}),
    );
if (status.value == 'success') {
  if(!data.value.error) {
    CardName.value = data.value.data.Data.CardInfo.CardName;
    CardSn.value = data.value.data.Data.CardInfo.CardSn;
  }
}

</script>

<style scoped lang="scss">

</style>