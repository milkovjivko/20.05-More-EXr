function reverseString(input) {
    let split = String(input).split("");
    let reversed = split.reverse("").join("");
    console.log(reversed);
  }
  reverseString("Hello")