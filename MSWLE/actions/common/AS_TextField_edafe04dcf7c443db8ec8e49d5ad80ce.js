function AS_TextField_edafe04dcf7c443db8ec8e49d5ad80ce(eventobject, changedtext) {
    if (this.view.Container6PinDot2.TxtFld6PinDot2.text.length == 1) {
        this.view.Container6PinDot2.TxtFld6PinDot2.setFocus(false);
        this.view.Container6PinDot2.TxtFld6PinDot2.skin = "PinDotFilled";
        this.view.Container6PinDot3.TxtFld6PinDot3.setFocus(true);
    } else if (this.view.Container6PinDot2.TxtFld6PinDot2.text.length == 0) {
        this.view.Container6PinDot2.TxtFld6PinDot2.skin = "PinDotFocus";
    }
}