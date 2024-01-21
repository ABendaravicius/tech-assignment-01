<template>
    <section class="space-page">
        <div class="hero space">
            <div class="container">
                <h1 class="space-page__title">Space</h1>
            </div>
        </div>
        <div class="container">
            <div class="highlights">
                <!-- Add the museum highlight cards based on the data provided below -->
                <MuseumHighlight 
                    v-for="highlight in highlights"
                    :highlight="highlight"
                    :key="highlight.id"
                    :type="'space'"
                />
                <!-- Set 'type' prop's value to : 'dino', 'ocean', 'space' or 'wild' to see the icons -->
            </div>

            <div class="details">
                <h2 class="details__title">
                    About our exhibits
                </h2>
                <p class="details__description">
                    Step into the cosmic wonders of our universe at our captivating space exhibit! Embark on an awe-inspiring journey that transcends the boundaries of Earth and transports you to the farthest reaches of the cosmos. Marvel at the beauty and mystery that lies beyond our planet as you explore the vast expanse of space.
                </p>
                <p class="details__description">
                    Witness the birth of stars in dazzling nebulae, each a celestial masterpiece painted across the cosmic canvas. Gaze in wonder at the breathtaking panoramas of distant galaxies, each one a testament to the unimaginable scale and diversity of the cosmos. Engage with interactive displays that allow you to travel through the cosmos at the speed of light, experiencing the gravitational dance of planets and the mesmerizing beauty of otherworldly phenomena.
                </p>
                <p class="details__description">
                    Delve into the fascinating history of space exploration, from the early days of stargazing civilizations to the groundbreaking achievements of modern space missions. Discover the incredible technologies that have propelled humanity into space, and learn about the courageous individuals who have ventured beyond our atmosphere to unlock the secrets of the universe.
                </p>
                <p class="details__description">
                    For the young and the young at heart, our space exhibit offers hands-on activities and immersive simulations that bring the wonders of space to life. Touch a real meteorite, experience the pull of gravity on different planets, and take part in exciting challenges that test your astronaut skills.
                </p>
                <p class="details__description">
                    Whether you're a seasoned space enthusiast or a curious novice, our space exhibit promises a journey of discovery and inspiration. Join us as we unveil the mysteries of the cosmos and celebrate the human spirit of exploration that has propelled us to reach for the stars. Don't miss your chance to embark on an unforgettable odyssey through the wonders of space at our Natural History Museum - where the universe comes alive!
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
                {
                    date: '2020-04-20 12:20:00',
                    description: 'Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.',
                    id: 1,
                    image: 'https://img.freepik.com/free-photo/meteorite-approaching-earth_1048-1880.jpg?t=st=1705838539~exp=1705839139~hmac=12ab2f32bf3479032da4cf2b4c070f534e572b04b856ea8698eef440d0e7780f',
                    name: 'Asteroids',
                },
                {
                    date: '2020-05-20 15:50:00',
                    description: 'A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.',
                    id: 9,
                    image: 'https://images.pexels.com/photos/5086477/pexels-photo-5086477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Comets',
                },
                {
                    date: '2020-05-01 9:22:00',
                    description: 'The term planet is ancient, with ties to history, astrology, science, mythology, and religion.',
                    id: 7,
                    image: 'https://img.freepik.com/free-photo/planet-earth-background_23-2150564687.jpg?t=st=1705838602~exp=1705839202~hmac=3470e0307036a353011725681753d4b848215a48a48d41a1a06d31f30ae52642',
                    name: 'Planets',
                    news: {
                        date: '2020-08-18 18:00:00',
                        title: 'Attend our talk about Jupiter with Dr. Hogarth',
                    },
                    quiz: 'https://planetquiz.space',
                },
                {
                    date: '2020-07-05 4:10:00',
                    description: 'A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.',
                    id: 12,
                    image: 'https://images.pexels.com/photos/1937687/pexels-photo-1937687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Meteor showers',
                    news: {
                        title: 'The Lyrids will peak at on April 21-22 2021, at night',
                    },
                },
            ],
            spacePartners: {
                observatory: {
                    createdAt: '2020-06-01 11:45:00',
                    info: 'The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.',
                    image: 'https://www2.hawaii.edu/~pine/northeast-10.jpg',
                    name: 'Mauna Kea Observatories',
                },
            },
        };
    },
    computed: {
        highlights() {
            let partners = [...Object.values(this.spacePartners)].map(partner => {
                partner.type = 'partner';
                return partner;
            });

            let highlights = [...this.spaceHighlights, ...partners].sort((a,b) => new Date(b.date ? b.date : b.createdAt) - new Date(a.date ? a.date : a.createdAt));

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
.space-page {
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
