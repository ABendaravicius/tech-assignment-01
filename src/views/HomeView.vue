<template>
  <section class="home">
    <div class="container">
        <div class="exhibitions">
            <h2 class="exhibitions__title">Our current exhibitions</h2>
            <div class="exhibitions__list">
                <router-link class="exhibitions__list-link" to="/dinosaurs">
                    <span>Dinosaurs</span>
                    <img src="https://img.freepik.com/free-photo/closeup-shot-dinosaur-skull-teeth-glass-box_181624-7239.jpg?w=1920&t=st=1705841903~exp=1705842503~hmac=9942df51769f49781dd11d4daef07689f8adeb061a942b3d9915b733a0926709" alt="">
                </router-link>
                <router-link class="exhibitions__list-link" to="/ocean">
                    <span>Ocean</span>
                    <img src="https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg" alt="">
                </router-link>
                <router-link class="exhibitions__list-link" to="/space">
                    <span>Space</span>
                    <img src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg" alt="">
                </router-link>
                <router-link class="exhibitions__list-link" to="/wildlife">
                    <span>Wildlife</span>
                    <img src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg" alt="">
                </router-link>
            </div>
        </div>

        <div class="about">
            <h2 class="about__title">About our establishment</h2>
            <p class="about__description">
                Welcome to the largest natural history museum on Earth, an unparalleled sanctuary of discovery and wonder that spans vast halls and immersive exhibits. Here, the history of life unfolds before your eyes as you encounter towering dinosaur replicas, explore the mysteries of the cosmos, and journey through lifelike displays of ocean life and wildlife that transport you to every corner of our planet.
            </p>
            <p class="about__description">
                With cutting-edge technology, interactive displays, and a steadfast commitment to conservation, our museum is a testament to the extraordinary diversity of life and the boundless curiosity that drives humanity's exploration of the natural world. Come join us on an unparalleled adventure where the past, present, and future collide in a symphony of discovery at the pinnacle of natural history museums.
            </p>
        </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';

.exhibitions {
    margin-top: 48px;
    width: 100%;

    &__title {
        margin-bottom: 24px;
        text-align: center;
        font-size: 24px;
        text-transform: uppercase;
        color: $dark;
    }

    &__list {
    display: grid;
    max-width: 980px;
    margin: auto;
    grid-template-columns: 1fr;
    gap: 16px;

        &-link {
            position: relative;
            display: flex;
            width: 100%;
            justify-self: center;
            align-self: center;
            justify-content: center;
            align-items: center;
            height: 240px;
            transition: all ease 200ms;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all ease 8000ms;
            }

            span {
                position: absolute;
                font-size: 48px;
                font-weight: 700;
                color: #FFF;
                text-shadow: 2px 2px 2px rgba(0, 0, 0, .45);
            }

            &:hover {
                box-shadow: 0 0 16px $dark;

                img {
                    object-position: left top;
                }
            }
        }

        @media screen and (min-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
.about {
    margin-top: 64px;
    &__title {
        margin-bottom: 24px;
        text-align: center;
        color: $dark;
        text-transform: uppercase;
    }
    &__description {
        text-align: center;

        &+* {
            margin-top: 24px;
        }
    }
}
</style>