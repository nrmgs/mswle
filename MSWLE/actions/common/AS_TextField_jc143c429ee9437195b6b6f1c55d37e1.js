function AS_TextField_jc143c429ee9437195b6b6f1c55d37e1(eventobject, changedtext) {
    if (this.view.Container6PinDot1.TxtFld6PinDot1.text.length == 1) {
        this.view.Container6PinDot1.TxtFld6PinDot1.setFocus(false);
        this.view.Container6PinDot1.TxtFld6PinDot1.skin = "PinDotFilled";
        this.view.Container6PinDot2.TxtFld6PinDot2.setFocus(true);
    } else if (this.view.Container6PinDot1.TxtFld6PinDot1.text.length == 0) {
        this.view.Container6PinDot1.TxtFld6PinDot1.skin = "PinDotFocus";
    }
}