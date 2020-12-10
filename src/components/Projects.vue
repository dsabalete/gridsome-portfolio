<template>
    <section class="projects">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Projects</h1>
                </v-col>
            </v-row>
            <v-row class="justify-space-around mb-8 mt-4">
                <v-card
                    v-for="project in projects"
                    :key="project.name"
                    class=""
                    max-width="300"
                >
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="project.image"
                    >
                        <v-card-title>{{ project.name }}</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary">
                        {{ project.description }}
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange" text :href="project.github">
                            Github Repo
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: 'Gridsome-Portfolio',
                    github: 'https://github.com/dsabalete/gridsome-portfolio',
                    description: '',
                    image:
                        'https://github.com/dsabalete/gridsome-portfolio/raw/main/mockups/portfolio.png',
                },
                {
                    name: 'My 1 RM',
                    github: 'https://github.com/dsabalete/my-1-rm',
                    description: '',
                    image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                },
            ],
        }
    },
}
</script>

<style scoped>
.projects {
    background-color: #ffd563;
}
</style>
