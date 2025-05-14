export default class Accordion {
    private elements;
    private accordionItems;
    private tl;
    constructor();
    create(): void;
    setProperties(): void;
    handleClick(index: number): void;
    accordionOpen(body: HTMLElement, index: number): void;
    accordionClose(body: HTMLElement, index: number): void;
    resetAccordion(): void;
    addEventListeners(): void;
}
