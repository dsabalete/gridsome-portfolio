<template>
    <section class="experience-section" id="experience">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Experience</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                        <v-timeline-item
                            v-for="(job, index) in jobs"
                            :key="index"
                            color="teal lighten-2"
                            class="text-left"
                        >
                            <span slot="opposite">{{ job.period }}</span>
                            <v-card class="elevation-2">
                                <v-card-title class="headline">
                                    {{ job.company }}
                                </v-card-title>
                                <v-card-subtitle>
                                    {{ job.position }}
                                </v-card-subtitle>
                                <v-card-text>
                                    {{ job.description }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    company: 'LoveToKnow Media Spain',
                    position: 'Senior Frontend Developer',
                    description:
                        'Frontend task with Vue.js in the YourDictionary.com team. Creation of new features, enforcing best practices and working in an agile environment in a decentralized international team.',
                    period: 'Nov 2019 - Present',
                },
                {
                    company: 'EDREAMS Odigeo',
                    position: 'Frontend Developer',
                    description: `Frontend development in Backbone, create unit testing with Karma, functional testing with Gerkin (launching an automated process run on Jenkins) and Testing AB of beta versions before going to upstream. A part of that, I also review code of pull request from different teams, including React code and update, modify or debug Java code in the backend part of the flow when it is needed.`,
                    period: 'Apr 2012 - Oct 2019',
                },
                {
                    company: 'Capitole Consulting',
                    position: 'Frontend Developer',
                    description:
                        'Frontend development in Backbone, JQuery and Lodash for client-company of the travel agency sector in Barcelona.',
                    period: 'Oct 2017 - Apr 2018',
                },
                {
                    company: 'Capitole Consulting',
                    position: 'Test Automation Engineer',
                    description:
                        'Implementation of automatic testing with Test Complete and Jenkins in a client-company of the pharmaceutical sector in Parets del Vallès.',
                    period: 'Jan 2017 - Oct 2017',
                },
                {
                    company: 'Capitole Consulting',
                    position: 'Analyst Programmer',
                    description:
                        'Migration of application to web format, responsive and Single Page Aplication (with AngularJS) for client-company of the banking sector in Sant Cugat del Vallès.',
                    period: 'Jul 2017 - Dec 2017',
                },
                {
                    company: 'FIATC Seguros',
                    position: 'Web Developer and Java Programmer',
                    description:
                        'Implementation of the “frontend” web for charging and contracting insurance applications in travel assistance and car insurance.',
                    period: 'Jun 2003 - Jul 2016',
                },
                {
                    company: 'Institut Català de Tecnologia',
                    position: 'Web Developer',
                    description:
                        'In charge of maintaining the web portal of the organization (XML + XLS + Oracle with Cocoon) and other applications (with Struts).',
                    period: 'Jun 2001 - May 2003',
                },
                {
                    company: 'Secretariaplus.com',
                    position: 'Web Developer',
                    description:
                        'Web development with ASP language, accessing a Microsoft SQL Server database with an intensive use of HTML and Javascript.',
                    period: 'Apr 2000 - May 2001',
                },
            ],
        }
    },
}
</script>

<style scoped>
.experience-section {
    background-color: #f8b500;
}
</style>
