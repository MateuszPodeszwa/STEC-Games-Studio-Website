<!-- src/components/ExampleComponent.vue -->
<template>
    <div>
        <h2>{{ message }}</h2>
        <button @click="handleButtonClick">Click me!</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hi',
        };
    },
    methods: {
        handleButtonClick() {
            this.message = 'Hello from Vue Component!';
        },
    },
};
</script>

<style scoped>
h2 {
    color: blue;
}
</style>
