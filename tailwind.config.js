module.exports = {
  purge: {
    enabled: false,
    content: ["./layouts/**/*.html"],
    options: {
      whitelist: [
        "text-green-900",
        "text-blue-900",
        "bg-red-200",
        "bg-green-200",
        "bg-teal-200",
        "bg-orange-200",
        "bg-purple-200",
        "bg-blue-200"
      ]
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      screens: {
        "xs": "370px"
      },
      height: {
        "72": "18rem"
      }
    }
  }
}
