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

});
