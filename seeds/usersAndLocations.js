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

  const sandi = await User.create({
    username: "sandi",
    email: "sandi@sandi.com",
    password: userPassword,
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

  user1.addLocation(amsterdamZuid, {
    through: { isHomeLocation: true }
  });
  user1.addLocation(haarlem, {
    through: { isHomeLocation: false }
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