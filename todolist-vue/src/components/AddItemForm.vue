<template>
    <div class="addItem">
        <input type="text" class="text" v-model="item.name" />
        <font-awesome-icon 
        icon="plus-square" 
        @click="addItem()"
        :class="[ item.name ? 'active' : 'inactive', 'plus' ]"
        />
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        silly() {
            console.log('sup clicked');
        },
        addItem() {
            if( this.item.name == ''){
                return 'is empty';
            }
            axios.post('http://127.0.0.1:8000/api/item/store', {
                item: this.item
            })
            .then( response => {
                if(response.status == 201) {
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch ( error => {
                console.log(error);
            })
        }
    }
    
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: grey; */
}

.text {
    color: white;
}

input {
    background: grey;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}

.plus {
    font-size: 20px;
}

.active {
    color: lime;
}

.inactive {
    color: grey;
}
</style>