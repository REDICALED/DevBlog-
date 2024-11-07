module.exports = {
            animation: {
                "bounce-in-right": "bounce-in-right 1.1s ease-out    both"
            },
            keyframes: {
                "bounce-in-right": {
                    "0%": {
                        transform: "translateX(600px)",
                        "animation-timing-function": "ease-in",
                        opacity: "0"
                    },
                    "38%": {
                        transform: "translateX(0)",
                        "animation-timing-function": "ease-out",
                        opacity: "1"
                    },
                    "55%": {
                        transform: "translateX(68px)",
                        "animation-timing-function": "ease-in"
                    },
                    "72%,90%,to": {
                        transform: "translateX(0)",
                        "animation-timing-function": "ease-out"
                    },
                    "81%": {
                        transform: "translateX(32px)",
                        "animation-timing-function": "ease-in"
                    },
                    "95%": {
                        transform: "translateX(8px)",
                        "animation-timing-function": "ease-in"
                    }
                }
            }
        }