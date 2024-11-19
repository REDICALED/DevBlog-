module.exports = {
            animation: {
                "slide-in-top": "slide-in-top 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s  both"
            },
            keyframes: {
                "slide-in-top": {
                    "0%": {
                        transform: "translateY(-1000px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1"
                    }
                }
            }
        }