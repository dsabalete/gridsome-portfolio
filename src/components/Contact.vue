<template>
    <section class="contact-section" id="contact">
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="text-center">Contact Information</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    sm="6"
                    offset-sm="3"
                    class="d-flex justify-space-around my-15"
                >
                    <v-icon
                        large
                        color="black"
                        @click="goTo('https://github.com/dsabalete')"
                        >mdi-github</v-icon
                    >
                    <v-icon
                        large
                        color="black"
                        @click="goTo('https://linkedin.com/in/dsabalete')"
                        >mdi-linkedin</v-icon
                    >
                    <v-icon
                        large
                        color="black"
                        @click="goTo('https://twitter.com/dsabalete')"
                        >mdi-twitter</v-icon
                    >
                    <v-icon
                        large
                        color="black"
                        @click="goTo('https://instagram.com/dsabalete')"
                        >mdi-instagram</v-icon
                    >
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    methods: {
        goTo(url) {
            window.location = url
        },
    },
}
</script>

<style scoped>
.contact-section {
    background-color: #ffd563;
    min-height: 30rem;
}
</style>
