import { TweenLite } from 'gsap'

class SliderLab {

  constructor(index) {
    this.sliderLabs = document.querySelectorAll('.js-slider-lab')
    this.index = index || 0

    this.prevButtons = document.querySelectorAll('.js-lab-slider-prev')
    this.nextButtons = document.querySelectorAll('.js-lab-slider-next')

    this.activeLab = this.sliderLabs[this.index]

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
    STORAGE.currentLabIndex = Number(this.index)
    this.doSliderLabDesaparition()

    this.activeLab.querySelector('video').pause()
    this.activeLab = this.sliderLabs[this.index]
    this.activeLab.querySelector('video').play()


    let that = this
    setTimeout(function(){
      that.doSliderLabAparition()
    }, 400)
  }

  doSliderLabDesaparition() {
    TweenLite.to(this.activeLab, 0.3, {
      autoAlpha: 0
    })
    TweenLite.set(this.activeLab, {
      display: "none",
      delay: 0.3
    })
  }

  doSliderLabAparition() {
    const desc = this.activeLab.querySelector('.desc')
    const title = desc.querySelector('.title')
    const date = desc.querySelector('.date')
    const techno = desc.querySelector('.techno')
    TweenLite.set(this.activeLab, {
      display: "block"
    })
    TweenLite.to(this.activeLab, 0.6, {
      autoAlpha: 1
    })
    TweenLite.from(title, 0.4, {
      alpha: 0,
      y: -20,
      delay: 0.6
    })
    TweenLite.from(date, 0.4, {
      alpha: 0,
      y: 20,
      delay: 0.9
    })
    TweenLite.from(techno, 0.4, {
      alpha: 0,
      y: 20,
      delay: 1.1
    })
  }

  handlePrevClick(that) {
    if (that.index > 0) {
      that.index--
    } else {
      that.index = that.sliderLabs.length - 1
    }
    that.setActive()
  }

  handleNextClick() {
    if (this.index < this.sliderLabs.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
    this.setActive()
  }


}

export default SliderLab
