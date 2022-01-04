<template>
    <div 
        :style="{ 
            'z-index': setLayerIndex(),
            'transform': `translate3d(${fluidBallTranslateX}vw, ${fluidBallTranslateY}vh, 0)`
        }" 
        class="fluid-ball">
        <video 
            autoplay 
            playsinline
            muted
            loop 
            poster="../assets/images/fluidBall_poster.jpg" >
            <source src="../assets/videos/fluidBall.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>

export default {
    name: 'fluidBall',

    props: {
        activeScreenNumber: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            fluidBallTranslateX: 0,
            fluidBallTranslateY: 0,
        }
    },
    created() {
        this.$watch('activeScreenNumber', this.calcBallTranslate)
        this.calcBallTranslate()
    },
    methods: {
        setLayerIndex() {
            if (this.activeScreenNumber > 2) return -1
            return 1
        },
        calcBallTranslate() {
            if (window.innerWidth < 576) {
                if (this.activeScreenNumber === 0) { this.fluidBallTranslateX = 0; this.fluidBallTranslateY = -55; return; }
                if (this.activeScreenNumber === 1) { this.fluidBallTranslateX = -75; this.fluidBallTranslateY = 0; return; }
                if (this.activeScreenNumber === 2) { this.fluidBallTranslateX = 0; this.fluidBallTranslateY = -55; return; }
                if (this.activeScreenNumber === 3) { this.fluidBallTranslateX = 55; this.fluidBallTranslateY = -35; return; }
                if (this.activeScreenNumber === 4) { this.fluidBallTranslateX = 0; this.fluidBallTranslateY = -10; return; }
                if (this.activeScreenNumber === 5) { this.fluidBallTranslateX = 0; this.fluidBallTranslateY = -55; return; }
                if (this.activeScreenNumber === 6) { this.fluidBallTranslateX = 0; this.fluidBallTranslateY = 0; return; }
                if (this.activeScreenNumber === 7) { this.fluidBallTranslateX = -80; this.fluidBallTranslateY = 5; return; }
                if (this.activeScreenNumber === 8) { this.fluidBallTranslateX = 55; this.fluidBallTranslateY = -35; return; }
                if (this.activeScreenNumber === 9) { this.fluidBallTranslateX = 20; this.fluidBallTranslateY = 50; return; }
                if (this.activeScreenNumber === 10) { this.fluidBallTranslateX = -50; this.fluidBallTranslateY = 0; return; }
                if (this.activeScreenNumber === 11) { this.fluidBallTranslateX = 0; this.fluidBallTranslateY = -55; return; }
                if (this.activeScreenNumber === 12) { this.fluidBallTranslateX = 50; this.fluidBallTranslateY = 0; return; }
            }
            this.fluidBallTranslateY = 0
            if (this.activeScreenNumber === 0) { this.fluidBallTranslateX = 0; return; }
            if (this.activeScreenNumber === 1) { this.fluidBallTranslateX = -70; return; }
            if (this.activeScreenNumber === 2) { this.fluidBallTranslateX = 30; return; }
            if (this.activeScreenNumber === 3) { this.fluidBallTranslateX = 0; return; }
            if (this.activeScreenNumber === 4) { this.fluidBallTranslateX = -60; return; }
            if (this.activeScreenNumber === 5) { this.fluidBallTranslateX = 0; return; }
            if (this.activeScreenNumber === 6) { this.fluidBallTranslateX = 0; return; }
            if (this.activeScreenNumber === 7) { this.fluidBallTranslateX = -70; return; }
            if (this.activeScreenNumber === 8) { this.fluidBallTranslateX = 11; return; }
            if (this.activeScreenNumber === 9) { this.fluidBallTranslateX = 0; return; }
            if (this.activeScreenNumber === 10) { this.fluidBallTranslateX = -70; return; }
        }
    }
}
</script>

<style lang="scss">
    .fluid-ball {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 5%; left: 5.5%;
        z-index: 1;
        mix-blend-mode: screen;
        pointer-events: none;
        transition: 1s transform ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: point(sm)) {
            width: 170vw;
            left: -35vw;
            top: 0;
        }

        video {
            width: 100%;
            height: 100%;
        }
    }
</style>
