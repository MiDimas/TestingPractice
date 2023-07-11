const UsersPage = require('../pages/users.page');

describe("Тестирование компонента users с асинхронной загрузкой", () => {
    it("Тестирование успешной отрисовки списка пользователей", async () => {
        await UsersPage.loadData();
    })
    it("Тестирование удаления пользователей", async () => {
        await UsersPage.loadData();
        await UsersPage.deleteUser();
    })
})