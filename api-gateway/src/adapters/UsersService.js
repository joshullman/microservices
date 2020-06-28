import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class UsersService {
  static async createUser({ email, password }) {
    try {
      const body = await got
        .post(`${USERS_SERVICE_URI}/users`, {
          json: { email, password },
        })
        .json();
      return body;
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchUser({ userId }) {
    try {
      const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
      return body;
    } catch (err) {
      console.log(err);
    }
  }

  static async createUserSession({ email, password }) {
    try {
      const body = await got
        .post(`${USERS_SERVICE_URI}/sessions`, {
          json: { email, password },
        })
        .json();
      return body;
    } catch (err) {
      console.log(err);
    }
  }

  static async deleteUserSession({ sessionId }) {
    try {
      const body = await got
        .delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
        .json();
      return body;
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchUserSession({ sessionId }) {
    try {
      const body = await got
        .get(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
        .json();
      return body;
    } catch (err) {
      console.log(err);
    }
  }
}
