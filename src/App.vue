<template>
  <HeaderSection />
  <router-view/>
  <FooterSection />
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
    components: {
        HeaderSection,
        FooterSection,
    },

}
</script>

<style lang="scss">
@import "@/styles/_global.scss";
</style>
