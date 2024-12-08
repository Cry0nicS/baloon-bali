<script setup lang="ts">
interface Review {
    author_name: string;
    profile_photo_url: string;
    rating: number;
    text: string;
    time: number;
}

const reviews = ref<Review[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const fetchReviews = async () => {
    try {
        // In a real-world scenario, this API call should be made from a backend service
        // to protect your API key. This is just for demonstration purposes.
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJFyY2-3Y_0i0RQSaJqTOhl1I&fields=reviews`
        );
        const data = await response.json();

        if (data.status === "OK") {
            reviews.value = data.result.reviews
                .filter((review: Review) => review.rating > 3)
                .sort((a: Review, b: Review) => b.time - a.time)
                .slice(0, 3);
        } else {
            throw new Error("Failed to fetch reviews");
        }
        // eslint-disable-next-line unused-imports/no-unused-vars
    } catch (e) {
        error.value = "Failed to load reviews. Please try again later.";
    } finally {
        loading.value = false;
    }
};

const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};

onMounted(fetchReviews);
</script>

<template>
    <div>
        <h3 class="mb-8 text-center text-2xl font-semibold">What Our Guests Are Saying</h3>
        <div
            v-if="loading"
            class="text-center">
            <p class="text-muted-foreground">Loading reviews...</p>
        </div>
        <div
            v-else-if="error"
            class="text-center">
            <p class="text-destructive">{{ error }}</p>
        </div>
        <div
            v-else
            class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card
                v-for="review in reviews"
                :key="review.time">
                <CardHeader>
                    <CardTitle class="flex items-center">
                        <img
                            :src="review.profile_photo_url"
                            :alt="review.author_name"
                            class="mr-2 h-8 w-8 rounded-full" />
                        {{ review.author_name }}
                    </CardTitle>
                    <div class="flex items-center">
                        <Icon
                            name="lucide:star"
                            v-for="i in Math.floor(review.rating)"
                            :key="i"
                            class="size-4 fill-current text-yellow-400" />
                        <Icon
                            name="lucide:star"
                            v-for="i in 5 - Math.floor(review.rating)"
                            :key="i + 5"
                            class="size-4 fill-current text-gray-300" />
                        <span class="ml-2 text-sm text-muted-foreground">
                            {{ formatDate(review.time) }}
                        </span>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>{{ review.text }}</p>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
