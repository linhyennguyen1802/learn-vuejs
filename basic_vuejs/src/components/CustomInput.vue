<script setup lang="ts">

defineProps<{
    label: string,
    inputType: string,
    typeButton: string,


}>()

</script>

<template>
    <div class="input-area">
        <label for="input">{{ label }}</label>
        <div className="content-input ">
            <input class="subcontent-input" :type="inputType" name="input" />
            <button class="subcontent-btn" :class="typeButton"></button>
        </div>
    </div>

</template>

<style scoped>
.input-area {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

}


.content-input {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.subcontent-input {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    outline: none;
    border: 2px solid #DEDEDE;
    border-right: 0px;
    border-radius: 8px 0 0 8px;
}

.subcontent-btn {
    width: 10%;
    background-color: #ffff;
    cursor: pointer;
    border: 2px solid #DEDEDE;
    border-left: 0px;
    border-radius: 0px 8px 8px 0px;
}

.btn-clear {
    background-image: url('../assets/closeicon.png');
    background-repeat: no-repeat;
    background-position: center;

}

.btn-show {
    background-image: url('../assets/showicon.png');
    background-repeat: no-repeat;
    background-position: center;
}
</style>
