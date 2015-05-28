describe("roman", function() {
  it("takes a number less than 4 and converts it to a roman numeral", function() {
    expect(roman(3)).to.eql("III");
  });
});
