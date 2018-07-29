function AS_TextField_jad3ee6456be47909f3ab234435c981b(eventobject, changedtext) {
    if (this.view.Container6PinDot2.TxtFld6PinDot2.text.length == 1) {
        this.view.Container6PinDot2.TxtFld6PinDot2.setFocus(false);
        this.view.Container6PinDot2.TxtFld6PinDot2.skin = "PinDotFilled";
        this.view.Container6PinDot3.TxtFld6PinDot3.setFocus(true);
    } else if (this.view.Container6PinDot2.TxtFld6PinDot2.text.length == 0) {
        this.view.Container6PinDot2.TxtFld6PinDot2.skin = "PinDotFocus";
    }
}