import gsap from 'gsap'
import { each, map } from 'lodash'

interface AccordionItem {
  header: HTMLElement
  body: HTMLElement
  status: boolean
}

class Accordion {
  private elements: NodeListOf<HTMLElement>
  private accordionItems: AccordionItem[] = []
  private tl: gsap.core.Timeline | null = null

  constructor() {
    this.elements = document.querySelectorAll('[data-accordion=list]') as NodeListOf<HTMLElement>
    this.create()
  }

  create() {
    this.elements.forEach((element: HTMLElement) => {
      const items = element.querySelectorAll('[data-accordion="item"]')

      this.accordionItems = map(items, (item: Element): AccordionItem => {
        const header = item.querySelector('[data-accordion="header"]') as HTMLElement
        const body = item.querySelector('[data-accordion="body"]') as HTMLElement

        return {
          header,
          body,
          status: true,
        }
      })

      each(this.accordionItems, (_item: AccordionItem, index: number) => {
        this.handleClick(index)
      })
      this.setProperties()
    })
  }

  setProperties() {
    this.resetAccordion()
    this.accordionOpen(this.accordionItems[0].body, 0)
  }

  handleClick(index: number) {
    const header = this.accordionItems[index].header
    const body = this.accordionItems[index].body

    header.addEventListener('click', () => {
      const status = this.accordionItems[index].status
      if (status === true) {
        this.accordionClose(body, index)
      } else {
        this.accordionOpen(body, index)
      }
    })
  }

  accordionOpen(body: HTMLElement, index: number) {
    this.tl = gsap.timeline({
      onStart: () => {
        this.resetAccordion()
        this.accordionItems[index].status = true
        this.accordionItems[index].header.setAttribute('aria-expanded', 'true')
      },
    })

    this.tl.fromTo(
      body,
      {
        height: 0,
      },
      {
        height: 'auto',
        duration: 0.43,
        ease: 'power3.inOut',
      }
    )
  }

  accordionClose(body: HTMLElement, index: number) {
    this.tl = gsap.timeline({
      onStart: () => {
        this.accordionItems[index].status = false
        this.accordionItems[index].header.setAttribute('aria-expanded', 'false')
      },
    })

    this.tl.to(body, {
      height: 0,
      duration: 0.4,
      ease: 'power3.inOut',
    })
  }

  resetAccordion() {
    each(this.accordionItems, (item: AccordionItem) => {
      if (item.status === true) {
        this.accordionClose(item.body, this.accordionItems.indexOf(item))
      }
    })
  }

  addEventListeners() {}
}

export default Accordion
