<template>
    <section class="ocean-page">
        <div class="hero ocean">
            <div class="container">
                <h1 class="ocean-page__title">Ocean</h1>
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
                    Dive into the depths of the ocean at our mesmerizing ocean life exhibit! Explore the wonders of the underwater world, where vibrant coral reefs teem with life and mysterious creatures glide through the depths. Immerse yourself in the beauty of our life-sized marine displays, showcasing the diversity of ocean ecosystems, from the bustling coral communities to the serene seafloor.
                </p>
                <p class="details__description">
                    Learn about the delicate balance that sustains marine life and the critical importance of ocean conservation. Engage with interactive displays that highlight the incredible adaptations of marine species and the ongoing efforts to protect our oceans. Whether you're captivated by the graceful dance of jellyfish or intrigued by the intelligence of dolphins, our Ocean Life Exhibit promises an unforgettable voyage into the heart of Earth's largest and most enigmatic habitat – where the wonders of the sea await!
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
.ocean-page {
    &__title {
        color: $dark;
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 8px;
        color: #FFF;
        mix-blend-mode: difference;
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
