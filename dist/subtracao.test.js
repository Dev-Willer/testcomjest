"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subtracao_1 = __importDefault(require("./subtracao"));
describe('Teste de subtração', () => {
    test('deve verificar o resultado de uma subtração', () => {
        expect((0, subtracao_1.default)(6, 2)).toBeCloseTo(4);
        expect((0, subtracao_1.default)(6, 8)).toBeCloseTo(-2);
        expect((0, subtracao_1.default)(2, 2)).toBeCloseTo(0);
        expect((0, subtracao_1.default)(60, 2)).toBeCloseTo(58);
    });
    test('deve verificar o resultado incorreto de uma subtração', () => {
        expect((0, subtracao_1.default)(6, 2)).not.toBeCloseTo(5);
    });
});
