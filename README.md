# MODAL-DILA PACKAGE

This is a modal/popup component to use in yout applications

[**Live Demo**](https://dila93.github.io/modal-dila/)

## Installation:

```bash
npm install moda-dila --save-dev
```

or

```bash
yarn add -D modal-dila
```

## Usage :

Add `Modal` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Modal } from 'modal-dila'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <Moldal />
        </div>
    </React.StrictMode>,
)

```