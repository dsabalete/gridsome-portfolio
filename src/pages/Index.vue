<template>
    <Layout>
        <section>
            <v-container>
                <v-row>
                    <v-col sm="6">
                        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
                        <g-image
                            alt="Example image"
                            src="~/profile.jpg"
                            width="500"
                        />
                    </v-col>
                    <v-col sm="6">
                        <h1>Hi, I'm David.</h1>
                        <p>I'm a software developer...</p>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Hello, world!',
    },
}
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
