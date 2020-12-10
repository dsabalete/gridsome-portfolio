<template>
    <section class="education-section">
        <v-container>
            <v-row>
                <v-col>
                    <h1>
                        Education & Experience
                    </h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-timeline>
                        <v-timeline-item
                            v-for="(year, i) in years"
                            :key="i"
                            :color="year.color"
                            small
                        >
                            <template v-slot:opposite>
                                <span
                                    :class="
                                        `headline font-weight-bold ${
                                            year.color
                                        }--text`
                                    "
                                    v-text="year.year"
                                ></span>
                            </template>
                            <div class="py-4">
                                <h2
                                    :class="
                                        `headline font-weight-light mb-4 ${
                                            year.color
                                        }--text`
                                    "
                                >
                                    {{ year.entity }}
                                </h2>
                                <div>
                                    {{ year.description }}
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data: () => ({
        years: [
            {
                color: 'yellow',
                year: '2018',
                entity: 'Udemy - Andrew Mead',
                description:
                    'The Complete React Web Developer Course (with Redux)',
            },
            {
                color: 'cyan',
                year: '2018',
                entity: 'Udemy - Mosh Hamedani',
                description: 'Backbone Tutorial: Learn Backbonejs from Scratch',
            },
            {
                color: 'red',
                year: '2016',
                entity: 'Udemy - Anthony Alicea',
                description: 'Learn and Understand AngularJS',
            },
            {
                color: 'pink',
                year: '2016',
                entity: 'EDX - W3Cx',
                description:
                    'HTML5.2x: Advanced Techniques for Designing HTML5 Apps',
            },
            {
                color: 'amber',
                year: '2016',
                entity: 'EDX - W3Cx',
                description:
                    'HTML5.1x: HTML5 Coding Essentials and Best Practices',
            },
            {
                color: 'orange',
                year: '2016',
                entity: 'EDX - Universidad Carlos III de Madrid',
                description:
                    'INF.1x: The Software Architect Code: Building the Digital World',
            },
            {
                color: 'blue',
                year: '2016',
                entity: 'EDX - Linux Foundation',
                description: 'LFS101x.2: Introduction to Linux',
            },
            {
                color: 'orange',
                year: '2015',
                entity: 'Miriada X - Universidad Rey Juan Carlos',
                description:
                    'Agilidad y Lean. Gestionando los proyectos y negocios del s.XXI',
            },
            {
                color: 'yellow',
                year: '2015',
                entity: 'Miriada X - Universidad Politecnica de Madrid',
                description:
                    'Desarrollo de servicios en la nube con HTML5, Javascript y Node.js',
            },
            {
                color: 'cyan',
                year: '2015',
                entity: 'EDX - Microsoft',
                description: 'DEV203x: Introductoin to Bootstrap - a tutorial',
            },
            {
                color: 'pink',
                year: '2014',
                entity: 'Coursera - Vanderbilt Univeristy',
                description:
                    'Patter-Oriented Software Architectures: Programming Mobile Services for Android Handheld Systems',
            },
            {
                color: 'amber',
                year: '2014',
                entity: 'Coursera - Vanderbilt University',
                description:
                    'Programming Cloud Services for Android Handheld Systems',
            },
            {
                color: 'orange',
                year: '2014',
                entity: 'Coursera - University fo Amsterdam',
                description: 'Introduction to Communication Science',
            },
            {
                color: 'yellow',
                year: '2014',
                entity: 'Coursera - University of Maryland',
                description:
                    'Programming Mobile Applications for Android Handheld Systems',
            },
            {
                color: 'cyan',
                year: '2013',
                entity: 'Coursera - Stanford University',
                description: 'Startup Engineering',
            },
            {
                color: 'green',
                year: '2013',
                entity: 'Coursera - Rice University',
                description:
                    'An Introduction to Interactive Programming in Python',
            },
            {
                color: 'pink',
                year: '2013',
                entity: 'Coursera - Stanford University',
                description: 'Introduction to Databases',
            },
        ],
    }),
}
</script>

<style scoped>
.education-section {
    background-color: white;
}
</style>
