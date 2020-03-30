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

  const amsterdamNieuwWest = await Location.create({
    name: "Amsterdam Nieuw West",
    lat: 15,
    lng: 25
  });

  const amsterdamZuid = await Location.create({
    name: "Amsterdam Zuid",
    lat: 35,
    lng: 45
  });

  const haarlem = await Location.create({
    name: "Haarlem",
    lat: 55,
    lng: 65
  });

  john.addLocation(amsterdamZuid, {
    through: { isHomeLocation: true }
  });
  john.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  rein.addLocation(amsterdamNieuwWest, {
    through: { isHomeLocation: true }
  });
  rein.addLocation(amsterdamZuid, {
    through: { isHomeLocation: false }
  });
  david.addLocation(amsterdamNieuwWest, {
    through: { isHomeLocation: true }
  });
  david.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  matias.addLocation(haarlem, {
    through: { isHomeLocation: true }
  });
  jeroen.addLocation(haarlem, {
    through: { isHomeLocation: true }
  });
  kelley.addLocation(haarlem, {
    through: { isHomeLocation: true }
  });
  sandi.addLocation(haarlem, {
    through: { isHomeLocation: true }
  });
}