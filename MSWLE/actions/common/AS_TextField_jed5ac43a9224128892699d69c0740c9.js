function AS_TextField_jed5ac43a9224128892699d69c0740c9(eventobject, changedtext) {
    if (this.view.Container6PinDot1.TxtFld6PinDot1.text.length == 1) {
        this.view.Container6PinDot1.TxtFld6PinDot1.setFocus(false);
        this.view.Container6PinDot1.TxtFld6PinDot1.skin = "PinDotFilled";
        this.view.Container6PinDot2.TxtFld6PinDot2.setFocus(true);
    } else if (this.view.Container6PinDot1.TxtFld6PinDot1.text.length == 0) {
        this.view.Container6PinDot1.TxtFld6PinDot1.skin = "PinDotFocus";
    }
}