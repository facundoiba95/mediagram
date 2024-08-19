export default (counter) => {
    const thousandPosts = `${counter.toString().slice(0, 1)}.${counter.toString().slice(1, 2)}k`;
    const thousandPost_twoDigits = `${counter.toString().slice(0, 2)}.${counter.toString().slice(2, 3)}k`;
    const thousandPost_threeDigits = `${counter.toString().slice(0, 3)}k`

    if (counter > 0 && counter < 999) {
      return counter;
    } else if (counter > 999 && counter < 9999) {
      return thousandPosts;
    } else if (counter > 9999 && counter < 99999) {
      return thousandPost_twoDigits
    } else if (counter > 99999 && counter < 999999) {
      return thousandPost_threeDigits
    }
  }