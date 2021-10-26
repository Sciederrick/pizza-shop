<template>
    <article id="Contact" class="bg-white">
      <header class="home-text-default pb-16">
        <h2 class="text-4xl">CONTACT</h2>
        <hr class="bg-red-600 h-1 w-3/4 mx-auto my-4 md:w-2/3 md:my-6 lg:w-1/2"/>
      </header>
      <section class="w-full h-96 lg:w-5/6 lg:mx-auto bg-blue-100">
      <!-- Google Maps -->
        <figure>
        <!--
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
                &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
                &markers=color:red%7Clabel:C%7C40.718217,-73.998284
                &key=API KEY" alt="google maps static image showing shop location"/>
                -->
        </figure>
      </section>
      <div class="lg:w-5/6 lg:mx-auto lg:grid lg:grid-flow-col lg:mt-4">
        <section>
        <!-- Contact Form -->
            <form class="custom-page-placement">
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label"
                        for="fullname">Full Name *</label>
                    <input class="form-input" 
                        type="text" id="fullname" name="fullname"/>
                </div>
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="email">Email *</label>
                    <input class="form-input" 
                        type="email" id="email" name="email"/>
                </div>
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="phone">Phone *</label>
                    <input class="form-input" 
                        type="tel" id="phone" name="phone"/>
                </div>
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="subject">Subject *</label>
                    <input class="form-input" 
                        type="text" id="subject" name="subject"/>
                </div>
                <div class="contact-form-input-wrapper">
                    <label class="contact-form-label" 
                        for="message">Message *</label>
                    <textarea class="form-input -mb-2"
                        rows="5" cols="50" name="message" id="message"></textarea>
                </div>
                <button class="btn btn-blue"
                    type="submit">SEND MESSAGE</button>
            </form>
        </section>
        <section class="">
            <!-- Contact Info -->
            <div class="custom-page-placement">
                <div class="py-2">
                    <fa-icon class="text-gray-500" :icon="['fas','location-arrow']"/>&nbsp;&nbsp;Biashara St - Nairobi, Kenya
                </div>
                <div class="py-2">
                    <fa-icon class="text-gray-500" :icon="['fas','phone-alt']"/>&nbsp;&nbsp;+254&nbsp;743&nbsp;709&nbsp;788
                </div>
                <div class="py-2">
                    <fa-icon class="text-gray-500" :icon="['fas','clock']"/>&nbsp;&nbsp;<span>Mon - Sun<br/>&nbsp;&nbsp;&nbsp;&nbsp;10:00 - 22:00</span>
                </div>
            </div>
        </section>
      </div>
    </article>
</template>