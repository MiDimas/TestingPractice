const Page = require('./page');

class HelloPage extends Page {
    get input () {
        return $('#helloInput');
    }

    get toggle () {
        return $('#helloBtn');
    }

    get title () {
        return $('#helloTitle');
    }
    async toggleTittleWithInput (text) {
        await this.input.setValue(text)
        await this.toggle.click();
    }


    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();