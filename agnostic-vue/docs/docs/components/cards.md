# Cards

`Cards` are essentialy flexbox-based boxes that take up their container's width.
These cards are set up as [media query-less responsive cards](https://css-tricks.com/how-to-make-a-media-query-less-card-component/#a-recipe-for-zero-media-queries) that leverage the behavior of `flex-wrap`. As such, it's up to you to set an the `flex-basis` properties so that your content will stack (aka wrap) when the viewport cannot accomodate your content otherwise.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<CardExamples />

<div class="mbe24"></div>

<script setup>
import CardExamples from '../../components/CardExamples.vue'
</script>

## Usage

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <section>
    <Card is-border>
      <div class="p16">Border Card</div>
      <div
        class="p16 flex-grow-1 flex-shrink-1"
        style="flex-basis: 50ch;"
      >
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-border
      is-rounded
    >
      <div class="p16">
        Border & Rounded
      </div>
      <div
        class="p16 flex-grow-1 flex-shrink-1"
        style="flex-basis: 50ch;"
      >
        The card comes with minimal
        <span class="quoted">skinning css</span>
        and no padding (the padding you see here is from the demo styles).
        By default Cards have a flex direction of <i>row</i>, so each child
        with a <i>flex</i> rule will get placed as a sort of column
        in the row (until the viewport is shrunk below a size that can support
        the content's flex-basis; under that it will wrap and thus stack).
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-border
    >
      <div class="p16">
        Stacked & Border
      </div>
      <div class="p16">
        Stacked cards start their lives with flex direction <i>column</i>, so each child
        be stacked one on top of the other and continue to grow downward.
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
    >
      <div class="p16">
        Stacked & Shadow
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      is-stacked
      is-shadow
      is-animated
    >
      <div class="p16">
        Stacked, Animated (on hover), & Shadow
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="success"
      is-stacked
    >
      <div class="p16">
        Success
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="info"
      is-stacked
    >
      <div class="p16">
        Info
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="warning"
      is-stacked
    >
      <div class="p16">
        Warning
      </div>
      <div class="p16">
        Card
      </div>
    </Card>
    <div class="mbe24" />
    <Card
      type="error"
      is-stacked
    >
      <div class="p16">
        Error
      </div>
      <div class="p16">
        Card
      </div>
    </Card> 
  </section>
</template>
<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Card } from "agnostic-vue";
</script>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Card.vue), [storybook tests](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/stories/Card.stories.js)
