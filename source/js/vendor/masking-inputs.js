const masking = {
  maskedNumber: 'XdDmMyY9',
  maskedLetter: '_',
  maskedInputs: document.querySelectorAll('.masked'),

  init() {
    masking.setUpMasks(masking.maskedInputs);
    masking.maskedInputs = document.querySelectorAll('.masked');
    masking.activateMasking(masking.maskedInputs);
  },

  setUpMasks(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      masking.createShell(inputs[i]);
    }
  },

  createShell(input) {
    let text = '';
    const placeholder = input.getAttribute('data-placeholder');

    input.setAttribute('maxlength', placeholder.length);

    text =
      `<span class="shell">
      <span aria-hidden="true" id="${input.id}Mask">
      <i></i>${placeholder}</span>
      ${input.outerHTML}
      </span>`;

    input.outerHTML = text;
  },

  activateMasking(inputs) {
    for (let i = 0; i < inputs.length; i++) {
      masking.maskedInputs[i].addEventListener('keyup', (e) => {
        masking.handleValueChange(e);
      }, false);
    }
  },

  setValueOfMask(e) {
    const value = e.target.value;
    const placeholder = e.target.getAttribute('data-placeholder');

    return `+7 <i>${value}</i>${placeholder.substr(3 + value.length)}`;
  },

  handleValueChange(e) {
    const id = e.target.getAttribute('id');

    switch (e.keyCode) {
      case 20:
      case 17:
      case 18:
      case 16:
      case 37:
      case 38:
      case 39:
      case 40:
      case 9:
        return;
    }

    document.getElementById(id).value = masking.handleCurrentValue(e);
    document.getElementById(`${id  }Mask`).innerHTML = masking.setValueOfMask(e);
  },

  handleCurrentValue(e) {
    const isCharsetPresent = e.target.getAttribute('data-charset');
    const placeholder = isCharsetPresent || e.target.getAttribute('data-placeholder');
    const value = e.target.value;
    let newValue = '';

    const strippedValueBuffer = value.replace('+7', '');
    const strippedValue = isCharsetPresent ? strippedValueBuffer.replace(/\W/g, '') : strippedValueBuffer.replace(/\D/g, '');

    for (let i = 0, j = 0; i < placeholder.length; i++) {
      const isInt = !isNaN(parseInt(strippedValue[j]));
      const isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
      const matchesNumber = masking.maskedNumber.indexOf(placeholder[i]) >= 0;
      const matchesLetter = masking.maskedLetter.indexOf(placeholder[i]) >= 0;

      if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {

        newValue += strippedValue[j++];

      } else if ((!isCharsetPresent && !isInt && matchesNumber) || (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
        return newValue;

      } else {
        newValue += placeholder[i];
      }
      if (strippedValue[j] == undefined) {
        break;
      }
    }
    if (e.target.getAttribute('data-valid-example')) {
      return masking.validateProgress(e, newValue);
    }
    return newValue;
  },

  validateProgress(e, value) {
    var validExample = e.target.getAttribute('data-valid-example'),
      pattern = new RegExp(e.target.getAttribute('pattern')),
      placeholder = e.target.getAttribute('data-placeholder'),
      l = value.length, testValue = '';

    if (l == 1 && placeholder.toUpperCase().substr(0,2) == 'MM') {
      if(value > 1 && value < 10) {
        value = `0${  value}`;
      }
      return value;
    }
    for ( i = l; i >= 0; i--) {
      testValue = value + validExample.substr(value.length);
      if (pattern.test(testValue)) {
        return value;
      } else {
        value = value.substr(0, value.length-1);
      }
    }

    return value;
  },

  errorOnKeyEntry : function () {
  }
};

export {masking};
