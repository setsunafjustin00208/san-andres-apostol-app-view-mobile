<template>
    <div class="livestream-page">
        <div class="container is-fluid">
            <h1 class="title">Live Mass</h1>
                <figure class="image is-16by9">
                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                </figure>
            <div class="previous-streams">
                <h2 class="subtitle">Previous Streams</h2>
                <div class="streams-list">
                    <div class="stream-item" v-for="(stream, index) in limitedPreviousStreams" :key="index">
                        <figure class="image is-64x64">
                            <img :src="stream.thumbnail" alt="Stream Thumbnail">
                        </figure>
                        <div class="stream-info">
                            <h3 class="title is-6">{{ stream.title }}</h3>
                            <p class="description">{{ stream.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="reminder-box">
                <h3 class="reminder-title"><strong>REMINDER</strong></h3>
                <p class="reminder-description">
                    This live stream Mass is intended for the sick, home bound and for those who, due to other important reasons, could not go to Mass; or those who, due to their locations, do not have Churches to go to.<br><br>
                    Help our Parish Church survive many centuries! You can send your donation through the following accounts:<br><br>
                    <strong>GCash</strong><br>
                    Account Name: Teodulo Franco<br>
                    Account No.: 0995-1036-103<br><br>
                    <strong>BDO Peso Savings</strong><br>
                    Account Name: The Roman Catholic Archbishop<br>
                    Account No.: 0024 8041 0109<br><br>
                    <strong>BDO Dollar Savings</strong><br>
                    Account Name: The Roman Catholic Archbishop<br>
                    Account No.: 1024 8040 7140
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LivestreamPage',
    data() {
        return {
            previousStreams: [
                {
                    title: 'Sunday Mass - October 1, 2023',
                    thumbnail: 'https://img.youtube.com/vi/1/default.jpg',
                    description: 'Description for October 1, 2023'
                },
                {
                    title: 'Sunday Mass - September 24, 2023',
                    thumbnail: 'https://img.youtube.com/vi/2/default.jpg',
                    description: 'Description for September 24, 2023'
                },
                {
                    title: 'Sunday Mass - September 17, 2023',
                    thumbnail: 'https://img.youtube.com/vi/3/default.jpg',
                    description: 'Description for September 17, 2023'
                },
                {
                    title: 'Sunday Mass - September 10, 2023',
                    thumbnail: 'https://img.youtube.com/vi/4/default.jpg',
                    description: 'Description for September 10, 2023'
                },
                {
                    title: 'Sunday Mass - September 3, 2023',
                    thumbnail: 'https://img.youtube.com/vi/5/default.jpg',
                    description: 'Description for September 3, 2023'
                },
                {
                    title: 'Sunday Mass - August 27, 2023',
                    thumbnail: 'https://img.youtube.com/vi/6/default.jpg',
                    description: 'Description for August 27, 2023'
                },
                {
                    title: 'Sunday Mass - August 20, 2023',
                    thumbnail: 'https://img.youtube.com/vi/7/default.jpg',
                    description: 'Description for August 20, 2023'
                },
                {
                    title: 'Sunday Mass - August 13, 2023',
                    thumbnail: 'https://img.youtube.com/vi/8/default.jpg',
                    description: 'Description for August 13, 2023'
                },
                {
                    title: 'Sunday Mass - August 6, 2023',
                    thumbnail: 'https://img.youtube.com/vi/9/default.jpg',
                    description: 'Description for August 6, 2023'
                },
                {
                    title: 'Sunday Mass - July 30, 2023',
                    thumbnail: 'https://img.youtube.com/vi/10/default.jpg',
                    description: 'Description for July 30, 2023'
                }
            ]
        };
    },
    computed: {
        limitedPreviousStreams() {
            return this.previousStreams.slice(0, 5);
        }
    }
}
</script>

<style scoped>
.livestream-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
}

.subtitle {
    margin-top: 2rem;
    text-align: left;
}

.streams-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stream-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;
}

.image.is-64x64 {
    width: 64px;
    height: 64px;
}

.stream-info {
    flex-grow: 1;
}

.reminder-box {
    margin-top: 2rem;
    padding: .2rem;
    border-radius: 8px;
    text-align: left;
}

.reminder-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.reminder-description {
    font-size: 1rem;
    line-height: 1.5;
}

</style>
