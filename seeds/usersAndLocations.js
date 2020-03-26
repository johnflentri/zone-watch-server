const User = require("../user/model");
const Location = require("../location/model");

module.exports = async function seedUsersAndLocations() {
  const john = await User.create({
    username: "john",
    email: "john@john.com",
    password: "passjohn",
    lat: 35,
    lng: 45
  });

  const rein = await User.create({
    username: "rein",
    email: "rein@rein.com",
    password: "passrein",
    lat: 15,
    lng: 25
  });

  const david = await User.create({
    username: "david",
    email: "david@david.com",
    password: "passdavid",
    lat: 15,
    lng: 25
  });

  const matias = await User.create({
    username: "matias",
    email: "matias@matias.com",
    password: "passmatias",
    lat: 55,
    lng: 65
  });

  const jeroen = await User.create({
    username: "jeroen",
    email: "jeroen@jeroen.com",
    password: "passjeroen",
    lat: 55,
    lng: 65
  });
  const kelley = await User.create({
    username: "kelley",
    email: "kelley@kelley.com",
    password: "passkelley",
    lat: 55,
    lng: 65
  });

  const sandi = await User.create({
    username: "sandi",
    email: "sandi@sandi.com",
    password: "passsandi",
    lat: 55,
    lng: 65
  });

  const amsterdam = await Location.create({
    name: "amsterdam",
    lat: 15,
    lng: 25
  });

  const berlin = await Location.create({
    name: "berlin",
    lat: 35,
    lng: 45
  });

  const paris = await Location.create({
    name: "paris",
    lat: 55,
    lng: 65
  });

  john.addLocation(berlin, {
    through: { isHomeLocation: true }
  });
  john.addLocation(paris, {
    through: { isHomeLocation: false }
  });
  rein.addLocation(amsterdam, {
    through: { isHomeLocation: true }
  });
  rein.addLocation(berlin, {
    through: { isHomeLocation: false }
  });
  david.addLocation(amsterdam, {
    through: { isHomeLocation: true }
  });
  david.addLocation(paris, {
    through: { isHomeLocation: false }
  });
  matias.addLocation(paris, {
    through: { isHomeLocation: true }
  });
  jeroen.addLocation(paris, {
    through: { isHomeLocation: true }
  });
  kelley.addLocation(paris, {
    through: { isHomeLocation: true }
  });
  sandi.addLocation(paris, {
    through: { isHomeLocation: true }
  });
}