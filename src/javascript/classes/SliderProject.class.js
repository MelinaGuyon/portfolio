import { TweenLite } from 'gsap'
import Grid from './Grid.class.js'

class SliderProject {

  constructor(index) {
    this.sliderProjects = document.querySelectorAll('.js-slider-project')
    this.index = index || 0

    this.activeProject = this.sliderProjects[this.index]
    console.log(this.activeProject)
    this.grid = new Grid()

    this.bind()
  }

  bind() {
  }

  setActive() {
    this.grid.animateGrid()
    this.doSliderProjectDesaparition()

    this.activeProject = this.sliderProjects[this.index]

    let that = this
    setTimeout(function(){
      that.doSliderProjectAparition()
    }, 400)
  }

  doSliderProjectDesaparition() {
    TweenLite.to(this.activeProject, 0.3, {
      autoAlpha: 0
    })
    TweenLite.set(this.activeProject, {
      display: "none",
      delay: 0.3
    })
  }

  doSliderProjectAparition() {
    TweenLite.set(this.activeProject, {
      display: "block"
    })
    TweenLite.to(this.activeProject, 0.6, {
      autoAlpha: 1
    })
  }


}

export default SliderProject
