<template>
    <div 
        :style="{ 
            'z-index': setLayerIndex(),
        }" 
        class="container">
        <div 
            class="fluid-ball"
            :style="{
                'z-index': ballFirst.index,
                'transform': `translate3d(${ballFirst.trX}vw, ${ballFirst.trY}vh, 0) scale(${ballFirst.scale})`,
            }"
            >
            <video 
                autoplay 
                playsinline
                muted
                loop 
                poster="../assets/images/fluidBall_poster.jpg" >
                <source src="../assets/videos/fluidBall.mp4" type="video/mp4">
            </video>
        </div>
        <div 
            class="fluid-ball"
            :style="{
                'z-index': ballSecond.index,
                'transform': `translate3d(${ballSecond.trX}vw, ${ballSecond.trY}vh, 0) scale(${ballSecond.scale})`,
            }"
            >
            <video 
                autoplay 
                playsinline
                muted
                loop 
                poster="../assets/images/fluidBall_poster.jpg" >
                <source src="../assets/videos/fluidBall.mp4" type="video/mp4">
            </video>
        </div>
        <div 
            class="fluid-ball"
            :style="{
                'z-index': ballThird.index,
                'transform': `translate3d(${ballThird.trX}vw, ${ballThird.trY}vh, 0) scale(${ballThird.scale})`,
            }"
            >
            <video 
                autoplay 
                playsinline
                muted
                loop 
                poster="../assets/images/fluidBall_poster.jpg" >
                <source src="../assets/videos/fluidBall.mp4" type="video/mp4">
            </video>
        </div>

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
            ballFirst: {
                trX: 0,
                trY: 0,
                scale: 1,
                index: 0,
            },
            ballSecond: {
                trX: 0,
                trY: 0,
                scale: 0,
                index: 1,
            },
            ballThird: {
                trX: 0,
                trY: 0,
                scale: 0,
                index: 1,
            },

        }
    },
    created() {
        this.$watch('activeScreenNumber', this.ballsTranslate)
        this.ballsTranslate()
    },
    methods: {
        setLayerIndex() {
            if (this.activeScreenNumber > 2) return -1
            return 1
        },
        ballsTranslate() {
            // idx,   trX, trY, sc, bidx,   trX2, trY2, sc2, bidx2,   trX3, trY3, sc3, bidx3
            if (window.innerWidth < 576) {
                // screen [ 1 ]
                this.setBallsPosition(0,   0, 0, 1, 0,   -25, 10, 0, 1,   -25, 10, 0, 0);
                setTimeout(function($this) {
                    $this.setBallsPosition(0,   0, 0, 1, 0,   -25, 10, .3, 1,   -25, 10, 0, 0);
                }, 1100, this)

                // screen [ 2 ]
                this.setBallsPosition(1,   0, -200, 1, 0,   -73, -8, 1, 1,   -25, 10, 0, 0);

                // screen [ 3 ]
                this.setBallsPosition(2,   0, -200, 0, 0,   0, 45, 1, 1,   -25, 10, 0, 0);

                // screen [ 4 ]
                this.setBallsPosition(3,   0, -200, 0, 0,   0, -60, 1.2, 1,   -25, 10, 0, 0);

                // screen [ 5 ]
                this.setBallsPosition(4,    -25, 10, 0, 0,   0, -15, 1.4, 0,   -25, 5, 0, 1);
                setTimeout(function($this) {
                    $this.setBallsPosition(4,   -25, 10, 0, 0,   0, -15, 1.4, 0,   -25, 5, .3, 1);
                }, 1100, this)

                // screen [ 6 ]
                this.setBallsPosition(5,   -25, 10, 0, 0,   0, -200, 1, 0,   0, -65, 1.2, 1);

                // screen [ 7 ]
                this.setBallsPosition(6,    -25, 5, 0, 1,   0, -200, 0, 0,   0, -15, 1.4, 0);
                setTimeout(function($this) {
                    $this.setBallsPosition(6,   -25, 5, .3, 1,   0, -200, 0, 0,   0, -15, 1.4, 0);
                }, 1100, this)

                // screen [ 8 ]
                this.setBallsPosition(7,    0, -65, 1.2, 1,   -15, 25, 0, 0,   0, -200, 1, 0);

                // screen [ 9 ]
                this.setBallsPosition(8,    25, -45, 1, 1,   -15, 25, 0, 0,   0, -200, 0, 0);

                // screen [ 10 ]
                this.setBallsPosition(9,    30, -50, 1.4, 1,   -15, 25, 0, 0,   -15, 25, 0, 0);

                // screen [ 11 ]
                this.setBallsPosition(10,    30, -10, 2.2, 0,   -10, 22, 0, 1,   -15, 25, 0, 0);
                setTimeout(function($this) {
                    $this.setBallsPosition(10,    30, -10, 2.2, 0,   -10, 22, .3, 1,   -15, 25, 0, 0);
                }, 1100, this)

                // screen [ 12 ]
                this.setBallsPosition(11,    0, -200, 2.2, 0,   0, -65, 1.2, 1,   -15, 25, 0, 0);

                // screen [ 13 ]
                this.setBallsPosition(12,    0, -200, 0, 0,   30, -55, 1.4, 1,   -15, 25, 0, 0);

                // screen [ 14 ]
                this.setBallsPosition(13,    -15, 25, 0, 0,   0, 40, 2, 1,   -15, 25, 0, 0);

                return
            }
            // screen [ 1 ]
            this.setBallsPosition(0,   0, 0, 1, 0,   -15, 25, 0, 1,   -15, 25, 0, 0);
            setTimeout(function($this) {
                $this.setBallsPosition(0,   0, 0, 1, 0,   -15, 25, .3, 1,   -15, 25, 0, 0);
            }, 1100, this)

            // screen [ 2 ]
            this.setBallsPosition(1,   0, -200, 1, 0,   -70, 0, 1, 1,   -15, 25, 0, 0);

            // screen [ 3 ]
            this.setBallsPosition(2,   0, -200, 0, 0,   30, 0, 1.2, 1,   -15, 25, 0, 0);

            // screen [ 4 ]
            this.setBallsPosition(3,   -15, 25, 0, 0,   0, 0, 1.2, 0,   -15, 25, 0, 1);
            setTimeout(function($this) {
                $this.setBallsPosition(3,   -15, 25, 0, 0,   0, 0, 1.2, 0,   -15, 25, .3, 1);
            }, 1100, this)

            // screen [ 5 ]
            this.setBallsPosition(4,    -15, 25, 0, 0,   0, -200, 1, 0,   -70, 0, 1, 1);

            // screen [ 6 ]
            this.setBallsPosition(5,    -15, 25, 0, 1,   0, -200, 0, 0,   0, 0, 1, 0);
            setTimeout(function($this) {
                $this.setBallsPosition(5,   -15, 25, .3, 1,   0, -200, 0, 0,   0, 0, 1, 0);
            }, 1100, this)

            // screen [ 7 ]
            this.setBallsPosition(6,    -70, 0, 1, 1,   -15, 25, 0, 0,   0, -200, 1, 0);

            // screen [ 8 ]
            this.setBallsPosition(7,    -70, 0, 1, 1,   -15, 25, 0, 0,   0, -200, 0, 0);

            // screen [ 9 ]
            this.setBallsPosition(8,    5, 0, .8, 1,   -15, 25, 0, 0,   -15, 25, 0, 0);

            // screen [ 10 ]
            this.setBallsPosition(9,    0, 0, 1.2, 0,   -15, 25, 0, 1,   -15, 25, 0, 0);
            setTimeout(function($this) {
                $this.setBallsPosition(9,    0, 0, 1.2, 0,   -15, 25, .3, 1,   -15, 25, 0, 0);
            }, 1100, this)

            // screen [ 11 ]
            this.setBallsPosition(10,    0, -200, 1, 0,   -70, 0, 1, 1,   -15, 25, 0, 0);

        },
        setBallsPosition(idx,   trX, trY, sc, bidx,   trX2, trY2, sc2, bidx2,   trX3, trY3, sc3, bidx3) {
            if (this.activeScreenNumber === idx) { 
                this.ballFirst.trX = trX; 
                this.ballFirst.trY = trY; 
                this.ballFirst.scale = sc; 
                this.ballFirst.index = bidx; 

                this.ballSecond.trX = trX2; 
                this.ballSecond.trY = trY2; 
                this.ballSecond.scale = sc2; 
                this.ballSecond.index = bidx2; 

                this.ballThird.trX = trX3; 
                this.ballThird.trY = trY3; 
                this.ballThird.scale = sc3; 
                this.ballThird.index = bidx3; 

                return; 
            }
        }
        
    }
}
</script>

<style lang="scss">
    .fluid-ball {
        position: absolute;
        width: 120vw;
        height: 120vh;
        top: -5vw; left: -5vh;
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
