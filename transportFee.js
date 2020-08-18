module.exports = function transportFee(amount){
    switch(amount) {
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      default:
        return "free";
                 }
  }