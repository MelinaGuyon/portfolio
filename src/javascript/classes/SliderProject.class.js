import { TweenLite } from 'gsap'

class SliderProject {

  constructor(index) {
    this.sliderProjects = document.querySelectorAll('.js-slider-project')
    this.index = index || 0

    this.prevButtons = document.querySelectorAll('.js-project-slider-prev')
    this.nextButtons = document.querySelectorAll('.js-project-slider-next')

    this.activeProject = this.sliderProjects[this.index]

    this.bind()
  }

  bind() {
    let that = this
    this.prevButtons.forEach(function(el){
      el.addEventListener('click', function(){
        that.handlePrevClick(that)
      })
    })
    this.nextButtons.forEach(function(el){
      el.addEventListener('click', function(){
        that.handleNextClick(that)
      })
    })
  }

  setActive() {
    STORAGE.gridClass.animateGrid()
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

  handlePrevClick(that) {
    if (that.index > 0) {
      that.index--
    } else {
      that.index = that.sliderProjects.length - 1
    }
    that.setActive()
  }

  handleNextClick() {
    if (this.index < this.sliderProjects.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
    this.setActive()
  }


}

export default SliderProject
