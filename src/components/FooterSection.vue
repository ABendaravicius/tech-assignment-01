<template>
    <footer class="footer">
        <div class="container">
            <router-link to="/">
                <div class="footer__title">
                    <div class="footer__title-icon">
                        <font-awesome-icon icon="fa-solid fa-building-columns" />
                    </div>
                    <h1 class="footer__title-text">Natural History Museum</h1>
                </div>
            </router-link>
            <nav class="footer__nav">
                <router-link class="footer__nav-link" to="/">Home</router-link>
                <div class="footer__nav-wrapper">
                    <router-link class="footer__nav-link" to="/dinosaurs">Dinosaurs</router-link>
                    <router-link class="footer__nav-link" to="/ocean">Ocean</router-link>
                    <router-link class="footer__nav-link" to="/space">Space</router-link>
                    <router-link class="footer__nav-link" to="/wildlife">Wildlife</router-link>
                </div>
            </nav>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped lang="scss">
@import '@/styles/variables';
.footer {
    margin-top: 48px;
    padding: 48px 0;
    flex-shrink: 0;
    background-color: $dark;
    color: #FFF;

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    &__title {
        display: flex;
        align-items: center;
        color: #FFF;

        &-icon {
            padding: 8px;
            margin-right: 10px;
            border: 2px solid #FFF;
            border-radius: 25px;

            svg {
                display: block;
                height: 20px;
            }
        }

        &-text {
            font-size: 20px;
            max-width: 180px;
        }
    }

    &__nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &-wrapper {
            display: grid;
        }

        &-link {
            color: #FFF;
            transition: all ease 200ms;

            &+a {
                margin-top: 12px;
            }

            &:hover {
                color: gold;
            }

            &.router-link-active {
                color: gold;
            }
        }
    }
}
</style>