function Switch(element) {

    this.element = element;

    this.lastChecked = element.querySelector('.radio-control__label--active');

    this.element.addEventListener('click', function (ev) {

        if (ev.target.classList.contains('radio-control__label')) {

            var checkedLabel = ev.target;

            this.lastChecked.classList.remove('radio-control__label--active');
            checkedLabel.classList.add('radio-control__label--active');

            this.lastChecked = checkedLabel;
        }
    }.bind(this));
}

var priceSwitch = new Switch(document.body.querySelector('.block-price'));
var feedbackSwitch = new Switch(document.body.querySelector('.block-feedback'));
