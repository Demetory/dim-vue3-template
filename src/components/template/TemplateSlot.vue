<template>
  <section class="item">
    <i class="item__icon">
      <slot name="icon"></slot>
    </i>
    <div class="item__body">
      <h2 class="item__head">
        <slot name="heading"></slot>
      </h2>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  position: relative;
  margin-top: 0;
  padding-left: 80px;

  &:not(:last-of-type) {
    padding-bottom: 2.8rem;
  }

  &::before,
  &::after {
    content: " ";
    position: absolute;
    left: 25px;
    border-left: 1px solid colors.$grey;
    height: calc(50% - 25px);
  }

  &::before {
    bottom: calc(50% + 25px);
  }

  &::after {
    top: calc(50% + 25px);
  }

  &:first-of-type::before,
  &:last-of-type::after {
    display: none;
  }

  &__icon {
    position: absolute;
    display: flex;
    top: calc(50% - 25px);
    left: 0;
    place-items: center;
    place-content: center;
    width: 50px;
    height: 50px;
    color: colors.$font-black;
    border: 1px solid colors.$grey;
    border-radius: grid.$border-radius;
  }

  &__head {
    margin-bottom: 0.6rem;
  }

  &__body {
    flex: 1;
    margin-left: 2rem;

    :slotted(p),
    :slotted(li) {
      line-height: 2.4rem;
    }
  }
}

@media (min-width: 1024px) {
}
</style>
