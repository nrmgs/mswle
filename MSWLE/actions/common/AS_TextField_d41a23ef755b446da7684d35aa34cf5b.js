function AS_TextField_d41a23ef755b446da7684d35aa34cf5b(eventobject, changedtext) {
    if (this.view.Container6PinDot5.TxtFld6PinDot5.text.length == 1) {
        this.view.Container6PinDot5.TxtFld6PinDot5.setFocus(false);
        this.view.Container6PinDot5.TxtFld6PinDot5.skin = "PinDotFilled";
        this.view.Container6PinDot6.TxtFld6PinDot6.setFocus(true);
    } else if (this.view.Container6PinDot5.TxtFld6PinDot5.text.length == 0) {
        this.view.Container6PinDot5.TxtFld6PinDot5.skin = "PinDotFocus";
    }
}