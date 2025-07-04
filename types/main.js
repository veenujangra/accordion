import gsap from 'gsap';
import { each, map } from 'lodash';
import './style.css';
class Accordion {
    lists;
    accordionItems = [];
    tl = null;
    constructor() {
        this.lists = document.querySelectorAll('[data-accordion=list]');
        this.create();
    }
    create() {
        this.lists.forEach((list) => {
            const items = list.querySelectorAll('[data-accordion="item"]');
            const accordionItems = map(items, (item) => {
                const header = item.querySelector('[data-accordion="header"]');
                const body = item.querySelector('[data-accordion="body"]');
                return {
                    list,
                    header,
                    body,
                    status: true,
                };
            });
            this.accordionItems = [...this.accordionItems, ...accordionItems];
            this.setProperties(list);
        });
        // Attach click handlers to each accordion item
        each(this.accordionItems, (_item, index) => {
            this.handleClick(index);
        });
    }
    setProperties(list) {
        // Close all accordions initially
        this.resetAccordion(list);
        // Open the first accordion item of each list by default
        const listItems = this.accordionItems.filter((item) => item.list === list);
        this.accordionOpen(list, listItems[0].body, this.accordionItems.indexOf(listItems[0]));
    }
    handleClick(index) {
        const list = this.accordionItems[index].list;
        const header = this.accordionItems[index].header;
        const body = this.accordionItems[index].body;
        header.addEventListener('click', () => {
            const status = this.accordionItems[index].status;
            if (status === true) {
                this.accordionClose(body, index);
            }
            else {
                this.accordionOpen(list, body, index);
            }
        });
    }
    accordionOpen(list, body, index) {
        // console.log('accordionOpen', index, this.accordionItems)
        this.tl = gsap.timeline({
            onStart: () => {
                this.resetAccordion(list);
                this.accordionItems[index].status = true;
                this.accordionItems[index].header.setAttribute('aria-expanded', 'true');
            },
        });
        this.tl.fromTo(body, {
            height: 0,
        }, {
            height: 'auto',
            duration: 0.43,
            ease: 'power3.inOut',
        });
    }
    accordionClose(body, index) {
        this.tl = gsap.timeline({
            onStart: () => {
                this.accordionItems[index].status = false;
                this.accordionItems[index].header.setAttribute('aria-expanded', 'false');
            },
        });
        this.tl.to(body, {
            height: 0,
            duration: 0.4,
            ease: 'power3.inOut',
        });
    }
    resetAccordion(list) {
        const listItems = this.accordionItems.filter((item) => item.list === list);
        each(listItems, (item) => {
            if (item.status === true) {
                this.accordionClose(item.body, this.accordionItems.indexOf(item));
            }
        });
    }
    addEventListeners() { }
}
export default Accordion;
