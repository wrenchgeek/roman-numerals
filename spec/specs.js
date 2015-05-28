describe("roman", function() {
  it("takes a number less than 4 and converts it to a roman numeral", function() {
    expect(roman(3)).to.eql("III");
  });

  it("takes the number 4 and converts it to a roman numeral", function() {
    expect(roman(4)).to.eql("IV");
  });

  it("takes the number 8 and converts it to a roman numeral", function() {
    expect(roman(8)).to.eql("VIII");
  });

  it("takes the number 9 and converts it to a roman numeral", function() {
    expect(roman(9)).to.eql("IX");
  });

  it("takes the number 13 and converts it to a roman numeral", function() {
    expect(roman(13)).to.eql("XIII");
  });

  it("takes the number 14 and converts it to a roman numeral", function() {
    expect(roman(14)).to.eql("XIV");
  });

  it("takes the number 39 and converts it to a roman numeral", function() {
    expect(roman(39)).to.eql("XXXIX");
  });

  it("takes the number 48 and converts it to a roman numeral", function() {
    expect(roman(48)).to.eql("XLVIII");
  });

  it("takes the number 53 and converts it to a roman numeral", function() {
    expect(roman(53)).to.eql("LIII");
  });

  it("takes the number 89 and converts it to a roman numeral", function() {
    expect(roman(89)).to.eql("LXXXIX");
  });
});
