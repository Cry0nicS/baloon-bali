<script setup lang="ts">
const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({behavior: "smooth"});
    }
};
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="container relative py-24 sm:py-32">
            <div class="absolute inset-0 z-0">
                <NuxtImg
                    src="/assets/images/terrace.webp"
                    alt="Stunning Bali rice terraces at sunrise with morning mist"
                    class="h-full w-full object-cover"
                    sizes="sm:100vw md:100vw lg:100vw"
                    format="webp"
                    loading="eager" />
                <div class="absolute inset-0 bg-black/40"></div>
            </div>
            <div
                class="relative z-10 mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center text-white">
                <h1
                    class="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Discover Bali Your Way with a Personal Local Guide
                </h1>
                <p class="max-w-[700px] text-lg sm:text-xl">
                    Tailor-made itineraries or ready-to-go tours, starting right from your hotel in
                    Ubud.
                </p>
                <p class="max-w-[700px]">
                    Experience Bali like never before. Hire a trusted local driver-guide for a full
                    day of personalized exploration, or choose one of our expertly crafted 8-hour or
                    12-hour tour packages to see Bali's most enchanting attractions.
                </p>
                <Button
                    size="lg"
                    @click="scrollToBooking"
                    class="bg-white text-black hover:bg-gray-200">
                    Book Your Bali Adventure
                </Button>
            </div>
        </section>

        <!-- Social Proof -->
        <section class="container py-8 text-center">
            <h3 class="mb-4 text-2xl font-semibold">Trusted By Travelers Worldwide</h3>
            <div class="mb-4 flex flex-wrap justify-center gap-4">
                <Badge variant="secondary">Over 500 successful tours since 2015</Badge>
                <Badge variant="secondary">Highly rated on TripAdvisor and Google Reviews</Badge>
                <Badge variant="secondary">4.9/5 Average Rating from 200+ Guests</Badge>
            </div>
            <p class="italic">
                "Our Bali experience was unforgettable thanks to this guide's insider knowledge." –
                Rebecca G.
            </p>
        </section>

        <!-- Benefits -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">
                Why Choose Our Bali Guide Services?
            </h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/guide.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>Local Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Get insider tips and local stories you won't find in guidebooks.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/car.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>Door-to-Door Convenience</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Pickup and drop-off directly at your Ubud hotel for a stress-free day.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/travel.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>Flexible & Personalized</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Create your own itinerary or trust our recommended routes to maximize
                            your time.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/tradition.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[3/2] w-full rounded-t-lg object-cover"
                            width="646"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>Cultural Immersion</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Visit hidden temples, lush rice terraces, and authentic Balinese
                            villages off the tourist trail.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <!-- How It Works -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">How It Works</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                    </div>
                    <h4 class="mb-2 font-semibold">Select Your Experience</h4>
                    <p>Pick the personalized tour or one of our 8-hour or 12-hour itineraries.</p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                    </div>
                    <h4 class="mb-2 font-semibold">Book Online</h4>
                    <p>
                        Choose your date, confirm pickup location, and complete a quick, secure
                        booking form.
                    </p>
                </div>
                <div class="flex flex-col items-center text-center">
                    <div
                        class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                    </div>
                    <h4 class="mb-2 font-semibold">Explore & Enjoy</h4>
                    <p>
                        Our local guide picks you up at your Ubud hotel. Relax and discover Bali's
                        wonders at your pace.
                    </p>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">Our Offerings</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/freestyle.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[1/1] w-full rounded-t-lg object-cover"
                            width="400"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>Personalized Full-Day Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="mb-4">
                            Hire our experienced local guide and driver for a day. You choose where
                            to go—whether it's temples, waterfalls, beaches, or cultural sites.
                            Perfect for travelers who know exactly what they want or who prefer
                            spontaneous exploration.
                        </p>
                        <ul class="list-inside list-disc">
                            <li>Full-day (up to 10 hours) with flexible start time</li>
                            <li>Private car with air-conditioning</li>
                            <li>Completely customizable itinerary</li>
                            <li>Guidance in English</li>
                            <li>Pickup & drop-off at your Ubud hotel</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/full-day.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[1/1] w-full rounded-t-lg object-cover"
                            width="400"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>8-Hour Pre-Set Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="mb-4">
                            A carefully curated 8-hour journey through Bali's iconic landmarks,
                            ideal for those with limited time who still want a broad taste of the
                            island.
                        </p>
                        <ul class="list-inside list-disc">
                            <li>Tegalalang Rice Terrace</li>
                            <li>Tirta Empul Water Temple</li>
                            <li>Tegenungan Waterfall</li>
                            <li>Local Lunch Stop (optional)</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <NuxtImg
                            src="/assets/images/sunset.webp"
                            alt="Local guide"
                            class="mb-4 aspect-[1/1] w-full rounded-t-lg object-cover"
                            width="400"
                            sizes="(min-width: 1024px) 230px, (min-width: 768px) 413px, 646px"
                            loading="lazy" />
                        <CardTitle>12-Hour Pre-Set Tour</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="mb-4">
                            A comprehensive 12-hour exploration covering Bali's most renowned spots
                            as well as hidden gems. Perfect for travelers who want to see as much as
                            possible in one day.
                        </p>
                        <ul class="list-inside list-disc">
                            <li>Early morning start to catch sunrise at a viewpoint</li>
                            <li>Besakih Temple (Mother Temple)</li>
                            <li>Visit to a traditional Balinese home compound</li>
                            <li>Ulun Danu Beratan Temple</li>
                            <li>Jatiluwih Rice Terraces (UNESCO site)</li>
                            <li>Sunset at Tanah Lot Temple (if timing allows)</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">What Our Guests Are Saying</h3>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Sarah L. (USA)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            "Our guide was phenomenal. He took us to hidden waterfalls I'd never
                            heard of and gave us the cultural context behind everything we saw. Best
                            day in Bali!"
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Mark T. (UK)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            "The 8-hour tour was perfect. We saw temples, rice terraces, and even
                            had time for a traditional dance performance. The convenience of pickup
                            and drop-off made it so easy."
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Andrea & Carlos (Spain)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            "We wanted a custom itinerary focusing on local art and crafts. Our
                            guide knew exactly where to go. We ended up visiting artisan workshops
                            and chatting with the artists themselves. Unforgettable!"
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <!-- Call to Action -->
        <section
            id="booking"
            class="container py-16 text-center">
            <h3 class="mb-4 text-2xl font-semibold">Ready to Explore Bali?</h3>
            <p class="mx-auto mb-8 max-w-2xl">
                Secure your spot today. Our guide's availability is limited, and these private
                experiences fill up fast. Book now to ensure your Bali adventure is everything
                you've dreamed.
            </p>
            <Button size="lg">Book Your Tour Now</Button>
        </section>

        <!-- FAQs -->
        <section class="container py-16">
            <h3 class="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h3>
            <Accordion
                type="single"
                collapsible
                class="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What's included in the tour price?</AccordionTrigger>
                    <AccordionContent>
                        The price includes your private guide, transportation in an air-conditioned
                        car, fuel, parking fees, and pickup/drop-off at your Ubud hotel. Meals,
                        entrance fees, and personal expenses are not included unless otherwise
                        stated.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I customize my personalized tour?</AccordionTrigger>
                    <AccordionContent>
                        After booking, you'll receive an email prompting you to share your preferred
                        destinations or experiences. Our guide will then finalize the itinerary with
                        you.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I cancel or reschedule my tour?</AccordionTrigger>
                    <AccordionContent>
                        Yes. We offer free cancellation up to 48 hours before the scheduled tour.
                        You can also reschedule subject to availability. Please refer to our
                        detailed cancellation policy on the booking page.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Are the tours suitable for families with children?
                    </AccordionTrigger>
                    <AccordionContent>
                        Absolutely. Our guide is experienced with guests of all ages and can tailor
                        the itinerary to be child-friendly.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What should I bring on the tour?</AccordionTrigger>
                    <AccordionContent>
                        Comfortable clothing, sunscreen, a hat, and a camera are recommended. If you
                        plan on visiting temples, bring clothing that covers your knees and
                        shoulders.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    </div>
</template>
