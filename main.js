var richTextFormat = 
"{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang1033{\\fonttbl{\\f0\\fswiss\\fprq2\\fcharset0 Arial;}} {\\colortbl ;\\red0\\green0\\blue0;\\red0\\green0\\blue128;} \\viewkind4\\uc1\\pard\\hyphpar0\\sl270\\slmult0\\qj\\expndtw-3\\b\\f0\\fs20 {\\&lt;}<logo>{\\&gt;}\\par NAMED INSURED:  <asegurado>\\par \\par \\pard\\hyphpar0\\sl270\\slmult0\\qc\\cf1 MARITAL ESTATE EXTENSION \\b0\\par \\pard\\hyphpar0\\sl270\\slmult0\\qj\\par \\pard\\sl270\\slmult0\\qj\\cf0\\expndtw0 In consideration of the premium charged, it is hereby understood and agreed that:\\par \\cf1\\par \\cf0 Subject otherwise to the terms hereof, this policy shall cover l\\b oss\\b0  arising from any \\b claim\\b0  made against the lawful spouse or \\cf2 domestic partner\\cf0  (whether such status is derived by reason of statutory law, common law or otherwise of any applicable jurisdiction in the world) of an Individual Insured for \\b claims\\b0  arising solely out of his or her capacity as the spouse of an Individual Insured, including such c\\b laims\\b0  that seek damages recoverable from marital community property, property jointly held by the Individual Insured and the spouse, or property transferred from the Individual Insured to the spouse; provided, however, that this extension shall not afford coverage for any \\b claim\\b0  for any actual or alleged \\b wrongful acts\\b0  of the spouse and that this policy shall apply only to actual or alleged \\b wrongful acts\\b0  of an Individual Insured, subject to the policy`s terms and conditions.\\par \\pard\\hyphpar0\\sl270\\slmult0\\qj\\expndtw-3\\par \\par \\par \\expndtw0\\b NOTHING HEREIN CONTAINED SHALL BE HELD TO VARY, ALTER, WAIVE OR CHANGE ANY OF THE TERMS, LIMITS OR CONDITIONS OF THE POLICY, EXCEPT AS HEREINABOVE SET FORTH.\\par \\expndtw-3\\b0\\par This endorsement is effective on\\tab\\b <fec_vig_desde>.\\b0  \\ul\\par \\par \\ulnone Attached to and forming part of Policy No. \\b <prefix> - <policy>\\b0  of the \\b AIG INSURANCE COMPANY - PUERTO RICO.\\par \\pard\\expndtw0\\par } </policy></prefix></fec_vig_desde></asegurado></logo>";

var textPlain = convertToPlain(richTextFormat);
console.log(textPlain); 

function parseSpecial(rtf) {
    let matches = rtf.match(/\\'[a-f0-9]{2}/g);
    let special = [... new Set(matches)];
    special.forEach(hex => {
        let dec = parseInt(hex.replace("\\'", ''), 16);
        rtf = rtf.replaceAll(hex, String.fromCharCode(dec));
    });
    return rtf;
}

function convertToPlain(rtf) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "").trim();
    return parseSpecial(rtf);
}