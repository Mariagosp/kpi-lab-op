"use strict";

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const constObj = {
    name: "Mariia",
  };
  let letObj = {
    name: "Mari",
  };

  constObj.name = "Mari";
  letObj.name = "Mariia";

  letObj = { name: "Anna" };

  console.dir({ constObj, letObj });
};

fn();

module.exports = { fn };
