<template>
    <form class="custom-page-placement">
        <div class="contact-form-input-wrapper">
            <label class="contact-form-label" 
                for="email">Email *</label>
            <input class="form-input" 
                type="email" id="email" name="email"/>
        </div>
        <div class="contact-form-input-wrapper">
            <label class="contact-form-label" 
                for="password">Password *</label>
            <input class="form-input" 
                type="password" id="password" name="password"/>
        </div>
        <div class="contact-form-input-wrapper">
            <label class="contact-form-label" 
                for="confirm-password">Confirm Password *</label>
            <input class="form-input" 
                type="password" id="confirm-password" name="confirm-password"/>
        </div>
        <div class="contact-form-input-wrapper">
            <input class="form-input" 
                type="checkbox" id="promotional-emails-subscription" name="promotional-emails-subscription"/>
            I agree to receiving commercial information at the given e-mail address (not obligatory)
        </div>
        <button class="btn btn-blue"
            type="submit">REGISTER</button>
    </form>
</template>