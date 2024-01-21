<template>
    <section class="wildlife-page">
        <div class="hero wildlife">
            <div class="container">
                <h1 class="wildlife-page__title">Wildlife</h1>
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
                    Embark on a thrilling journey through the untamed beauty of our wildlife exhibit! Step into the heart of diverse ecosystems, from the dense jungles to the vast savannas, and encounter an array of majestic creatures in their natural habitats. Witness the awe-inspiring grace of big cats, the playful antics of primates, and the vibrant colors of exotic birds as they come to life through captivating displays.
                </p>
                <p class="details__description">
                    Immerse yourself in the sights and sounds of the animal kingdom, and gain a deeper understanding of the delicate balance that sustains these incredible species. Our exhibit showcases the rich biodiversity of our planet, highlighting the importance of conservation and the interconnectedness of all living beings. Whether you're fascinated by the elusive beauty of endangered species or captivated by the resilience of wildlife in the face of environmental challenges, our Wildlife Exhibit invites you to experience the wonders of the natural world – a celebration of the extraordinary diversity that makes our planet truly remarkable!
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
.wildlife-page {
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
