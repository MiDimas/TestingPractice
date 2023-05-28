import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
describe( 'Тестирование App', () => {
    beforeEach(() => {
        render(<App />);

    })
    test('render react h1 element', () => {
        const hElement = screen.getByText(/hello world/i);
        expect(hElement).toBeInTheDocument();
    });
    test('render react button element', () => {
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
    test('render react input element', () => {
        const inputElement = screen.getByPlaceholderText(/input value/i);
        expect(inputElement).toBeInTheDocument();
        // screen.debug();
    });
    test('Проверка на отсутствие элемента на странице', () => {
        const hello2World = screen.queryByText(/hello2/i);
        expect(hello2World).toBeNull();
    })
    test('Проверка на aсинхронную отрисовку элемента', async () => {
        screen.debug();
        const data = await screen.findByText(/data/i);
        expect(data).toBeInTheDocument();
        screen.debug();
    })
    test('Проверка на стиль текста в элементе', async () => {
        const data = await screen.findByText(/data/i);
        expect(data).toHaveStyle({color: "red"});
    })
    test('Тестирование нажатия на кнопку и отрисовки по тогглу элемента', () => {
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
    })
})

