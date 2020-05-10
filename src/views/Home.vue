<template>
    <div class="home">
        <login />
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import login from '@/common/login/ui/Login.vue';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    components: {
        login,
    },
})
export default class Home extends Vue {}
</script>
