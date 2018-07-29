function AS_TextField_e0fc377f82d443938bde437a3ee3d783(eventobject, changedtext) {
    if (this.view.Container6PinDot6.TxtFld6PinDot6.text.length == 1) {
        this.view.Container6PinDot6.TxtFld6PinDot6.setFocus(false);
        this.view.Container6PinDot6.TxtFld6PinDot6.skin = "PinDotFilled";
    } else if (this.view.Container6PinDot6.TxtFld6PinDot6.text.length == 0) {
        this.view.Container6PinDot6.TxtFld6PinDot6.skin = "PinDotFocus";
    }
}