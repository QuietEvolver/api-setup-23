import Character from '../src/js/character.js';

describe('Character', () => {

  test('should correctly create a character object with a health property', () => {
    const character = new Character(12);
    expect(character.health).toEqual(12);
  });

  test('should add 1 to health score', () => {
    const character = new Character(12);
    expect(character.healthPlusOne()).toEqual(13);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0);
    expect(character.healthPlusOne()).toEqual(0);
  });

  test('should minus 1 to health score', () => {
    const character = new Character(12);
    expect(character.healthMinusOne()).toEqual(11);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0);
    expect(character.healthMinusOne()).toEqual(0);
  });

  test("should return 24 health if using a shield", () => {
  const character = new Character(1);
  expect(character.equipShield()).toEqual(25);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0);
    expect(character.equipShield()).toEqual(0);
  });

  test("should add character class to character object", () => {
    const character = new Character(0, "wizard");
    expect(character.takeType()).toEqual("wizard");
  });

  test("should return 'not a wizard' if character class is not wizard",() => {
    const character = new Character(0, " ");
    expect(character.takeType()).toEqual("It's too dangerous to go alone, pick a class");
  });

  test("should add character class 'druid' to character object", () => {
    const character = new Character(0, "druid");
    expect(character.takeType()).toEqual("druid");
  });

  test("should add character class 'warrior' to character object",() => {
    const character = new Character(0, "warrior");
    expect(character.takeType()).toEqual("warrior");
  });

  test("should return minus 5 health if necromancy spell cast",() => {
    const character = new Character(10, "wizard", "necromancy");
    expect(character.castSpell()).toEqual(5, "wizard", "necromancy");
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0, "wizard", "necromancy");
    expect(character.castSpell()).toEqual(0);
  });

  test("Should multiply age by three if equivalent to 'aging'", () => {
    const character = new Character(1, "wizard", "aging", 2);
    expect(character.castSpell()).toEqual(6);
  })

  test ("Should divide health by four if equivalent to 'splinter'",() => {
    const character = new Character (12, "wizard", "splinter", 8);
    expect(character.castSpell()).toEqual(3);
  });

  // test ("Should check stats if equal to experience'",() => {
  //   const character = new Character (3, "wizard", "splinter", 8, 12);
  //   expect(character.checkStats()).toEqual(0);
  // });

  test("Should go from level one to two based on experence gained", () => {
    const character = new Character (5, " ", " ", " ", 0);
    expect (character.gainExperience()).toEqual(10);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0, " ", " ", " ", 0);
    expect(character.gainExperience()).toEqual(0);
  });

  test("should return age plus 14 when character enters the Epicodus realm", () => {
    const character = new Character(10, " ", " ", 32, " ", "epicodus");
    expect(character.realmAge()).toEqual(46);
  });

  test("should return 0 if health score is 0", () => {
    const character = new Character(0, " ", " ", 0 , " ", "epicodus");
    expect(character.realmAge()).toEqual(0);
  });

  test("should return age multiplied by 2 and health divided by 2 when character enters brainSap realm", () => {
    const character = new Character(10, " ", " ", 10, "", "brainSap");
    expect(character.realmAge()).toEqual(5, 100);
  })

});