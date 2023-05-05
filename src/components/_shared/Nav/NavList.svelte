<script lang="ts">
  import NavItem from "./NavItem.svelte";
  export let items: string[] = [];

  let activeHeight = 0;
  let activeItemIndex = 0;

  const activeStyles = [
    {
      name: "venue",
      height: 0,
    },
    {
      name: "directions",
      height: 20,
    },
    {
      name: "accommodation",
      height: 45,
    },
    {
      name: "schedule",
      height: 65,
    },
    {
      name: "rsvp",
      height: 90,
    },
  ];

  let activeItem = activeStyles[0].name;

  // 20% for direections
  // 45% for accommodation
  // 65% for schedule
  // 90% for RSVP

  const updateActiveState = (event: any) => {
    activeHeight = activeStyles.filter(
      item => item.name === event.detail.target.dataset.navitem,
    )[0].height;
    activeItem = event.detail.target.dataset.navitem;

    activeItemIndex = activeStyles.findIndex(
      item => item.name === event.detail.target.dataset.navitem,
    );
    console.log("activeItem index", activeItemIndex);
  };
</script>

<div
  class="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col justify-center p-4"
>
  <div class="relative">
    <div
      class="z-0 w-1 h-[90%] bg-green-light/20 absolute top-1/2 -translate-y-1/2 left-1"
    />
    <div
      class="z-0 w-1 bg-green/25 absolute top-4 left-1 transition-all duration-500"
      style="height: {activeHeight}%;"
    />
    {#each items as item, index}
      <NavItem
        {index}
        {activeItem}
        {activeItemIndex}
        title={item}
        on:click={updateActiveState}
      />
    {/each}
  </div>
</div>
