<template>
    <div>
        <label for="userName">User name</label>
        <input v-model="userName" @input="resetErrorMessages" type="text" name="userName" id="userName" />

        <label for="password">Password</label>
        <input v-model="password" @input="resetErrorMessages" type="password" name="password" id="password" />

        <button @click="submitForm">Valider</button>

        <p>{{ userNameErrorMsg }}</p>
        <p>{{ passwordErrorMsg }}</p>
        <p>{{ emptyValueErrorMsg }}</p>
        <div v-if="validationMsg">
            <p>Bravo, vous pouvez vous connecter</p>
            <router-link to="/dashboard">Dashboard</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import currentUserCredentials from '@/common/login/currentUserCredentialsMock';

@Component
export default class Login extends Vue {
    private userName = '';
    private password = '';
    private emptyValueErrorMsg = '';
    private userNameErrorMsg = '';
    private passwordErrorMsg = '';
    private validationMsg = '';

    get emptyValues() {
        return this.userName === '' && this.password === '';
    }

    get validUsername() {
        return this.userName === currentUserCredentials.userName;
    }

    get validPassword() {
        return this.password === currentUserCredentials.password;
    }

    resetErrorMessages() {
        this.emptyValueErrorMsg = '';
        this.emptyValueErrorMsg = '';
        this.userNameErrorMsg = '';
        this.passwordErrorMsg = '';
        this.validationMsg = '';
    }

    submitForm() {
        if (!this.emptyValues) {
            if (!this.validUsername) {
                this.emptyValueErrorMsg = '';
                this.userNameErrorMsg = 'Votre identifiant est incorrect';
            }

            if (!this.validPassword) {
                this.userNameErrorMsg = '';
                this.passwordErrorMsg = 'Votre mot de passe est incorrect';
            }

            if (this.validPassword && this.validPassword) {
                this.userNameErrorMsg = '';
                this.passwordErrorMsg = '';
                this.emptyValueErrorMsg = '';
                this.validationMsg = "c'est parfait, vous êtes génial";
            }
        } else {
            this.emptyValueErrorMsg = 'Veuillez renseigner tous les champs svp';
        }
    }
}
</script>

<style lang="scss"></style>
