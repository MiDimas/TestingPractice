const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle () {
        return $('#loading')
    }
    get usersList () {
        return $('#users-list')
    }
    get userItems () {
        return browser.react$$('User')
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

    open() {
        return super.open('users-test');
    }
}

module.exports = new UsersPage();