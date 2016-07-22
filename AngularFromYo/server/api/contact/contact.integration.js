'use strict';

var app = require('../..');
import request from 'supertest';

var newContact;

describe('Contact API:', function() {

  describe('GET /api/v1/contacts', function() {
    var contacts;

    beforeEach(function(done) {
      request(app)
        .get('/api/v1/contacts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          contacts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      contacts.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/v1/contacts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/v1/contacts')
        .send({
          name: 'New Contact',
          info: 'This is the brand new contact!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newContact = res.body;
          done();
        });
    });

    it('should respond with the newly created contact', function() {
      newContact.name.should.equal('New Contact');
      newContact.info.should.equal('This is the brand new contact!!!');
    });

  });

  describe('GET /api/v1/contacts/:id', function() {
    var contact;

    beforeEach(function(done) {
      request(app)
        .get('/api/v1/contacts/' + newContact._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          contact = res.body;
          done();
        });
    });

    afterEach(function() {
      contact = {};
    });

    it('should respond with the requested contact', function() {
      contact.name.should.equal('New Contact');
      contact.info.should.equal('This is the brand new contact!!!');
    });

  });

  describe('PUT /api/v1/contacts/:id', function() {
    var updatedContact;

    beforeEach(function(done) {
      request(app)
        .put('/api/v1/contacts/' + newContact._id)
        .send({
          name: 'Updated Contact',
          info: 'This is the updated contact!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedContact = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedContact = {};
    });

    it('should respond with the updated contact', function() {
      updatedContact.name.should.equal('Updated Contact');
      updatedContact.info.should.equal('This is the updated contact!!!');
    });

  });

  describe('DELETE /api/v1/contacts/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/v1/contacts/' + newContact._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when contact does not exist', function(done) {
      request(app)
        .delete('/api/v1/contacts/' + newContact._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
