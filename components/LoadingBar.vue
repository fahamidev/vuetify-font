<template>
    <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
    }),
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        },
    },
}
</script>

<style scoped>
.spinner {
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}

.spinner > div {
    width: 18px;
    height: 18px;
    background: rgb(14, 192, 118);

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
    }
}

@keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>
