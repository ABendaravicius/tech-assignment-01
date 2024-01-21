<template>
    <header class="header">
        <router-link to="/">
            <div class="header__title">
                <div class="header__title-icon">
                    <font-awesome-icon icon="fa-solid fa-building-columns" />
                </div>
                <h1 class="header__title-text">Natural History Museum</h1>
            </div>
        </router-link>
        <nav class="header__nav">
            <router-link class="header__nav-link" to="/">Home</router-link>
            <router-link class="header__nav-link" to="/dinosaurs">Dinosaurs</router-link>
            <router-link class="header__nav-link" to="/ocean">Ocean</router-link>
            <router-link class="header__nav-link" to="/space">Space</router-link>
            <router-link class="header__nav-link" to="/wildlife">Wildlife</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderSection',
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';
.header {
    padding: 24px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    @include box-shadow;

    &__title {
        display: flex;
        align-items: center;
        color: $dark;

        &-icon {
            padding: 8px;
            margin-right: 10px;
            border: 2px solid $dark;
            border-radius: 25px;

            svg {
                display: block;
                height: 20px;
            }
        }

        &-text {
            font-size: 32px;
        }
    }

    &__nav {

        &-link {
            position: relative;
            padding: 8px 16px;
            font-size: 18px;
            color: $dark;
            transition: all ease 200ms;

            &:hover {
                color: orange;
            }

            &.router-link-active {
                color: orange;

                &::after {
                    content: '';
                    position: absolute;
                    width: calc(100% - 32px);
                    left: 16px;
                    bottom: -4px;
                    height: 2px;
                    background-color: gold;
                }
            }
        }
    }
}
</style>