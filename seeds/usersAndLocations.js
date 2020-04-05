const User = require("../user/model");
const Location = require("../location/model");
const bcrypt = require("bcrypt");

module.exports = async function seedUsersAndLocations() {
  const userPassword = bcrypt.hashSync("1", 10)

  const user1 = await User.create({
    username: "1",
    email: "1",
    password: userPassword,
    lat: 35,
    lng: 45
  });

  const john = await User.create({
    username: "john",
    email: "john@john.com",
    password: userPassword,
    lat: 35,
    lng: 45
  });

  const rein = await User.create({
    username: "rein",
    email: "rein@rein.com",
    password: userPassword,
    lat: 15,
    lng: 25
  });

  const david = await User.create({
    username: "david",
    email: "david@david.com",
    password: userPassword,
    lat: 15,
    lng: 25
  });

  const matias = await User.create({
    username: "matias",
    email: "matias@matias.com",
    password: userPassword,
    lat: 55,
    lng: 65
  });

  const jeroen = await User.create({
    username: "jeroen",
    email: "jeroen@jeroen.com",
    password: userPassword,
    lat: 55,
    lng: 65
  });

  const kelley = await User.create({
    username: "kelley",
    email: "kelley@kelley.com",
    password: userPassword,
    lat: 55,
    lng: 65
  });

  const amsterdamNieuwWest = await Location.create({
    name: "Amsterdam Nieuw West",
    lat: 52.3563,
    lng: 4.8096
  });

  const amsterdamZuid = await Location.create({
    name: "Amsterdam Zuid",
    lat: 52.3449,
    lng: 4.8766
  });

  const haarlem = await Location.create({
    name: "Haarlem",
    lat: 52.3874,
    lng: 4.6462
  });

  const denHaag = await Location.create({
    name: "Den Haag",
    lat: 52.0705,
    lng: 4.3007
  });

  const perth = await Location.create({
    name: "Perth",
    lat: 31.9505,
    lng: 115.8605
  });

  user1.addLocation(amsterdamZuid, {
    through: { isHomeLocation: false }
  });
  user1.addLocation(perth, {
    through: { isHomeLocation: false }
  });
  user1.addLocation(denHaag, {
    through: { isHomeLocation: false }
  });
  user1.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  john.addLocation(amsterdamZuid, {
    through: { isHomeLocation: false }
  });
  john.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  rein.addLocation(amsterdamNieuwWest, {
    through: { isHomeLocation: false }
  });
  rein.addLocation(amsterdamZuid, {
    through: { isHomeLocation: false }
  });
  david.addLocation(amsterdamNieuwWest, {
    through: { isHomeLocation: false }
  });
  david.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  matias.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  jeroen.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  kelley.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
  sandi.addLocation(haarlem, {
    through: { isHomeLocation: false }
  });
}