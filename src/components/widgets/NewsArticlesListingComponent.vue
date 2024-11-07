<template>
    <div class="container pt-6">
        <div class="columns is-multiline p-2">
            <div class="column columns is-multiline box">
                <div class="image-container mb-2">
                    <figure class="image is-128x128 mb-3">
                        <img src="https://saapcandaba.org/wp-content/uploads/2024/10/Untitled-design2-1024x1024.png" />
                      </figure>
                </div>
                <div class="article-container">
                    <h3 class="title is-4">News And Articles</h3>
                    <div class="article-item-container" v-for="article in articles" :key="article.id">
                        <a href="#">
                            <h4 class="title is-6">{{ article.title }}</h4>
                            <p class="subtitle is-6 article-details">{{ article.summary }}</p>
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
                {
                    id: 3,
                    title: 'Sample Article 3',
                    author: 'Author 3',
                    summary: 'This is a summary of the third article.',
                    publishedAt: '2023-10-03'
                },
                {
                    id: 4,
                    title: 'Sample Article 4',
                    author: 'Author 4',
                    summary: 'This is a summary of the fourth article.',
                    publishedAt: '2023-10-04'
                }
                // Add more articles as needed
            ]
        };
    }
};
</script>

<style scoped>
.container {
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    padding: 1%;
}
.box {
    border-radius: 0% !important;
    box-shadow: none !important;
    transition: border 0.3s ease-in-out;
}
.image-container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;

    .image {
        height: 100%;
        width: 100%;
    }
}

.background-image {
    background-image: url('https://picsum.photos/600/300');
    background-size: cover;
    background-position: center;
    opacity: 0.8;
   
}
.article-container {
    
    .article-item-container {
       margin-bottom: 0px;

       .article-details {
           margin-bottom: 0px;
       }
    }
}

</style>
