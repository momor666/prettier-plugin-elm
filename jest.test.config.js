"use strict";

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!<rootDir>/node_modules/"],
  roots: ["test"],
  testMatch: ["**/?(*.)(spec|test).(j|t)s?(x)"]
};
