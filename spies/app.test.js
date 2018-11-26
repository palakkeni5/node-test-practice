const expect =require('expect');
const rewire =require('rewire');

var app = rewire('./app.js')


describe('App',()=>{

    var db = {
        saveUser: expect.createSpy()
    }

    app.__set__('db',db)
    it('should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy('Palak', 20)
        expect(spy).toHaveBeenCalledWith('Palak',20); 
    })

    it('should call user with user object',()=>{
        var email='palakkeni@gmail.com'
        var password = '12345';

        app.Signup(email , password)
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })
})