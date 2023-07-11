const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle () {
        return $('#loading')
    }
    get usersList () {
        return $('#users-list')
    }
    get userItems () {
        return $$('.user-item')
    }

    async loadData () {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 4000});
            await this.usersList.waitForDisplayed({timeout: 2000});
        }
        catch (e) {
            throw new Error('Не удалось загрузить список пользователей!')
        }


    }

    async deleteUser () {
        try {
            const usersCount = await this.userItems.length;
            if (!usersCount){
                throw new Error('Пользователи не найдены');
            }
            await this.userItems[0].$('#delete-user').click();
            const countUsersAfterDelete = await this.userItems.length;
            if (usersCount - countUsersAfterDelete !== 1) {
                throw new Error('Пользователь не был удален или удален более че 1 пользователь')
            }
        }
        catch (e) {
            throw new Error('Произошла ошибка при удалении пользователя' + e.message);
        }
    }

    open() {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();