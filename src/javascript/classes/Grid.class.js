import { TweenLite } from 'gsap'

class Grid {

  constructor(el) {
    this.gridLeft = document.querySelector('.js-grid-left')
    this.gridRight = document.querySelector('.js-grid-right')
  }

  animateGrid() {
    TweenMax.to(this.gridLeft, 0.3, {
      alpha: 0.01,
      scaleX: 0.5
    })
    TweenMax.to(this.gridRight, 0.1, {
      alpha: 0,
      scaleX: 0
    })
    TweenMax.set([this.gridLeft, this.gridRight], {
      clearProps:"all",
      delay: 0.3
    })
    TweenLite.to(this.gridLeft, 0.6, {
      alpha: 0.08,
      scaleX: 1,
      delay: 0.3
    })
    TweenLite.to(this.gridRight, 0.6, {
      alpha: 0.07,
      scaleX: 1,
      delay: 0.5
    })
  }
}

export default Grid
