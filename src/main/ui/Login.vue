<template>
<div>
    <h2>Connectez-vous à Suika</h2>
    <label for="login-username">Username</label>
    <input type="text" id="login-username">
    <label for="login-password">Password</label>
    <input type="text" id="login-password">
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {

}
</script>

<style>

</style>
