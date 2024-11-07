//tailwind.config.js 
//FreeBSD-licensed CSS animation by Animista 
module.exports = {
            animation: {
                "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
            },
            keyframes: {
                "slide-in-right": {
                    "0%": {
                        transform: "translateX(600px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateX(0)",
                        opacity: "1"
                    }
                }
            }
        }
