<template>
    <section class="projects-section" id="projects">
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
                    </v-img>
                    <v-card-title>{{ project.name }}</v-card-title>

                    <v-card-text class="text--primary">
                        {{ truncate(project.description) }}
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
                    description: 'My Portfolio made with Gridsome and ❤️',
                    image:
                        'https://github.com/dsabalete/gridsome-portfolio/raw/main/mockups/portfolio.png',
                },
                {
                    name: 'My 1 RM',
                    github: 'https://github.com/dsabalete/my-1-rm',
                    description:
                        'The 1RM is the maximum weight with which a single repetition of a particular exercise can be done. Since often testing what that amount is very risky and very expensive for the central nervous system, you can get to know it by applying the Brzycki formula (as long as the number of repetitions is greater than 10). The purpose of this application is to help calculate the 1RM of any training session.',
                    image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                },
            ],
        }
    },
    methods: {
        truncate(str) {
            if (str.length > 80) {
                return str.slice(0, 80) + '...'
            } else {
                return str
            }
        },
    },
}
</script>

<style scoped>
.projects-section {
    background-color: #ffd563;
}

.v-image {
    border-bottom: 1px solid black;
}
</style>
