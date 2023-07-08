const HelloPage = require('../pages/hello.page');

describe("Hello tests", () => {
    it('Тестирование ввода корректных данных и нажатия кнопки', async () => {
        await HelloPage.open();
        await HelloPage.toggleTittleWithInput('hello');
        await expect(HelloPage.title).toBeExisting();
        await HelloPage.toggle.click();
        await expect(HelloPage.title).not.toBeExisting();
    })
})