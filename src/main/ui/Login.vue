<template>
    <div>
        <h2>Connectez-vous à Suika</h2>
        <form>
            <label for="login-username">Username</label>
            <input v-model="userName" type="text" id="login-username" placeholder="Identifiant" />

            <label for="login-password">Password</label>
            <input v-model="password" type="text" id="login-password" placeholder="Mot de passe super sécurisé" />

            <button type="submit">Valider</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    private credentialMock = {
        userName: 'Nickie',
        password: 'test',
    };

    private userName = '';
    private password = '';

    created() {
        console.log(this.userName);
        console.log(this.password);
    }
}
</script>

<style></style>
