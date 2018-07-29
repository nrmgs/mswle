function AS_TextField_h4c9388f192e4740aca4c23148fb5bf0(eventobject, changedtext) {
    if (this.view.Container6PinDot4.TxtFld6PinDot4.text.length == 1) {
        this.view.Container6PinDot4.TxtFld6PinDot4.setFocus(false);
        this.view.Container6PinDot4.TxtFld6PinDot4.skin = "PinDotFilled";
        this.view.Container6PinDot5.TxtFld6PinDot5.setFocus(true);
    } else if (this.view.Container6PinDot4.TxtFld6PinDot4.text.length == 0) {
        this.view.Container6PinDot4.TxtFld6PinDot4.skin = "PinDotFocus";
    }
}