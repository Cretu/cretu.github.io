import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme'
import { Tab, Tabs } from 'vue3-tabs-component'
import { HomeUnderline } from '@theojs/lumen'
import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'

import './styles.css'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
// import '@theojs/lumen/theme'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Tab', Tab)
        app.component('Tabs', Tabs)
        app.component('Home', HomeUnderline)
        app.component('Box', DocBox) 
        // app.component('Pill', DocPill) 
        // app.component('Links', DocLinks) 
        // app.component('BoxCube', DocBoxCube) 
    }
}