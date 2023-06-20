import { findQuestion } from "./findQuestion";

const question = [
    { question_id: 1 }
];

describe('Helper: findQuestion', () => {

    test('Recibe los argumentos correctos y devuelve el objeto correspondiente', () => {

        const result = findQuestion(question, 1);

        expect(typeof result).toBe('object');

    });

    test('Tanto si no recibe el id como si no existe en el array, devuelve undefined', () => {

        const result = findQuestion(question);

        expect(result).toBe(undefined);

    });

    test('Si el tipo de dato del id es "string" y existe, también devuelve el objeto correspondiente', () => {

        const result = findQuestion(question, '1');

        expect(result).toStrictEqual({ question_id: 1 })

    });

    test('Si el array está vacío, devuelve undefined', () => {

        const result = findQuestion([], 1);

        expect(result).toBe(undefined);

    });

    test('Si hay varios objetos con el mismo id, devuelve el primero que encuentra', () => {

        const result = findQuestion([ {question_id: 1}, {question_id: 1} ], 1);

        expect(result).toStrictEqual({ question_id: 1 });

    });

});