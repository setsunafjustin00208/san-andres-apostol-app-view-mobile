<template>
    <div class="container">
        <div class="columns is-multiline p-2">
            <div class="column columns is-multiline box">
                <div class="event-container">
                    <h3 class="title is-4">Events And Activities</h3>
                    <div class="event-item-container" v-for="event in events" :key="event.id">
                        <a href="#">
                            <img :src="event.thumbnail" alt="Event Thumbnail" class="event-thumbnail">
                            <h4 class="title is-6">{{ event.title }}</h4>
                            <p class="subtitle is-6 event-details">{{ event.description }}</p>
                            <p class="subtitle is-6">Organized by {{ event.organizer }} on {{ event.date }}</p>
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
    name: 'EventComponent',
    data() {
        return {
            events: [
                {
                    id: 1,
                    title: 'Sample Event 1',
                    organizer: 'Organizer 1',
                    description: 'This is a description of the first event.',
                    date: '2023-11-01',
                    thumbnail: 'https://picsum.photos/600/300?random=7'
                },
                {
                    id: 2,
                    title: 'Sample Event 2',
                    organizer: 'Organizer 2',
                    description: 'This is a description of the second event.',
                    date: '2023-11-02',
                    thumbnail: 'https://picsum.photos/600/300?random=8'
                },
                {
                    id: 3,
                    title: 'Sample Event 3',
                    organizer: 'Organizer 3',
                    description: 'This is a description of the third event.',
                    date: '2023-11-03',
                    thumbnail: 'https://picsum.photos/600/300?random=9'
                },
                {
                    id: 4,
                    title: 'Sample Event 4',
                    organizer: 'Organizer 4',
                    description: 'This is a description of the fourth event.',
                    date: '2023-11-04',
                    thumbnail: 'https://picsum.photos/600/300?random=10'
                }
                // Add more events as needed
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
.event-container {
    
    .event-item-container {
       margin-bottom: 0px;

       .event-details {
           margin-bottom: 0px;
       }

       .event-thumbnail {
           width: 100%;
           height: auto;
           margin-bottom: 10px;
       }
    }
}
</style>

