"use strict";
exports.__esModule = true;
var tts = {
    ttPAYMENT: 0,
    ttESCROW_CREATE: 1,
    ttESCROW_FINISH: 2,
    ttACCOUNT_SET: 3,
    ttESCROW_CANCEL: 4,
    ttREGULAR_KEY_SET: 5,
    ttOFFER_CREATE: 7,
    ttOFFER_CANCEL: 8,
    ttTICKET_CREATE: 10,
    ttSIGNER_LIST_SET: 12,
    ttPAYCHAN_CREATE: 13,
    ttPAYCHAN_FUND: 14,
    ttPAYCHAN_CLAIM: 15,
    ttCHECK_CREATE: 16,
    ttCHECK_CASH: 17,
    ttCHECK_CANCEL: 18,
    ttDEPOSIT_PREAUTH: 19,
    ttTRUST_SET: 20,
    ttACCOUNT_DELETE: 21,
    ttHOOK_SET: 22,
    ttNFTOKEN_MINT: 25,
    ttNFTOKEN_BURN: 26,
    ttNFTOKEN_CREATE_OFFER: 27,
    ttNFTOKEN_CANCEL_OFFER: 28,
    ttNFTOKEN_ACCEPT_OFFER: 29
};
var calculateHookOn = function (arr) {
    var start = '0x000000003e3ff5bf';
    arr.forEach(function (n) {
        var v = BigInt(start);
        console.log(BigInt(tts[n]));
        v ^= (BigInt(1) << BigInt(tts[n]));
        var s = v.toString(16);
        var l = s.length;
        if (l < 16)
            s = '0'.repeat(16 - l) + s;
        s = '0x' + s;
        start = s;
    });
    return start.substring(2);
};
exports["default"] = calculateHookOn;

calculateHookOn(['ttNFTOKEN_MINT']);
