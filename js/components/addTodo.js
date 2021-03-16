import Alert from './alert.js';

export default class AddTodo {
    constructor() {
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.btn = document.getElementById('add');

        this.alert = new Alert('alert');
    }

    onclick(callBack) {
        this.btn.onclick = () => {
            if (this.title.value === '' || this.description.value === '') {
                this.alert.show('Title and description are required');
            } else {
                this.alert.hide();
                callBack(this.title.value, this.description.value);
            }
        }
    }
}