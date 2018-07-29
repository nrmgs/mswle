define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerSegSiteLeft **/
    AS_Button_g0c65d58a35b4ca09615817a1330d3b2: function AS_Button_g0c65d58a35b4ca09615817a1330d3b2(eventobject) {
        var self = this;
        return leftSelSite.call(this);
    },
    /** onClick defined for headerSegSiteRIght **/
    AS_Button_e96a43f7e1db4ba3b594b757e9f276b1: function AS_Button_e96a43f7e1db4ba3b594b757e9f276b1(eventobject) {
        var self = this;
        return rightSelSite.call(this);
    },
    /** onTextChange defined for txtSearchSeg **/
    AS_TextField_d151545e6827498eb3a8e51fec76724c: function AS_TextField_d151545e6827498eb3a8e51fec76724c(eventobject, changedtext) {
        var self = this;
        return onTextChanSitesSearch.call(this);
    },
    /** preShow defined for frmSite **/
    AS_Form_adc66677a07747279efbe4cd81772d80: function AS_Form_adc66677a07747279efbe4cd81772d80(eventobject) {
        var self = this;
        flxHdrTitle.lblHdrTitle.text = "Sites";
        flxHdrTitle.flxSettingBtn.setVisibility(false);
        frmSite.txtSearchSeg.text = "";
        frmSite.segSites.setData([]);
        leftSelSite();
    }
});