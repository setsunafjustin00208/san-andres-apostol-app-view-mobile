<template>
    <div class="container is-fluid pt-6">
        <div class="columns is-multiline">
            <div class="column columns is-multiline box">
                <div class="image-container">
                    <figure class="image is-128x128">
                        <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
                      </figure>
                </div>
                <div class="article-container mt-3 pt-6" v-for="article in articles" :key="article.id">
                    <div class="article-item-container">
                        <a href="#">
                            <h4 class="title is-4">{{ article.title }}</h4>
                            <p class="subtitle is-6">{{ article.summary }}</p>
                            <p class="subtitle is-6">Published by {{ article.author }} on {{ article.publishedAt }}</p>
                        </a>
                        <hr>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsArticlesListingComponent',
    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: 'Sample Article 1',
                    author: 'Author 1',
                    summary: 'This is a summary of the first article.',
                    publishedAt: '2023-10-01'
                },
                {
                    id: 2,
                    title: 'Sample Article 2',
                    author: 'Author 2',
                    summary: 'This is a summary of the second article.',
                    publishedAt: '2023-10-02'
                },
                // Add more articles as needed
            ]
        };
    }
};
</script>

<style scoped>
.container {
    margin-top: 20px;
}
.box {
    border-radius: 0% !important;
    box-shadow: none !important;
    border: 0.1px solid #dbdbdb !important;
}
.image-container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}

.background-image {
    background-image: url('https://picsum.photos/600/300');
    background-size: cover;
    background-position: center;
    opacity: 0.8;
   
}

</style>
