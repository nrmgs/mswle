function AS_TextField_j16cf923514b4b3fa64a20611d737d3e(eventobject, changedtext) {
    if (this.view.Container6PinDot3.TxtFld6PinDot3.text.length == 1) {
        this.view.Container6PinDot3.TxtFld6PinDot3.setFocus(false);
        this.view.Container6PinDot3.TxtFld6PinDot3.skin = "PinDotFilled";
        this.view.Container6PinDot4.TxtFld6PinDot4.setFocus(true);
    } else if (this.view.Container6PinDot3.TxtFld6PinDot3.text.length == 0) {
        this.view.Container6PinDot3.TxtFld6PinDot3.skin = "PinDotFocus";
    }
}