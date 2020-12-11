<template>
    <section class="skills-section" id="skills">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Skills</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center">
                    <v-icon large>mdi-language-html5</v-icon>
                    <v-icon large>mdi-language-css3 </v-icon>
                    <v-icon large>mdi-language-javascript</v-icon>
                    <v-icon large>mdi-vuejs </v-icon>
                    <v-icon large>mdi-nuxt </v-icon>
                    <!-- <v-icon large>mdi-angular </v-icon> -->
                    <!-- <v-icon large>mdi-react </v-icon> -->
                    <!-- <v-icon large>mdi-backbonejs </v-icon> -->
                    <v-icon large>mdi-nodejs </v-icon>
                    <v-icon large>mdi-sass</v-icon>
                    <!-- <v-icon large>mdi-less</v-icon> -->
                    <v-icon large>mdi-drupal </v-icon>
                    <!-- <v-icon large>mdi-gulp </v-icon> 
                    <v-icon large>mdi-grunt </v-icon>
                    <v-icon large>mdi-webpack </v-icon>-->
                    <v-icon large>mdi-npm</v-icon>
                    <!-- <v-icon large>mdi-yarn</v-icon> -->
                    <v-icon large>mdi-language-java</v-icon>
                    <v-icon large>mdi-language-php</v-icon>
                    <v-icon large>mdi-language-python</v-icon>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
.skills-section {
    background-color: white;
    margin-bottom: 4rem;
}
.v-icon {
    margin-left: 2rem;
}
.v-icon:hover {
    color: #f8b500;
}
</style>
