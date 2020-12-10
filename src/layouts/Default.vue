<template>
    <v-app>
        <NavigationPanel :items="items" />
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavigationPanel from '../components/NavigationPanel.vue'

export default {
    components: {
        NavigationPanel,
    },
    data() {
        return {
            items: [
                { title: 'About', icon: 'mdi-account-box-outline' },
                { title: 'Projects', icon: 'mdi-apps' },
                { title: 'Education & Experience', icon: 'mdi-school-outline' },
                { title: 'Contact', icon: 'mdi-message-text-outline' },
            ],
            right: null,
        }
    },
}
</script>

<style>
.v-application--wrap {
    flex-direction: row;
}
.v-main {
    flex: 1 0;
    padding-left: 250px;
}
</style>
