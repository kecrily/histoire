<p align="center">
  <img src="./logo.svg" alt="Histoire logo" width="256px" height="256px">
</p>

<br>

# Histoire

> Fast and beautiful interactive component playgrounds

⚡️ Lightning fast development and instant HMR thanks to [Vite](http://vitejs.dev)  
👓 Build and visually test your components in isolation  
📚 Document your components with stories and variants  
📝 Generate source code examples automatically  
🎨 Beautiful and customizable interface  

![screenshot](./screenshot.png)

*(work-in-progress screenshot)*

[Documentation](https://histoire.dev)

## Supported frameworks

| Framework | Versions | Support | Auto CodeGen | Auto Docs |
| --------- | -------- | ------- | ------------ | ---- |
| [Vue](https://vuejs.org/) | 3.2+ | ✅ | ✅ | Todo |
| [Svelte](https://svelte.dev/) | - | Planned | - | - |
| [Solid](https://www.solidjs.com/) | - | Planned | - | - |
| [Angular](https://angular.io/) | - | TBD | - | - |
| [React](https://reactjs.org/) | - | [Alternative](https://www.ladle.dev) | - | - |

## Quick Start

```bash
pnpm i -D histoire
pnpm exec histoire dev
pnpm exec histoire build
```

### Vue 3

In your Vite project, create a `MyComponent.story.vue` file inside your `src` directory:

```vue
<script setup>
import MyComponent from './MyComponent.vue'

const state = reactive({
  disabled: false,
})

defineExpose({
  state,
})
</script>

<template>
  <Story
    title="MyComponent"
    :layout="/* {
      type: 'grid',
      width: 200,
    } */"
  >
    <Variant>
      <template #default>
        <MyComponent
          :disabled="state.disabled"
        >
          Hello world
        </MyComponent>
      </template>

      <template #controls>
        <HstCheckbox v-model="state.disabled">
          Disabled
        </HstCheckbox>
      </template>
    </Variant>

    <Variant
      title="green"
      icon="carbon:star-filled"
      icon-color="#10B981"
    >
      <MyComponent
        color="green"
      >
        Hello world
      </MyComponent>
    </Variant>
  </Story>
</template>
```

## Packages

This mono-repo contains the following packages:

| Package | Description |
| ------- | ----------- |
| [histoire](https://github.com/Akryum/histoire/tree/main/packages/histoire) | Main package |
| [@histoire/controls](https://github.com/Akryum/histoire/tree/main/packages/histoire-controls) | Builtin controls components |
| [@histoire/plugin-nuxt](https://github.com/Akryum/histoire/tree/main/packages/histoire-plugin-nuxt) | Nuxt 3 integration |
| [@histoire/plugin-percy](https://github.com/Akryum/histoire/tree/main/packages/histoire-plugin-percy) | Visual regression testing with Percy |
| [@histoire/plugin-screenshot](https://github.com/Akryum/histoire/tree/main/packages/histoire-plugin-screenshot) | Visual regression testing with simple screenshots |

## Contribution

See [Contributing Guide](https://github.com/Akryum/histoire/blob/main/CONTRIBUTING.md).

## Sponsors

### [Guillaume Chau](https://github.com/sponsors/Akryum)

<p align="center">
  <a href="https://guillaume-chau.info/sponsors/" target="_blank">
    <img src='https://akryum.netlify.app/sponsors.svg'/>
  </a>
</p>

## License

MIT
