import { TweenLite } from 'gsap'

class SliderHome {

  constructor(index, type) {
    this.el = document.querySelector('.js-home-slider')
    this.sliderImages = this.el.querySelectorAll('.js-home-slider-img')
    this.sliderTitles = this.el.querySelectorAll('.js-home-slider-title')
    this.sliderDates = this.el.querySelectorAll('.js-home-slider-date')

    this.prevButton = this.el.querySelector('.js-home-slider-prev')
    this.nextButton = this.el.querySelector('.js-home-slider-next')
    this.index = index || 0
    this.actualType = type

    this.activeImage = this.sliderImages[this.index]
    this.activeTitle = this.sliderTitles[this.index]
    this.activeDate = this.sliderDates[this.index]

    this.bind()
  }

  bind() {
    let that = this
    this.prevButton.addEventListener('click', function(){
      that.handlePrevClick()
    })
    this.nextButton.addEventListener('click', function(){
      that.handleNextClick()
    })
  }

  setActive() {
    STORAGE.gridClass.animateGrid()
    this.doSliderHomeDesaparition()

    this.activeImage = this.sliderImages[this.index]
    this.activeTitle = this.sliderTitles[this.index]
    this.activeDate = this.sliderDates[this.index]

    let that = this
    setTimeout(function(){
      that.doSliderHomeAparition()
    }, 400)

    this.handleTypeChange()
  }

  doSliderHomeDesaparition() {
    TweenLite.to([this.activeImage, this.activeTitle, this.activeDate], 0.3, {
      autoAlpha: 0
    })
    TweenLite.set([this.activeImage, this.activeTitle, this.activeDate], {
      display: "none",
      delay: 0.3
    })
  }

  doSliderHomeAparition() {
    TweenLite.set([this.activeImage, this.activeTitle, this.activeDate], {
      display: "block"
    })
    TweenLite.to([this.activeImage], 0.6, {
      autoAlpha: 1
    })
    TweenLite.to([this.activeTitle, this.activeDate], 0.9, {
      autoAlpha: 1,
      delay: 0.2
    })
    TweenLite.from(this.activeTitle, 0.6, {
      x: -60,
      delay: 0.1
    })
    TweenLite.from(this.activeDate, 0.6, {
      x: 30,
      delay: 0.3
    })
  }

  handlePrevClick() {
    if (this.index > 0) {
      this.index--
    } else {
      this.index = this.sliderImages.length - 1
    }
    this.setActive()
  }

  handleNextClick() {
    if (this.index < this.sliderImages.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
    this.setActive()
  }

  handleTypeChange() {
    this.actualType = this.activeImage.getAttribute('data-type')
    if (this.actualType == 'project') {
      document.querySelector('.js-nav-lab').classList.remove('is-active')
      document.querySelector('.js-nav-project').classList.add('is-active')
      STORAGE.currentProjectIndex = Number(this.index)
    } else {
      document.querySelector('.js-nav-project').classList.remove('is-active')
      document.querySelector('.js-nav-lab').classList.add('is-active')
      STORAGE.currentLabIndex = Number(this.index - 3)
    }
  }

}

export default SliderHome
