import Vue from 'vue'

import Navigation from './classes/Navigation.class.js'
import VueBuilder from './classes/VueBuilder.class.js'

let vues

window.onload = function () {
  vues = new VueBuilder()
  vues.init()

  new Navigation()
}
