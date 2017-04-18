import { TweenLite } from 'gsap'

class SliderHome {

  constructor(index, type) {
    STORAGE.sliderHomeClass = this
    this.el = document.querySelector('.js-home-slider')
    this.sliderMedias = this.el.querySelectorAll('.js-home-slider-media')
    this.sliderTitles = this.el.querySelectorAll('.js-home-slider-title')
    this.sliderDates = this.el.querySelectorAll('.js-home-slider-date')

    this.prevButton = this.el.querySelector('.js-home-slider-prev')
    this.nextButton = this.el.querySelector('.js-home-slider-next')
    this.index = index || 0
    this.actualType = type

    this.activeMedia = this.sliderMedias[this.index]
    this.activeTitle = this.sliderTitles[this.index]
    this.activeDate = this.sliderDates[this.index]

    this.bind()
  }

  bind() {
    let that = this
    this.prevButton.addEventListener('click', that.handleClick)
    this.nextButton.addEventListener('click', that.handleClick)
    window.addEventListener('keydown', that.handleClick)
    window.addEventListener('resize', that.handleResize)
  }

  unbind() {
    let that = this
    window.removeEventListener('keydown', that.handleClick)
    window.removeEventListener('resize', that.handleResize)
  }

  setActive() {
    STORAGE.gridClass.animateGrid()
    this.doSliderHomeDesaparition()

    if (this.activeMedia.classList.contains('is-video'))
      this.activeMedia.pause()

    this.activeMedia = this.sliderMedias[this.index]
    this.activeTitle = this.sliderTitles[this.index]
    this.activeDate = this.sliderDates[this.index]

    if (this.activeMedia.classList.contains('is-video'))
      this.activeMedia.play()

    let that = this
    setTimeout(function(){
      that.doSliderHomeAparition()
      STORAGE.resizerClass.resizeHomeMedias(that.activeMedia)
    }, 400)

    this.handleTypeChange()
  }

  doSliderHomeDesaparition() {
    TweenLite.to([this.activeMedia, this.activeTitle, this.activeDate], 0.3, {
      autoAlpha: 0
    })
    TweenLite.set([this.activeMedia, this.activeTitle, this.activeDate], {
      display: "none",
      delay: 0.3
    })
  }

  doSliderHomeAparition() {
    TweenLite.set([this.activeMedia, this.activeTitle, this.activeDate], {
      display: "block"
    })
    TweenLite.to([this.activeMedia], 0.6, {
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
      this.index = this.sliderMedias.length - 1
    }
    this.setActive()
  }

  handleNextClick() {
    if (this.index < this.sliderMedias.length - 1) {
      this.index++
    } else {
      this.index = 0
    }
    this.setActive()
  }

  handleClick(e) {
    if (e.keyCode && ( e.keyCode != 37 && e.keyCode != 39 ) ) {
      return
    }
    if (e.keyCode && e.keyCode == 37) {
      STORAGE.sliderHomeClass.handlePrevClick()
    } else if (e.keyCode && e.keyCode == 39) {
      STORAGE.sliderHomeClass.handleNextClick()
    } else if (this.classList.contains('js-project-slider-prev')) {
      STORAGE.sliderHomeClass.handlePrevClick()
    } else {
      STORAGE.sliderHomeClass.handleNextClick()
    }
  }

  handleTypeChange() {
    this.actualType = this.activeMedia.getAttribute('data-type')
    if (this.actualType == 'project') {
      document.querySelector('.js-nav-lab').classList.remove('is-active')
      document.querySelector('.js-nav-project').classList.add('is-active')
      STORAGE.currentProjectIndex = Number(this.index)
    } else {
      document.querySelector('.js-nav-project').classList.remove('is-active')
      document.querySelector('.js-nav-lab').classList.add('is-active')
      STORAGE.currentLabIndex = Number(this.index - 7)
    }
  }

  handleResize() {
    setTimeout(function(){
      STORAGE.resizerClass.resizeHomeMedias(STORAGE.sliderHomeClass.activeMedia)
    }, 50)

  }

}

export default SliderHome
