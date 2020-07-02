const setColor = v => {
    if (v >= 15) {
      return "#4CAF50";
    } else if (v >= 12) {
      return "#8BC34A";
    } else if (v >= 9) {
      return "#CDDC39";
    } else if (v >= 6) {
      return "#FFEB3B";
    } else if (v >= 3) {
      return "#FFC107";
    } else if (v >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
}

export default setColor;