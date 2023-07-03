import {fireEvent, render, screen} from "@testing-library/react";
import {renderWithRouter} from "../../helpers/renderWithRouter";
import Navbar from "./Navbar";

describe("Navbar testing", () => {
    beforeEach(() => {
        renderWithRouter(<Navbar />);
    })
    test("test main link", () => {
        const mainLink = screen.getByTestId('main-link');
        fireEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();

    });
    test('test about link', () => {
        const aboutLink = screen.getByTestId('about-link');
        fireEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })
    test('test users link', () => {
        const usersLink = screen.getByTestId('users-link');
        fireEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })
});