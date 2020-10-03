module.exports = {
  purge: {
    enabled: true,
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
        "bg-blue-200",
        "hover:bg-green-700",
        "hover:bg-blue-700",
        "focus:bg-green-700",
        "focus:bg-blue-700"
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
