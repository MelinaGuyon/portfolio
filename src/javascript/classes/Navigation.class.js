import { TweenLite } from 'gsap'

class Navigation {

  constructor(el) {
    this.el = document.querySelector('.js-nav')
    this.navigationItems = this.el.querySelectorAll('.js-nav-item')

    this.prevActiveSection
    this.activeSection = document.querySelector('#home')
    this.activeSectionName

    this.projectPointers

    this.bind(true)
    this.init()
  }

  init() {
    this.animateNav()
  }

  bind(firstTime) {
    this.projectPointers = document.querySelectorAll('.js-project-pointer')

    let that = this
    this.projectPointers.forEach(function(el) {
      el.addEventListener('click', function(e) {
        let el = this
        that.handleProjectClick(el)
      })
    })

    if (firstTime) {
      this.navigationItems.forEach(function(el) {
        el.addEventListener('click', function(e) {
          that.handleItemClick(e)
        })
      })
    }
  }

  animateNav() {
    TweenMax.from(this.navigationItems, 0.3, {
      scaleY: 0,
      delay:0.9
    })
  }

  animateSection() {
    let that = this
    TweenMax.to(this.prevActiveSection, 0.6, {
      alpha: 0,
      onComplete: function() {
        if (that.prevActiveSection != that.activeSection) {
          TweenMax.set(that.prevActiveSection, { display: 'none' })
        }
      }
    })
    TweenMax.to(this.activeSection, 0.6, {
      display: 'block',
      alpha: 1,
      delay: 0.6
    })
  }

  handleItemClick(e) {
    this.animateNav()
    STORAGE.gridClass.animateGrid()

    this.prevActiveSection = this.activeSection
    this.activeSectionName = e.target.getAttribute('id')
    this.callBuildView()
    this.handlePageChange()

    this.activeSection = document.querySelector(e.target.getAttribute('data-target'))

    this.animateSection()
  }

  handleProjectClick(el) {
    this.animateNav()
    STORAGE.gridClass.animateGrid()

    this.prevActiveSection = this.activeSection

    // Must be before callBuildView function
    if (el.getAttribute('data-type') == "project") {
      this.activeSectionName = '#project'
    } else {
      this.activeSectionName = '#lab'
    }

    const projectId = el.getAttribute('data-project-id')
    this.callBuildView(projectId)

    // Must be after callBuildView function
    if (el.getAttribute('data-type') == "project") {
      this.activeSection = document.querySelector('#project')
    } else {
      this.activeSection = document.querySelector('#lab')
    }

    this.animateSection()
  }

  handlePageChange() {
    if (this.activeSectionName == '#homeProject') {
      document.querySelector('.js-nav-lab').classList.remove('is-active')
      document.querySelector('.js-nav-project').classList.add('is-active')
      document.querySelector('.js-nav-about').classList.remove('is-active')
    }
    if (this.activeSectionName == '#homeLab') {
      document.querySelector('.js-nav-lab').classList.add('is-active')
      document.querySelector('.js-nav-project').classList.remove('is-active')
      document.querySelector('.js-nav-about').classList.remove('is-active')
    }
    if (this.activeSectionName == '#about') {
      document.querySelector('.js-nav-lab').classList.remove('is-active')
      document.querySelector('.js-nav-project').classList.remove('is-active')
      document.querySelector('.js-nav-about').classList.add('is-active')
    }
  }

  callBuildView(projectId) {
    if (this.activeSectionName == '#homeProject') {
      STORAGE.vueBuilderClass.initHome(0, 'project')
    } else if (this.activeSectionName == '#homeLab') {
      STORAGE.vueBuilderClass.initHome(3, 'lab')
    } else if (this.activeSectionName == '#about') {
      STORAGE.vueBuilderClass.initAbout()
    } else if (this.activeSectionName == '#project') {
      STORAGE.vueBuilderClass.initProject(projectId)
    } else if (this.activeSectionName == '#lab') {
      STORAGE.vueBuilderClass.initLab(projectId)
    }
    this.bind()
  }
}

export default Navigation
