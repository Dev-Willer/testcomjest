import soma from './soma';

describe('Testes de soma', () => {

    test('Deve verificar o resultado de uma soma', ()=> {
        expect(soma(3,8)).toBeCloseTo(11)
    })

    test('Deve verificar o resultado de uma soma', ()=> {
        expect(soma(3,8)).not.toBeCloseTo(12)
    })
})

