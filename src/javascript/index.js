import Vue from 'vue'

import Navigation from './classes/Navigation.class.js'
import VueBuilder from './classes/VueBuilder.class.js'
import Grid from './classes/Grid.class.js'

window.STORAGE = {}

window.onload = function () {
  new VueBuilder()
  new Grid()
  STORAGE.currentLabIndex = 0
  STORAGE.currentProjectIndex = 0
  STORAGE.vueBuilderClass.init()

  new Navigation()
}
