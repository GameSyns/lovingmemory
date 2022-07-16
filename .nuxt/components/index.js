export { default as CopyButton } from '../..\\components\\CopyButton.vue'
export { default as ListItem } from '../..\\components\\ListItem.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Nav } from '../..\\components\\Nav.vue'

export const LazyCopyButton = import('../..\\components\\CopyButton.vue' /* webpackChunkName: "components_CopyButton" */).then(c => c.default || c)
export const LazyListItem = import('../..\\components\\ListItem.vue' /* webpackChunkName: "components_ListItem" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components_Nav" */).then(c => c.default || c)
