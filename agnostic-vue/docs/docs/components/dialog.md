# Dialog

AgnosticUI's [Dialog](https://www.w3.org/TR/wai-aria-practices/#dialog_modal) component wraps Kitty Giraudel's [a11y-dialog](https://github.com/KittyGiraudel/a11y-dialog) — an accessible and inclusive dialog component that has been battle tested over several versions to date.

<div class="mbs24"></div>

## Examples

<div class="mbe24"></div>

<DialogExamples />

<script setup>
import DialogExamples from '../../components/DialogExamples.vue'
</script>

<div class="mbe32"></div>

## Usage

Note that by default <code>Dialog</code> will use <code>role="dialog"</code> and
behave like a _dialog_. This means that in addition to the open/close trigger button
dismissing the dialog, you can also click <code>ESC</code> or click outside the dialog
e.g. on the overlay and the dialog will be dismissed.

<div class="mbe24"></div>

If you'd like a <span class="quoted">sticky dialog</span> that only closes by toggling the trigger button and/or a close
button you've setup, you can pass <code>role="alertdialog"</code> and <code>ESC</code>
or click outside the dialog will NOT dismiss the dialog. Read more about this on 
[a11y-dialog's alertdialog docs page](https://a11y-dialog.netlify.app/advanced/alert-dialog).

<div class="mbe32"></div>

<div class="flex">
  <h3 id="vue-3" tabindex="-1">
    <img src="/images/Vue-icon.svg" alt="Vue 3 logo">Vue 3
  </h3>
</div>

<details class="disclose disclose-bordered">
<summary class="disclose-title">View source</summary>

```vue
<template>
  <section class="mbe40">
    <div class="h4 mbe32 flex items-center">
      <img
        width="24"
        height="24"
        src="/assets/Vue-icon.svg"
        alt="Vue logo"
        class="mie12"
      />Vue 3 Dialog
    </div>
    <div class="mbs16 mbe24">
      <Button
        mode="primary"
        :is-bordered="true"
        :is-block="true"
        :is-rounded="true"
        type="button"
        @click="openDialog"
      >
        Open the dialog
      </Button>
      <Dialog
        id="vue-dialog"
        dialog-root="#portal-root"
        :is-animation-fade-in="true"
        :is-animation-slide-up="true"
        role="dialog"
        :class-names="{
          title: 'h4 mbe18 flex justify-center',
        }"
        @instance="assignDialogRef"
      >
        <template #title>
          My Dialog 1
        </template>
        <p
          class="mbs16 mbe16"
          id="dialog-example-description"
        >
          Fill in the form below to receive our newsletter!
        </p>
        <form class="dialog-form-demo">
          <Input
            :is-rounded="true"
            label="Email (required)"
            type="email"
            name="EMAIL"
            id="email"
            placeholder="email@example.com"
            required
          />
          <div class="mbe16" />
          <Button
            type="submit"
            mode="primary"
            :is-rounded="true"
            :is-block="true"
          >
            Sign Up
          </Button>
        </form>
      </Dialog>
    </div>
    <div class="mbs16 mbe24">
      <Button
        mode="primary"
        :is-bordered="true"
        :is-block="true"
        :is-rounded="true"
        type="button"
        @click="openDialog2"
      >
        Open dialog 2
      </Button>
      <Dialog
        id="2vue2dialog"
        dialog-root="#portal-root"
        close-button-label="My close button label"
        close-button-position="last"
        role="alertdialog"
        :class-names="{
          container: styles['my-dialog-container'],
          overlay: styles['my-dialog-overlay'],
          document: styles['my-dialog-content'],
          title: 'h4 mbe18 flex justify-center',
          closeButton: styles['close-button-demo'],
        }"
        @instance="assignDialogRef2"
      >
        <template #title>
          Dialog — Custom Close Button
        </template>
        <p
          class="mbs16 mbe16"
          id="dialog-example-description"
        >
          For the cancel button we have used an AgnosticUI <code>Button</code> of type <code>type="faux</code>
          This generates a div that looks like a button. As <code>vue-a11y-dialog</code> generates its own
          button around <code>closeButtonContent</code>, this prevents an unwanted nested buttons situation.
        </p>
        <p class="mbe16">
          You'll also notice that this dialog did not &ldquo;slide up&rdquo; or &ldquo;fade in&rdquo;
          as we did NOT pass in either <code>:is-animation-fade-in="true"</code> or <code>:is-animation-slide-up="true"</code>.
          Both of these default to <code>false</code>.
        </p>
        <p class="mbe16">
          Lastly, you'll note that the role is <code>alertdialog</code> which results in opting out of
          ESC closing the dialog.
        </p>
        <form class="dialog-form-demo">
          <Input
            :is-rounded="true"
            label="Email (required)"
            type="email"
            name="EMAIL"
            id="email"
            placeholder="email@example.com"
            required
          />
          <div class="mbe16" />
          <Button
            type="submit"
            mode="primary"
            :is-rounded="true"
            :is-block="true"
          >
            Sign Up
          </Button>
        </form>
        <template #closeButtonContent>
          <Button
            type="faux"
            :is-rounded="true"
            :is-bordered="true"
            :is-block="true"
          >
            Cancel
          </Button>
        </template>
      </Dialog>
    </div>
  </section>
</template>
<script setup>
import { useCssModule } from "vue";
// Components CSS
import "agnostic-vue/dist/index.css";
import { Button, Dialog, Input } from "agnostic-vue";
const styles = useCssModule();

let dialog = null;
let dialog2 = null;

const openDialog = () => {
  console.log("openDialog");
  if (dialog) {
    dialog.show();
  }
};

const openDialog2 = () => {
  console.log("openDialog2");
  if (dialog2) {
    dialog2.show();
  }
};

const assignDialogRef = (instance) => {
  console.log("assignDialogRef called...");
  dialog = instance;
};

const assignDialogRef2 = (instance) => {
  console.log("assignDialogRef2 called...");
  dialog2 = instance;
};
</script>
<style module>
.close-button-demo {
  background-color: transparent;
  border: transparent;
  width: 100%;
  margin-block-start: 0.5rem;
}
.my-dialog-container {
  display: flex;
  z-index: 2;
  /* This is just to override the silly centered app demo css :) */
  text-align: left;
}

.my-dialog-overlay {
  background-color: rgba(43, 46, 56, 0.9);
  animation: fade-in 200ms both;
}

.my-dialog-overlay,
.my-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Crucial—dialog w/not hide visually without this rule */
.my-dialog-container[aria-hidden="true"] {
  display: none;
}

.my-dialog-content {
  background-color: rgb(255, 255, 255);
  margin: auto;
  z-index: 2;
  position: relative;
  padding-block-start: 1.5rem;
  padding-block-end: 2rem;
  padding-inline-start: 2em;
  padding-inline-end: 2rem;
  max-width: 90%;
  width: 600px;
  border-radius: 2px;
}

.my-close-button {
  display: inline-block;
  cursor: pointer;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  background-color: transparent;
  border-radius: 0.1875rem;
  border: 1px solid #036dc9;
  color: #036dc9;
  line-height: 2rem;
  text-align: center;
}

.my-dialog-title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.005em;
  margin-block-start: 0.5rem;
  margin-block-end: 0.25rem;
}
</style>
```
</details>

Vue 3: [component source](https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-vue/src/components/Dialog.vue)
