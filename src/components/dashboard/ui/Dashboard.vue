<template>
    <div>
        <h1>Bienvenue {{ currentUser.firstName }}</h1>
        <p>{{ currentUser.description }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import currentUserMock from '@/components/dashboard/currentUserMock';

interface CurrentUser {
    firstName: string;
    lastName: string;
}

@Component
export default class Dashboard extends Vue {
    private currentUser: CurrentUser = this.$store.state.currentUser;

    created() {
        this.$store.commit('setCurrentUser', {
            firstName: currentUserMock.firstName,
            lastName: currentUserMock.lastName,
            description: currentUserMock.description
        });
    }
}
</script>