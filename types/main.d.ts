import './style.css';
declare class Accordion {
    private lists;
    private accordionItems;
    private tl;
    constructor();
    create(): void;
    setProperties(list: HTMLElement): void;
    handleClick(index: number): void;
    accordionOpen(list: HTMLElement, body: HTMLElement, index: number): void;
    accordionClose(body: HTMLElement, index: number): void;
    resetAccordion(list: HTMLElement): void;
    addEventListeners(): void;
}
export default Accordion;
