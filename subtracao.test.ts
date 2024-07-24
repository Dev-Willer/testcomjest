import subtracao from "./subtracao";

describe('Teste de subtração', () => {
    test('deve verificar o resultado de uma subtração', () => {
        expect(subtracao(6, 2)).toBeCloseTo(4)
        expect(subtracao(6, 8)).toBeCloseTo(-2)
        expect(subtracao(2, 2)).toBeCloseTo(0)
        expect(subtracao(60, 2)).toBeCloseTo(58)
    })

    test('deve verificar o resultado incorreto de uma subtração', () => {
        expect(subtracao(6, 2)).not.toBeCloseTo(5)
    })
})