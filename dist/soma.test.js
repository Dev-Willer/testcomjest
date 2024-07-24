"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soma_1 = __importDefault(require("./soma"));
describe('Testes de soma', () => {
    test('Deve verificar o resultado de uma soma', () => {
        expect((0, soma_1.default)(3, 8)).toBeCloseTo(11);
    });
    test('Deve verificar o resultado de uma soma', () => {
        expect((0, soma_1.default)(3, 8)).not.toBeCloseTo(12);
    });
});
