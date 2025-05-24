class User {
  constructor(username, email, reputation) {
    this.username = username;
    this.email = email;
    this.reputation = reputation;
  }

  set username(value) {
    if (typeof value === "string" && value.length >= 3) {
      this._username = value;
    } else {
      console.error("Username must be a string with at least 3 characters.");
    }
  }

  get username() {
    return this._username;
  }

  set email(value) {
    if (/^\S+@\S+\.\S+$/.test(value)) {
      this._email = value;
    } else {
      console.error("Invalid email format.");
    }
  }

  get email() {
    return this._email;
  }

  set reputation(value) {
    if (typeof value === "number" && value >= 0) {
      this._reputation = value;
    } else {
      console.error("Reputation must be a non-negative number.");
    }
  }

  get reputation() {
    return this._reputation;
  }

  intro() {
    console.log(
      `👤 User: ${this.username}, Email: ${this.email}, Rep: ${this.reputation}`
    );
  }
}

class Researcher extends User {
  constructor(username, email, reputation, bugsReported) {
    super(username, email, reputation);
    this.bugsReported = bugsReported;
  }

  set bugsReported(value) {
    if (Array.isArray(value)) {
      this._bugsReported = value;
    } else {
      console.error("Bugs must be stored in an array.");
    }
  }

  get bugsReported() {
    return this._bugsReported;
  }

  reportBug(bug) {
    this._bugsReported.push(bug);
    this.reputation += 10; // each bug increases reputation
    console.log(`🪲 Bug "${bug}" reported. Reputation now: ${this.reputation}`);
  }

  showProfile() {
    this.intro(); // inherited method
    console.log(`📋 Bugs reported: ${this.bugsReported.join(", ")}`);
  }
}

const hunter = new Researcher("ZeroDayZ", "zeroday@example.com", 120, []);
hunter.intro();
hunter.reportBug("XSS in login panel");
hunter.reportBug("SQL Injection in comments");
hunter.showProfile();
