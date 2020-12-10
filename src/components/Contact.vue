<template>
    <section class="contact-section">
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="text-center">Contact Information</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="6" offset-sm="3" class="d-flex justify-space-around">
                    <v-icon large color="black">mdi-github</v-icon>
                    <v-icon large color="black">mdi-linkedin</v-icon>
                    <v-icon large color="black">mdi-twitter</v-icon>
                    <v-icon large color="black">mdi-instagram</v-icon>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-section {
    background-color: #ffd563;
}
.contact-icon {
    width: 100px;
}
</style>
