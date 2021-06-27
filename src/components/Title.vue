<template>
<h1>
    <slot></slot>
</h1>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables.scss";
h1 {
    text-transform: uppercase;
    position: relative;
    font-size: 32px;
    color: map-get($colors, black);
    margin-bottom: 20px;
    padding: 20px;

    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }

    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #0563bb;
        bottom: 0;
        left: calc(50% - 20px);
    }
}
</style>