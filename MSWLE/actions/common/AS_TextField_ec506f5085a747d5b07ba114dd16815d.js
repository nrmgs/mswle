function AS_TextField_ec506f5085a747d5b07ba114dd16815d(eventobject, changedtext) {
    if (this.view.Container6PinDot2.TxtFld6PinDot2.text.length == 1) {
        this.view.Container6PinDot2.TxtFld6PinDot2.setFocus(false);
        this.view.Container6PinDot2.TxtFld6PinDot2.skin = "PinDotFilled";
        this.view.Container6PinDot3.TxtFld6PinDot3.setFocus(true);
    } else if (this.view.Container6PinDot2.TxtFld6PinDot2.text.length == 0) {
        this.view.Container6PinDot2.TxtFld6PinDot2.skin = "PinDotFocus";
    }
}