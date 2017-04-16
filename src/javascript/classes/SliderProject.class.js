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
    STORAGE.currentProjectIndex = Number(this.index)
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
    const title = this.activeProject.querySelector('.project__title')
    const desc = this.activeProject.querySelector('.project__header__desc')
    const date = desc.querySelector('.date')
    const techno = desc.querySelector('.techno')
    const text = desc.querySelector('.text')
    TweenLite.set(this.activeProject, {
      display: "block"
    })
    TweenLite.to(this.activeProject, 0.6, {
      autoAlpha: 1
    })
    TweenLite.from(title, 0.4, {
      alpha: 0,
      left: '20%',
      delay: 1
    })
    TweenLite.from(date, 0.6, {
      alpha: 0,
      y: 70,
      delay: 0.4
    })
    TweenLite.from(techno, 0.6, {
      alpha: 0,
      y: 70,
      delay: 0.6
    })
    TweenLite.from(text, 0.6, {
      alpha: 0,
      y: 70,
      delay: 0.8
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
