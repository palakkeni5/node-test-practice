const request = require('supertest')
const expect = require('expect')
//const describe = require('mocha').describe

const app = require('./server').app

describe('Server',()=>{

    describe(' GET / ', ()=>{
        it('should return hello world response',(done)=>{
            request(app)
            .get('/')
            .expect(404)
            .expect( (res)=>{
                expect(res.body).toInclude({
                    error : " Page not found"
                })
            } )
            .end(done)
        })
    })

    describe(' GET /users', ()=>{
        it('should check whether a name exists in the users list' , (done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect( (res)=>{
                expect(res.body).toInclude({
                    name:'Palak',
                    age : 20
                })
            })
            .end(done)
        })
    })
})

 

