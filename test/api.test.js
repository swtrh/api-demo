var superagent = require('superagent');
var expect = require('expect.js');

describe ('express rest api server', function () {
  var id;

  it ('posts an order', function (done) {
    superagent.post('http://localhost:3000/api/people')
      .send({
        "name": "Joe",
        "email": "joe@statoil.com"
      })
      .end(function (e, res) {
        //console.log(res);
        expect(e).to.eql(null);
        expect(res.status).to.eql(201);
        expect(res.body._id.length).to.eql(24);
        id = res.body._id;
        done();
      });
  });

});
