<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import CustomInput from '@/components/CustomInput.vue';


</script>

<template>
  <main>
    <h1 class="title">Đơn xin làm bạn với Méow Oh </h1>

    <CustomInput label="Name" inputType="text" typeButton="btn-clear"></CustomInput>
    <CustomInput label="Email" inputType="text" typeButton="btn-clear"></CustomInput>
    <CustomInput label="Password" inputType="text" typeButton="btn-show"></CustomInput>
    <CustomInput label="Confimm-password" inputType="text" typeButton="btn-show"></CustomInput>

    <CustomButton label="Gửi đơn"></CustomButton>



  </main>
</template>

<style>
.title {
  padding-bottom: 30px;
  font-weight: bold;
}
</style>
