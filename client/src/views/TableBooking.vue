<template>
  <div class="about">
    <hero class="h-72"/>
    <article class="custom-page-placement md:w-1/2 lg:w-2/5">
      <header class="py-2">
        <h1 class="text-4xl">Book a table</h1>
      </header>
      <section>
        <!-- Table Booking Form -->
        <form>
            <div class="table-booking-form-input-wrapper">
                <label class="table-booking-form-label"
                    for="restaurant">Restaurant</label>
                <select name="restaurant" 
                  id="restaurant" class="form-input">
                  <option>-- select a restaurant --</option>
                  <option>Biashara St, Nairobi</option>
                </select>
            </div>
            <div class="md:grid md:grid-flow-col md:gap-4">
              <div class="table-booking-form-input-wrapper">
                  <label class="table-booking-form-label" 
                      for="date">Date *</label>
                  <input class="form-input" 
                      type="date" id="date" name="date"/>
              </div>
              <div class="table-booking-form-input-wrapper">
                  <label class="table-booking-form-label" 
                      for="time">Time *</label>
                  <select name="time" 
                    id="time" class="form-input pb-4">
                    <option>-- select time --</option>
                    <option>1100hrs</option>
                    <option>1200hrs</option>
                    <option>1300hrs</option>
                    <option>1400hrs</option>
                    <option>1500hrs</option>
                    <option>1600hrs</option>
                    <option>1700hrs</option>
                    <option>1800hrs</option>
                    <option>1900hrs</option>
                  </select>
              </div>
            </div>
            <div class="table-booking-form-input-wrapper">
                <label class="table-booking-form-label" 
                    for="subject">People *</label>
                <select name="people" 
                  id="people" class="form-input">
                  <option>-- select number of people --</option>
                  <option v-for="i in 15" :key="i">
                    {{i}} <span v-if="i===1">person</span> 
                          <span v-else>people</span>
                  </option>
                </select>
            </div>
            <button class="btn btn-blue"
                type="submit">BOOK A TABLE</button>
        </form>
      </section>
    </article>
  </div>
</template>

<style scoped>
select, input {
  background-color: #fff;
}
</style>