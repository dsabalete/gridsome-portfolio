<template>
    <v-navigation-drawer width="250px" permanent fixed>
        <v-list-item>
            <!-- <v-list-item-avatar>
                <img
                    src="https://avatars3.githubusercontent.com/u/57623874?s=460&u=bcb4dcb2225b8b904322be5c317dac8cc1347dfb&v=4"
                />
            </v-list-item-avatar> -->
            <v-list-item-content>
                <v-list-item-title class="title">
                    David Sabalete
                </v-list-item-title>
                <v-list-item-subtitle>
                    Software Developer
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="`#${item.title.toLowerCase().replace(' & ', '-')}`"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['items'],
}
</script>

<style lang="scss" scoped></style>
