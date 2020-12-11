<template>
    <Layout>
        <About />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Contact />
    </Layout>
</template>

<script>
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'

export default {
    metaInfo: {
        title: 'David Sabalete - Portfolio',
    },
    components: {
        About,
        Projects,
        Education,
        Experience,
        Skills,
        Contact,
    },
}
</script>

<style>
h1 {
    color: #0f1928;
}
</style>
