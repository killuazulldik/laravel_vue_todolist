<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form  v-on:reloadlist="getList()"/>
        </div>
        <list-view :items="items"
            v-on:reloadlist="getList()"/>
    </div>
</template>

<script>
import AddItemForm from './AddItemForm';
import ListView from './ListView';
import axios from 'axios';

export default {
    components: {
        AddItemForm,
        ListView
    },
    data: function (){
        return {
            items: []
        }
    },
    methods: {
        getList(){
            axios.get('http://127.0.0.1:8000/api/items')
            .then(response=> {
                this.item = response.data
            })
            .catch( error=>{
                console.log(error);
            })
        }
    },
    created(){
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background: white;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>