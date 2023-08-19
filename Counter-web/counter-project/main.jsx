
import React  from 'react'
import { createRoot} from 'react-dom/client'
import {App} from './src/App'


const rootElement = document.getElementById("app")
const root = createRoot(rootElement)
console.log(rootElement)
root.render( < App />)


