<template>
<div>
    <h2>Connectez-vous à Suika</h2>
    <label for="login-username">Username</label>
    <input v-model="userName" type="text" id="login-username">
    <label for="login-password">Password</label>
    <input type="text" id="login-password">
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    @Prop({type: String, default: ''})
    userName!: '';

}
</script>

<style>

</style>
