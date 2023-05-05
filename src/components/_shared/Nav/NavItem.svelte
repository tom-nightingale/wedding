<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let title: string = "";
  export let activeItem: string = "";
  export let activeItemIndex: number = 0;
  export let index: number = 0;

  const dispatch = createEventDispatcher();

  const onClick = (event: any) => {
    dispatch("click", {
      target: event.currentTarget,
    });
  };
</script>

<style>
  .activeItem {
    @apply text-green;
  }

  .activeDot {
    @apply bg-green-light;
  }
</style>

<a
  data-navitem={title.toLowerCase()}
  href="#{title.toLowerCase()}"
  class="mb-4 md:mb-8 last:mb-0 flex items-center group"
  on:click={onClick}
  class:activeItem={activeItem === title.toLowerCase()}
>
  <span
    class="relative z-10 bg-green-lightest w-3 h-3 rounded-full inline-block group-hover:bg-green-light transition duration-500"
    class:activeDot={activeItem === title.toLowerCase() ||
      index <= activeItemIndex}
  />
  <span
    class="ml-2 text-green-light text-sm transition-all duration-500 delay-75"
    class:activeItem={activeItem === title.toLowerCase()}>{title}</span
  >
</a>
