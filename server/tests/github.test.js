const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);
const { expect } = chai;

/**
 * @description Tests GitHub API routes
 */
describe("GitHub API", () => {
  /**
   * @test Fetches GitHub users based on query
   * @param {Function} done - Mocha's async completion callback
   */
  it("should fetch users", (done) => {
    chai
      .request(server)
      .get("/api/github/search?q=octocat")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        done();
      });
  });
});

