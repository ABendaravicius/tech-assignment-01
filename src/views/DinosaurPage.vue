<template>
    <section class="dinosaur-page">
        <div class="hero dinosaurs">
            <div class="container">
                <h1 class="dinosaur-page__title">Dinosaurs</h1>
            </div>
        </div>
        <div class="container">
            <div class="highlights">
                <template v-if="highlights.length > 0">
                <!-- Add the museum highlight cards based on the data provided below -->
                <MuseumHighlight 
                    v-for="highlight in highlights"
                    :highlight="highlight"
                    :key="highlight.id"
                    :type="'space'"
                />
                <!-- Set 'type' prop's value to : 'dino', 'ocean', 'space' or 'wild' to see the icons -->
                </template>
                <h3 class="highlights__notice" v-else>Under construction...</h3>
            </div>

            <div class="details">
                <h2 class="details__title">
                    About our exhibits
                </h2>
                <p class="details__description">
                    Step back in time and walk among giants at our extraordinary dinosaur exhibition! Immerse yourself in the prehistoric world as life-sized replicas of these magnificent creatures roar to life. Encounter the awe-inspiring Tyrannosaurus rex, feel the ground shake beneath the mighty footsteps of the Brachiosaurus, and marvel at the intricate details of the Velociraptors in this captivating journey through the Mesozoic era.
                </p>
                <p class="details__description">
                    Delve into the latest discoveries and scientific breakthroughs that continue to unravel the mysteries of these ancient beings. From the evolution of feathers on dinosaurs to the interconnected ecosystems they inhabited, our exhibit offers a fascinating glimpse into the dramatic and dynamic world of dinosaurs. Don't miss this unique opportunity to come face-to-face with the giants that once ruled the Earth, and experience the thrill of discovery at our Dinosaur Exhibition – where the past comes alive!
                </p>
            </div>
        </div>
    </section>
</template>

<script>

import MuseumHighlight from '@/components/MuseumHighlight.vue';

export default {
    name: 'SpacePage',
    components: {
        MuseumHighlight,
    },
    mixins: [
    ],
    props: {

    },
    data() {
        return {
            spaceHighlights: [
                
            ],
            spacePartners: {
                
            },
        };
    },
    computed: {
        highlights() {
            let partners = [...Object.values(this.spacePartners)].map(partner => {
                partner.type = 'partner';
                partner.date = partner.createdAt;
                return partner;
            });

            let highlights = [...this.spaceHighlights, ...partners].sort((a,b) => new Date(b.date) - new Date(a.date));

            return highlights;
        }
    },
    methods: {

    },
    created() {

    },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
.dinosaur-page {
    &__title {
        color: $dark;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 8px;
        color: #FFF;
        mix-blend-mode: exclusion;
    }
}

.details {
    text-align: center;

    &__title {
        display: flex;
        position: relative;
        justify-content: center;
        margin-bottom: 36px;
        font-size: 36px;
        text-transform: uppercase;

        &::after {
            content: '';
            position: absolute;
            bottom: -1rem;
            display: block;
            height: 2px;
            width: 120px;
            background-color: gold;
        }
    }
    &__description {
        margin-bottom: 48px;
        line-height: 1.5;
        color: $dark;

        & + * {
            margin-top: 24px;
        }
    }
}
</style>
