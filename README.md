# Accordion

The `Accordion` class provides a simple and customizable way to create accordion-style UI components using TypeScript and GSAP for animations.

## Features

- Expand and collapse accordion items with smooth animations.
- Supports multiple accordion lists on the same page.
- Fully customizable via HTML attributes and JavaScript options.

## Installation

1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project (if needed):
   ```bash
   npm run build
   ```

## Usage

### HTML Structure

Ensure your HTML contains the following structure for the accordion:

```html
<div data-accordion="list">
  <div data-accordion="item">
    <div data-accordion="header">Header 1</div>
    <div data-accordion="body">Content 1</div>
  </div>
  <div data-accordion="item">
    <div data-accordion="header">Header 2</div>
    <div data-accordion="body">Content 2</div>
  </div>
</div>
```

### JavaScript Initialization

Import and initialize the `Accordion` class in your JavaScript/TypeScript file:

```typescript
import Accordion from '@pixeto/Accordion'

new Accordion()
```

### Methods

The `Accordion` class provides the following methods:

- `create()`: Initializes the accordion items.
- `setProperties()`: Sets the default properties for the accordion.
- `handleClick(index: number)`: Handles click events for accordion headers.
- `accordionOpen(body: HTMLElement, index: number)`: Opens a specific accordion item.
- `accordionClose(body: HTMLElement, index: number)`: Closes a specific accordion item.
- `resetAccordion()`: Resets all accordion items to their closed state.
- `addEventListeners()`: Placeholder for adding custom event listeners.

## Development

To start the development server:

```bash
npm run dev
```

## Build

To build the project for production:

```bash
npm run build
```

## License

This project is licensed under the MIT License.
