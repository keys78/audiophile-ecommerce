<template>
    <button :style="{background: bgcolor, color : textColor}" class="hovie font-semibold text-base focus:outline-none py-3 px-5">
        {{text}}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props:{
            text:String,
            bgcolor:String,
            textColor:String
        }
    }

</script>

<style scoped>
    .hovie:hover{
        transform: scale(0.98);
         opacity: 0.8;
    }
</style>