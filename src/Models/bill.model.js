/* eslint jsx-a11y/img-has-alt: 0 */

export default class Bill {
  constructor(name, amount, fbKey = null) {
    // TODO: Hacky but it works for now.  I'll pull in a library at some point
    this.id = Math.floor(Math.random() * 100000);
    this.name = name;
    this.amount = amount;
    this.fbKey = fbKey;
  }
}
