const UsersPage = require('../pages/users.page');

describe("Теыстирование компонента users с асинхронной загрузкой", () => {
    it("Тестирование успешной отрисовки списка пользователей", async () => {
        await UsersPage.loadData();
    })
})