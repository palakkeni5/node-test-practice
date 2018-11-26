const expect =require('expect');


const util = require('./utils');

it('should add two numbers',()=>{
    var res=util.add(101, 56);

    expect(res).toBe(157,'').toBeA('number')
    // if (res != 157){
    //     throw new Error(`Value is 157, but got ${res}`);
    // }
})

it('should async add two numbers',(done)=>{
    util.asyncAdd(3, 4 , (sum)=>{
        expect(sum).toBe(7).toBeA('number')
        done()
    })
})

it('should async square a number',(done)=>{
    util.asyncSquare(5,(square)=>{
        expect(square).toBe(25).toBeA('number')
        done()
    })
})

it('should square the number', ()=>{
    var res = util.square(5);
    
    expect(res).toBe(25,'').toBeA('number')
    // if(res != 25){
    //     throw new Error(`Value is 25 but got ${res} `);
    // }
})

// it('should expect some values', ()=>{
//     expect(12).toNotBe(11)
//     expect({name:'Palak'}).toEqual({name:'Palak'})
//     expect([2,3,4,5]).toInclude(4)

// })

it('should return f-name and l-name',()=>{
    var user = {
        location:"Mumbai",
        age:"20"
    }

    var res=util.setName(user , 'Palak Keni' )

    //expect(res).toBe(user)
    

    expect(res).toInclude({firstName : 'Palak', lastName : 'Keni'})
})