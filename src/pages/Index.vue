<template>
    <Layout>
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
    </Layout>
</template>

<script>
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'

export default {
    metaInfo: {
        title: 'Hello, world!',
    },
    components: {
        About,
        Contact,
        Education,
        Experience,
        Projects,
    },
}
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
h1 {
    color: #0f1928;
}
</style>
