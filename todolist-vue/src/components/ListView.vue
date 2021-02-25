<template>
    <div>
       <div v-for="(item, index) in items" :key="index">
           <list-item :item="item" class="item" v-on:itemchanged="$emit('reloadlist')"/>
       </div>
    </div>
</template>

<script>
import listItem from './ListItem';

export default {
    props: ['items'],
    components: {
        listItem
    }
    
}
</script>

<style scoped>
.item {
    background: wheat;
    padding: 5px;
    margin-top: 5px;
}
</style>