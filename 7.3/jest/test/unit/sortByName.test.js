const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Books names should be sorted in ascending order 2", () => {
    expect(
      sorting.sortByName(["Каша из топора", "Каша из топора", "Айболит"])
    ).toEqual(["Айболит", "Каша из топора", "Каша из топора"]);
  });
});
