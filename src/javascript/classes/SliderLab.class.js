import { TweenLite } from 'gsap'
import Grid from './Grid.class.js'

class SliderLab {

  constructor(index) {
    this.sliderLabs = document.querySelectorAll('.js-slider-lab')
    this.index = index || 0

    this.activeLab = this.sliderLabs[this.index]

    this.grid = new Grid()

    this.bind()
  }

  bind() {
  }

  setActive() {
    this.grid.animateGrid()
    this.doSliderLabDesaparition()

    this.activeLab = this.sliderLabs[this.index]

    console.log(this.activeLab);

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
    TweenLite.set(this.activeLab, {
      display: "block"
    })
    TweenLite.to(this.activeLab, 0.6, {
      autoAlpha: 1
    })
  }


}

export default SliderLab
