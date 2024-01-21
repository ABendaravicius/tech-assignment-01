<template>
    <div class="highlights__card" :class="{ partner: highlight.type === 'partner' }">
        <div class="highlights__card-icon">
            <div class="highlights__card-icon-wrapper border" v-if="type == 'dino'">
                <svg width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16"
                    style="enable-background:new 0 0 16 16;" xml:space="preserve">
                    <path d="M12.8,12.2c0,0.4,0,0.9,0,1.3c0,0.6-0.3,0.9-0.9,0.9c-0.4,0-0.9,0-1.3,0c-0.7,0-0.9-0.3-1-0.9c0-0.1,0-0.2,0-0.4 c-0.6,0-1.1,0.1-1.7,0.1c-0.4-0.9-1.2-1-2-1.1c-0.6-0.1-1.1-0.2-1.7-0.3c-0.6-0.1-0.9-0.3-1-1c-0.1-0.3-0.2-0.5-0.5-0.5
	c-0.3,0-0.4,0.3-0.3,0.6c0.1,0.9,0.7,1.5,1.7,1.6c0.8,0.1,1.6,0.3,2.4,0.4c0.5,0.1,0.7,0.3,0.7,0.7c0,0.4-0.3,0.6-0.8,0.6
	c-1.3,0-2.6,0-3.9-0.1c-1.1-0.1-1.9-0.8-2.3-1.8c-0.4-1.1-0.3-2.1,0.4-3c1-1,2-2,3.1-2.8c2.1-1.6,4.8-1.5,6.9,0.1
	c0.4,0.3,0.8,0.6,1.2,0.9C12.2,8,12.6,8.1,13,7.9c0.4-0.2,0.6-0.6,0.6-1c0-0.3,0-0.5,0-0.8c-0.1-0.7-0.8-1.2-1.5-1.3
	c-0.5,0-1.1,0-1.6,0C9.6,4.7,9.1,4,9.3,3.2C9.4,3,9.5,2.8,9.7,2.7C10,2.4,10.2,2.2,10.5,2c0.2-0.2,0.5-0.4,0.8-0.4
	c2.5,0,4.6,2,4.7,4.6c0,1,0,1.9-0.3,2.9c-0.5,1.3-1.3,2.2-2.5,2.9c-0.1,0-0.2,0.1-0.2,0.1C12.9,12.1,12.9,12.2,12.8,12.2z M12,2.8
	c0-0.3-0.1-0.4-0.4-0.4c-0.3,0-0.4,0.1-0.4,0.4c0,0.2,0.1,0.4,0.4,0.4C11.9,3.2,12,3.1,12,2.8z" />
                </svg>
            </div>
            <div class="highlights__card-icon-wrapper stacked" v-else-if="type == 'ocean'">
                <font-awesome-icon icon="fa-solid fa-fish-fins" />
                <font-awesome-icon icon="fa-solid fa-water" />
            </div>
            <div class="highlights__card-icon-wrapper" v-else-if="type == 'space'">
                <font-awesome-icon icon="fa-solid fa-star" />
            </div>
            <div class="highlights__card-icon-wrapper" v-else-if="type == 'wild'">
                <font-awesome-icon icon="fa-solid fa-hippo" />
            </div>
        </div>
        <!-- Display the available information for the highlight -->
        <h2 class="highlights__card-title">{{ highlight.name }}</h2>
        <span class="highlights__card-date">{{ newsDate }}</span>
        <div class="highlights__card-img-wrapper">
            <img class="highlights__card-img" :src="highlight.image" />
            <button @click="refreshImage(highlight)" class="highlights__card-img-btn">
                <font-awesome-icon icon="fa-solid fa-rotate-right" />
                Refresh image
            </button>
        </div>
        <p class="highlights__card-description">{{ highlight.description ? highlight.description : highlight.info }}</p>

        <div class="highlights__card-extras" v-if="Object.values(highlight).length > 5">
            <!-- For any additional details cards may have -->
            <div class="highlights__card-extras-details" v-if="highlight.period || highlight.location || highlight.species || highlight.endangered_status">
                <p class="highlights__card-extras-details" v-if="highlight.period">
                    <strong>Period:</strong>{{ highlight.period }}
                </p>
                <p class="highlights__card-extras-details" v-if="highlight.location">
                    <strong>Location:</strong>{{ highlight.location }}
                </p>
                <p class="highlights__card-extras-details" v-if="highlight.species">
                    <strong>Species:</strong>{{ highlight.species }}
                </p>
                <p class="highlights__card-extras-details" v-if="highlight.endangered_status">
                    <strong>Status:</strong>{{ highlight.endangered_status }}
                </p>
            </div>
            <!-- For any news that cards may have -->
            <div class="highlights__card-extras-news" v-if="highlight.news">
                <h3 class="highlights__card-extras-news-title">News_</h3>
                <div class="highlights__card-extras-news-card">
                    <h4 class="highlights__card-extras-news-card-title">
                        {{ highlight.news.title }}
                    </h4>
                    <span class="highlights__card-extras-news-card-date" v-if="highlight.news.date">
                        {{ new Date(highlight.news.date).toLocaleString('en-gb', {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        }) }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MuseumHighlight',
    components: {

    },
    mixins: [
    ],
    props: {
        highlight: Object,
        type: String,
    },
    data() {
        return {

        };
    },
    computed: {
        newsDate() {
            // Highlight's news item date
            return new Date(this.highlight.date ? this.highlight.date : this.highlight.createdAt)
                .toLocaleString('en-gb', {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
        },
    },
    methods: {
        async refreshImage (highlight) {
            highlight.image = await this.getNewImage();
        },
        async getNewImage () {
            let url = 'https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                
            return Promise.resolve(url);
        }
    },
    created() {

    },
};
</script>

<style lang="scss" scoped></style>
