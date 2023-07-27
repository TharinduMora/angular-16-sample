export class Login {
  static readonly type = '[APP] Login';
  constructor(public email: string, public password: string) {}
}

export class Logout {
  static readonly type = '[APP] Logout';
  constructor() {}
}
