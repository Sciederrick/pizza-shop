import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import {
    faSpinner, 
    faLocationArrow, faPhoneAlt, faClock, faArrowAltCircleDown, faArrowAltCircleUp,
    faTimes, faAngleDown, faAngleRight, faCircle, faMapMarkerAlt, faCar, faCheckCircle, 
    faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faSpinner, faLocationArrow, faPhoneAlt, faClock, faArrowAltCircleDown,
    faArrowAltCircleUp, faTimes, faAngleDown, faAngleRight, faCircle, faMapMarkerAlt, 
    faCar, faCheckCircle, faPlusCircle, faQuestionCircle, faGoogle, faFacebook, faApple
    )

Vue.component('fa-icon', FontAwesomeIcon)