import 'mocha';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import app from '../../app';

chai.should();
chai.use(chaiHttp);

describe('/POST commands', () => {
  it('it should return attachments', (done) => {
    chai.request(app.express)
      .post('/api/v1/commands/call')
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.attachments.should.be.a('array');
        done();
      });
  });
});
