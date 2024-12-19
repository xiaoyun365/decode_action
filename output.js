//Thu Dec 19 2024 04:43:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x1cae72 = _0xc349;
(function (_0x48fdde, _0x1855e0) {
  const _0x117236 = _0xc349;
  const _0x3487a9 = _0x48fdde();
  while (true) {
    try {
      const _0x5c4a10 = parseInt(_0x117236(352)) / 1 + -parseInt(_0x117236(236)) / 2 * (-parseInt(_0x117236(340)) / 3) + parseInt(_0x117236(445)) / 4 + -parseInt(_0x117236(213)) / 5 * (parseInt(_0x117236(217)) / 6) + parseInt(_0x117236(309)) / 7 + -parseInt(_0x117236(372)) / 8 + parseInt(_0x117236(354)) / 9;
      if (_0x5c4a10 === _0x1855e0) {
        break;
      } else {
        _0x3487a9.push(_0x3487a9.shift());
      }
    } catch (_0x503733) {
      _0x3487a9.push(_0x3487a9.shift());
    }
  }
})(_0x35f5, 514690);
const initScript = require(_0x1cae72(365) + _0x1cae72(255));
const {
  $,
  notify,
  sudojia,
  checkUpdate
} = initScript(_0x1cae72(241));
const crypto = require(_0x1cae72(387));
const mxbcList = process[_0x1cae72(358)][_0x1cae72(433)] ? process[_0x1cae72(358)][_0x1cae72(433)][_0x1cae72(382)](/[\n&]/) : [];
let message = "";
const currentVersion = _0x1cae72(346);
const baseUrl = _0x1cae72(192) + _0x1cae72(416) + "t";
const appId = _0x1cae72(404) + _0x1cae72(253) + _0x1cae72(300) + "cb";
const headers = {
  Host: _0x1cae72(332) + _0x1cae72(283),
  app: _0x1cae72(185),
  appchannel: _0x1cae72(175),
  "User-Agent": sudojia[_0x1cae72(327) + _0x1cae72(321)](),
  "Content-Type": _0x1cae72(146) + _0x1cae72(240),
  Accept: _0x1cae72(444),
  Referer: _0x1cae72(406) + _0x1cae72(272) + _0x1cae72(431) + _0x1cae72(360) + _0x1cae72(342) + _0x1cae72(284) + _0x1cae72(295),
  "Accept-Encoding": _0x1cae72(199) + _0x1cae72(369)
};
!(async () => {
  const _0x390773 = _0x1cae72;
  const _0x5d14e6 = {
    TuRiV: function (_0x30bf4d, _0x282257, _0x6c3ea6, _0x24fc70, _0x251309) {
      return _0x30bf4d(_0x282257, _0x6c3ea6, _0x24fc70, _0x251309);
    },
    rEqRa: _0x390773(194),
    FLVAA: _0x390773(235),
    jWSvt: function (_0x565d8f, _0x1664ff) {
      return _0x565d8f < _0x1664ff;
    },
    LrPNm: function (_0x3339b0, _0x1cae5d) {
      return _0x3339b0 + _0x1cae5d;
    },
    JUGhS: _0x390773(198) + "en",
    LakAH: function (_0x3982fd) {
      return _0x3982fd();
    }
  };
  await _0x5d14e6[_0x390773(196)](checkUpdate, $[_0x390773(325)], currentVersion, notify, mxbcList);
  console[_0x390773(173)](_0x390773(429) + _0x390773(345) + (headers[_0x5d14e6[_0x390773(308)]] || headers[_0x5d14e6[_0x390773(417)]]));
  for (let _0x43fb81 = 0; _0x5d14e6[_0x390773(318)](_0x43fb81, mxbcList[_0x390773(151)]); _0x43fb81++) {
    const _0x39b9a8 = _0x5d14e6[_0x390773(239)](_0x43fb81, 1);
    headers[_0x5d14e6[_0x390773(443)]] = mxbcList[_0x43fb81];
    $[_0x390773(438)] = true;
    console[_0x390773(173)](_0x390773(435) + _0x39b9a8 + "]个" + $[_0x390773(325)] + _0x390773(341));
    message += _0x390773(152) + $[_0x390773(325)] + _0x390773(373) + _0x39b9a8 + _0x390773(297);
    await _0x5d14e6[_0x390773(238)](main);
    await $[_0x390773(399)](sudojia[_0x390773(251) + _0x390773(244)](2000, 2500));
  }
  message && (await notify[_0x390773(177)]("「" + $[_0x390773(325)] + "」", "" + message));
})()[_0x1cae72(205)](_0x1aefac => $[_0x1cae72(310)](_0x1aefac))[_0x1cae72(329)](() => $[_0x1cae72(153)]());
async function main() {
  const _0x37ca09 = _0x1cae72;
  const _0x55bd05 = {
    FsEUg: _0x37ca09(214) + "1",
    HMFen: function (_0xf68fec) {
      return _0xf68fec();
    },
    WSqVm: _0x37ca09(161)
  };
  const _0x573d0a = _0x55bd05[_0x37ca09(269)][_0x37ca09(382)]("|");
  let _0x38990e = 0;
  while (true) {
    switch (_0x573d0a[_0x38990e++]) {
      case "0":
        await $[_0x37ca09(399)](sudojia[_0x37ca09(251) + _0x37ca09(244)](1000, 2000));
        continue;
      case "1":
        await _0x55bd05[_0x37ca09(378)](getPoints);
        continue;
      case "2":
        await $[_0x37ca09(399)](sudojia[_0x37ca09(251) + _0x37ca09(244)](1000, 2000));
        continue;
      case "3":
        await _0x55bd05[_0x37ca09(378)](signIn);
        continue;
      case "4":
        await _0x55bd05[_0x37ca09(378)](getUserInfo);
        continue;
      case "5":
        if (!$[_0x37ca09(438)]) {
          console[_0x37ca09(212)](_0x55bd05[_0x37ca09(279)]);
          return;
        }
        continue;
    }
    break;
  }
}
async function getUserInfo() {
  const _0x435ad8 = _0x1cae72;
  const _0x25d421 = {
    kRqII: function (_0x3acae1) {
      return _0x3acae1();
    },
    EeMku: function (_0x301ae7, _0x1ebff8) {
      return _0x301ae7(_0x1ebff8);
    },
    dFAMH: _0x435ad8(249),
    SNjZG: function (_0x5ed26a, _0x15571c) {
      return _0x5ed26a !== _0x15571c;
    }
  };
  try {
    const _0xce7492 = await sudojia[_0x435ad8(274) + "t"](baseUrl + (_0x435ad8(305) + _0x435ad8(392) + _0x435ad8(389) + _0x435ad8(292) + _0x435ad8(347) + _0x435ad8(398) + _0x435ad8(413)) + _0x25d421[_0x435ad8(218)](ts13) + _0x435ad8(193) + _0x25d421[_0x435ad8(367)](getSHA256withRSA, _0x435ad8(421) + appId + _0x435ad8(413) + _0x25d421[_0x435ad8(218)](ts13)), _0x25d421[_0x435ad8(162)], headers);
    if (_0x25d421[_0x435ad8(376)](0, _0xce7492[_0x435ad8(323)])) {
      console[_0x435ad8(212)](_0xce7492[_0x435ad8(208)]);
      $[_0x435ad8(438)] = false;
      return;
    }
    console[_0x435ad8(173)](_0xce7492[_0x435ad8(243)][_0x435ad8(232) + "e"] + _0x435ad8(405));
    message += _0x435ad8(188) + _0xce7492[_0x435ad8(243)][_0x435ad8(232) + "e"] + "\n";
  } catch (_0x430ddb) {
    console[_0x435ad8(212)](_0x435ad8(335) + "常：" + _0x430ddb);
    $[_0x435ad8(438)] = false;
  }
}
function _0xc349(_0x428b50, _0x41db4d) {
  const _0x307e27 = _0x35f5();
  _0xc349 = function (_0x554816, _0x19fa93) {
    _0x554816 = _0x554816 - 144;
    let _0x25d54a = _0x307e27[_0x554816];
    return _0x25d54a;
  };
  return _0xc349(_0x428b50, _0x41db4d);
}
async function signIn() {
  const _0x35897b = _0x1cae72;
  const _0x1b5be5 = {
    TeDwK: function (_0x32c69e) {
      return _0x32c69e();
    },
    DwYkk: function (_0x4eca9c, _0x5dc086) {
      return _0x4eca9c(_0x5dc086);
    },
    SQmjL: function (_0x2e0f4f) {
      return _0x2e0f4f();
    },
    wlJNn: _0x35897b(249),
    QhBJc: function (_0x4508b4, _0x8478a3) {
      return _0x4508b4 !== _0x8478a3;
    }
  };
  try {
    const _0x5a584f = await sudojia[_0x35897b(274) + "t"](baseUrl + (_0x35897b(305) + _0x35897b(158) + _0x35897b(285)) + appId + _0x35897b(413) + _0x1b5be5[_0x35897b(202)](ts13) + _0x35897b(193) + _0x1b5be5[_0x35897b(350)](getSHA256withRSA, _0x35897b(421) + appId + _0x35897b(413) + _0x1b5be5[_0x35897b(428)](ts13)), _0x1b5be5[_0x35897b(225)], headers);
    if (_0x1b5be5[_0x35897b(395)](0, _0x5a584f[_0x35897b(323)])) {
      console[_0x35897b(212)](_0x35897b(432) + _0x5a584f[_0x35897b(208)]);
      return;
    }
    console[_0x35897b(173)](_0x35897b(278) + _0x5a584f[_0x35897b(243)][_0x35897b(362) + _0x35897b(246)]);
    console[_0x35897b(173)](_0x35897b(189) + _0x5a584f[_0x35897b(243)][_0x35897b(333) + _0x35897b(293)] + "天");
    message += _0x35897b(408) + _0x5a584f[_0x35897b(243)][_0x35897b(333) + _0x35897b(293)] + "天\n";
  } catch (_0x25cc88) {
    console[_0x35897b(212)](_0x35897b(411) + _0x25cc88);
  }
}
async function getPoints() {
  const _0x13e275 = _0x1cae72;
  const _0x507a45 = {
    tsjmK: function (_0x7a6a8) {
      return _0x7a6a8();
    },
    AfZmY: function (_0x5da6a4, _0x14493a) {
      return _0x5da6a4(_0x14493a);
    },
    EbOPB: function (_0xaf6fe6) {
      return _0xaf6fe6();
    },
    RNeGq: _0x13e275(249),
    ilGSz: function (_0x420bb6, _0x284aec) {
      return _0x420bb6 !== _0x284aec;
    }
  };
  try {
    const _0x5f192a = await sudojia[_0x13e275(274) + "t"](baseUrl + (_0x13e275(305) + _0x13e275(392) + _0x13e275(281)) + appId + _0x13e275(413) + _0x507a45[_0x13e275(339)](ts13) + _0x13e275(193) + _0x507a45[_0x13e275(256)](getSHA256withRSA, _0x13e275(421) + appId + _0x13e275(413) + _0x507a45[_0x13e275(168)](ts13)), _0x507a45[_0x13e275(289)], headers);
    if (_0x507a45[_0x13e275(307)](0, _0x5f192a[_0x13e275(323)])) {
      console[_0x13e275(212)](_0x5f192a[_0x13e275(208)]);
      return;
    }
    console[_0x13e275(173)](_0x13e275(294) + _0x5f192a[_0x13e275(243)][_0x13e275(375) + _0x13e275(437)]);
    message += _0x13e275(294) + _0x5f192a[_0x13e275(243)][_0x13e275(375) + _0x13e275(437)] + "\n\n";
  } catch (_0x220b88) {
    console[_0x13e275(212)](_0x13e275(207) + "：" + _0x220b88);
  }
}
function _0x35f5() {
  const _0x3177cf = ["账号[", "ddAMmdYLTG", "customerPo", "SNjZG", "5Y2\nHvDqh4", "HMFen", "VquVr7BoXF", "kwkHf", "xrOhwJtc0F", "split", "RSA-SHA256", "/+AJq3iC\n5", "i8CBmIDszB", "ZJMkVbO19r", "crypto", "Wj0Ue13qwX", "o?appId=d8", "xUcrTgECgY", "zUytC+VE/3", "stomer/inf", "\n-----BEGI", "tvq3cR7pR4", "QhBJc", "D PRIVATE ", "E5uErBNn\nO", "163e122ecb", "wait", "N PRIVATE ", "9YvaPwArMb", "6vWqG8rI\nS", "w0BAQEFAAS", "d82be6bbc1", "登陆成功~", "https://se", "kuXo9sOP\nI", "签到成功，已连续签到", "Q9L\nL6lIJS", "9PcG7klJXf", "签到时发生异常：", "lwPz3bIR16", "&t=", "UALX9UgNDT", "w7368vatr0", "sa.mxbc.ne", "FLVAA", "Ydn/L+TyxW", "+9s\ntq/Nws", "Pbj5ESeII+", "appId=", "e+daLKkDeZ", "PJoxvGECvz", "phnhqjke7H", "ZEuBKy5NkD", "Prz\nugJj7n", "getTime", "SQmjL", "\n已随机分配 Use", "NF4cvEwclr", "t.com/wx76", "签到失败：", "MXBC_TOKEN", "9QhKnysMGh", "\n*****第[", "MEXIpckuZk", "int", "isLogin", "sJCqLJqxKP", "KEY-----\n", "E+vfrN3oRI", "5TN2lJhuyC", "JUGhS", "*/*", "343372FbZTQV", "ovx17YriTq", "0Ff36KVdaH", "FMZYWqO6+L", "KnE\ndOGyw/", "HMTfDb1G\nI", "applicatio", "EQT4YDzCDP", "e1FLTLMD5g", "3QVkzwT+xW", "tPK\nG1Wztk", "length", "📣====", "done", "lAoEFgF9rl", "v0E5vwADAC", "jrReznDMOT", "FJWHRUiMK7", "stomer/sig", "5HavGC5kYE", "upS50aGKGq", "Token 失效", "dFAMH", "7WIRh2Codj", "RMw58kfFys", "VqXQhHRbqr", "zmfTECgYAT", "WGiygesl3C", "EbOPB", "8cYEA5VmQy", "U+H6NpWvAT", "etgPFE+SV7", "WLn6wxDxQd", "log", "AQKBgQCE\n6", "xiaomi", "h94t6nzBHT", "sendNotify", "H+gOJvPwHj", "Sdj\nECmvYJ", "uqYA1whrUn", "x+sgMUS7kS", "UjsUT", "tFisoFH90J", "cHEuM1xp4/", "mxbc", "TdtFCksYG0", "ZWxSHjK9/K", "用户：", "已连续签到", "jHLuYSpQsc", "X2bzASsu9H", "https://mx", "&sign=", "user-agent", "ADLvn/6Nwd", "TuRiV", "Eloqd81yGg", "Access-Tok", "gzip, defl", "L70/xrtEPp", "csPK5ebE\n9", "TeDwK", "QrKfv9X4/h", "JGTfX6rE6z", "catch", "toString", "获取雪王币时发生异常", "msg", "VztZ/KOFsR", "M5eO9Y8m\n1", "jVW\nnUku8o", "error", "4595165jkmKCX", "4|5|2|3|0|", "r86pQYBx/n", "2N79MyKySc", "6Pyejdx", "kRqII", "tgI8tXdDXM", "m+YxaECgYE", "rfQ\nZNDBLC", "R/dAc1mL5u", "VHkcoALzQt", "M4WsRWoWUx", "wlJNn", "LEyFPir45z", "BAAECggEBA", "a8jZyjmanM", "hgxKN1VU6/", "w/dqwQM3ji", "cCm13mqJ3z", "mobilePhon", "QKBgQDGYGE", "flE+KubJZo", "User-Agent", "507914ywSRyb", "dttGiXuZry", "LakAH", "LrPNm", "n/json", "蜜雪冰城", "U6zn1dGdy4", "data", "ait", "2JoqIfm5YP", "oint", "z5OMi9iFk3", "EA/Yj8BDfx", "get", "replace", "getRandomW", "cW/c3K1BT/", "da11eb9dd0", "iSuYPGnzji", "nitScript", "AfZmY", "krA/TtWbfz", "KXFVJMjGg+", "Cw8J+Cokgn", "/S/Y1zpsig", "7T/zpR9279", "round", "4e791/q1jU", "ToI\n576MY+", "IIEvwIBADA", "2h+ILTFQ\nb", "Du3CB0S6d4", "SrrwItQf0Q", "FsEUg", "wIz\nyPz/+b", "update", "rvicewecha", "Ybh0h2Fa/f", "sendReques", "DBZkfSSEcN", "ivWTyPVsM1", "N2teBFUJuD", "签到成功，雪王币+", "WSqVm", "ziqLCwstdQ", "o?appId=", "TxKYtiPHpW", "net", "age-frame.", "nin?appId=", "qqy\n5Ur/13", "uuUH4mc6Ht", "KtGNVFeCCJ", "RNeGq", "9oAj0wA7wj", "Xnh0UVS6pZ", "2be6bbc1da", "rowth", "当前雪王币：", "html", "g6m7ucBK\nj", "]====📣\n", "x/hQJNQszL", "CBKkwggSlA", "00163e122e", "NBgkqhkiG9", "p+El7/06AX", "sign", "7AJ56Z+joq", "/api/v1/cu", "bet4YLg+Qi", "ilGSz", "rEqRa", "6812981nZubsy", "logErr", "X4SFyodv8A", "MW/Y3DRAgM", "xm4KFZewx9", "NvlxNLKanc", "typUdHZJKl", "HeJc5RIjRP", "Ar3sgVNbr5", "jWSvt", "l0OKR9s9S1", "w4c7G97AyB", "serAgent", "0djOD7HCB2", "code", "I2G4+UFP+8", "name", "MgbWYYPJ0T", "getRandomU", "4SL\nSpHKO9", "finally", "NC1Jb+YCiE", "9S/OkFu+kE", "mxsa.mxbc.", "ruleValueG", "DAoehbH6lT", "获取用户信息时发生异", "hwbqDLmfoH", "fntEhAwiSZ", "+xvq/SAZoi", "tsjmK", "3EKsUHH", "账号*****", "d107/123/p", "CwoJp4R/Ua", "BbObgcbC9W", "r-Agent\n\n", "1.0.0", "11eb9dd000", "xRPgf7eJOe", "gEAAoIBAQC", "DwYkk", "clgWuWDRWv", "299353vnCRyk", "lh6XSDks\n5", "5878656uswOeK", "base64", "ypDYY59hLl", "KEY-----\nM", "env", "zov30du235", "96c66d2245", "A9hvDgX9\nw", "ruleValueP", "==\n-----EN", "A7027a0aZ4", "../utils/i", "tNRNh7TdLg", "EeMku", "createSign", "ate, br", "rTLIVzmvGP", "/OGKivE+56", "6655176pkTsUT"];
  _0x35f5 = function () {
    return _0x3177cf;
  };
  return _0x35f5();
}
const privateKeyStr = _0x1cae72(393) + _0x1cae72(400) + _0x1cae72(357) + _0x1cae72(265) + _0x1cae72(301) + _0x1cae72(403) + _0x1cae72(299) + _0x1cae72(349) + _0x1cae72(315) + _0x1cae72(409) + _0x1cae72(424) + _0x1cae72(351) + _0x1cae72(359) + _0x1cae72(231) + _0x1cae72(280) + _0x1cae72(407) + _0x1cae72(176) + _0x1cae72(180) + _0x1cae72(203) + _0x1cae72(149) + _0x1cae72(234) + _0x1cae72(422) + _0x1cae72(211) + _0x1cae72(155) + _0x1cae72(337) + _0x1cae72(414) + _0x1cae72(420) + _0x1cae72(209) + _0x1cae72(145) + _0x1cae72(222) + _0x1cae72(273) + _0x1cae72(348) + _0x1cae72(167) + _0x1cae72(388) + _0x1cae72(410) + _0x1cae72(264) + _0x1cae72(364) + _0x1cae72(434) + _0x1cae72(186) + _0x1cae72(412) + _0x1cae72(314) + _0x1cae72(266) + _0x1cae72(312) + _0x1cae72(227) + _0x1cae72(204) + _0x1cae72(191) + _0x1cae72(229) + _0x1cae72(200) + _0x1cae72(328) + _0x1cae72(260) + _0x1cae72(215) + _0x1cae72(313) + _0x1cae72(302) + _0x1cae72(322) + _0x1cae72(384) + _0x1cae72(430) + _0x1cae72(439) + _0x1cae72(254) + _0x1cae72(401) + _0x1cae72(447) + _0x1cae72(164) + _0x1cae72(377) + _0x1cae72(181) + _0x1cae72(147) + _0x1cae72(154) + _0x1cae72(291) + _0x1cae72(394) + _0x1cae72(361) + _0x1cae72(242) + _0x1cae72(436) + _0x1cae72(336) + _0x1cae72(316) + _0x1cae72(163) + _0x1cae72(171) + _0x1cae72(179) + _0x1cae72(306) + _0x1cae72(319) + _0x1cae72(344) + _0x1cae72(390) + _0x1cae72(248) + _0x1cae72(201) + _0x1cae72(277) + _0x1cae72(184) + _0x1cae72(183) + _0x1cae72(386) + _0x1cae72(374) + _0x1cae72(276) + _0x1cae72(419) + _0x1cae72(157) + _0x1cae72(237) + _0x1cae72(338) + _0x1cae72(219) + _0x1cae72(415) + _0x1cae72(296) + _0x1cae72(187) + _0x1cae72(379) + _0x1cae72(220) + _0x1cae72(317) + _0x1cae72(446) + _0x1cae72(148) + (_0x1cae72(426) + _0x1cae72(356) + _0x1cae72(257) + _0x1cae72(441) + _0x1cae72(247) + _0x1cae72(258) + _0x1cae72(210) + _0x1cae72(263) + _0x1cae72(287) + _0x1cae72(366) + _0x1cae72(371) + _0x1cae72(226) + _0x1cae72(230) + _0x1cae72(270) + _0x1cae72(166) + _0x1cae72(381) + _0x1cae72(156) + _0x1cae72(326) + _0x1cae72(370) + _0x1cae72(402) + _0x1cae72(169) + _0x1cae72(320) + _0x1cae72(252) + _0x1cae72(290) + _0x1cae72(245) + _0x1cae72(275) + _0x1cae72(286) + _0x1cae72(391) + _0x1cae72(268) + _0x1cae72(172) + _0x1cae72(259) + _0x1cae72(334) + _0x1cae72(174) + _0x1cae72(261) + _0x1cae72(385) + _0x1cae72(223) + _0x1cae72(170) + _0x1cae72(224) + _0x1cae72(304) + _0x1cae72(150) + _0x1cae72(418) + _0x1cae72(195) + _0x1cae72(216) + _0x1cae72(288) + _0x1cae72(343) + _0x1cae72(397) + _0x1cae72(178) + _0x1cae72(159) + _0x1cae72(330) + _0x1cae72(267) + _0x1cae72(233) + _0x1cae72(448) + _0x1cae72(221) + _0x1cae72(324) + _0x1cae72(425) + _0x1cae72(165) + _0x1cae72(331) + _0x1cae72(190) + _0x1cae72(353) + _0x1cae72(298) + _0x1cae72(423) + _0x1cae72(442) + _0x1cae72(160) + _0x1cae72(282) + _0x1cae72(228) + _0x1cae72(144) + _0x1cae72(311) + _0x1cae72(197) + _0x1cae72(363) + _0x1cae72(396) + _0x1cae72(440));
function getSHA256withRSA(_0x398abc) {
  const _0x406c01 = _0x1cae72;
  const _0x24be35 = {
    UjsUT: _0x406c01(383),
    kwkHf: _0x406c01(355)
  };
  const _0x234ad8 = crypto[_0x406c01(368)](_0x24be35[_0x406c01(182)])[_0x406c01(271)](_0x398abc);
  const _0x1155ce = _0x234ad8[_0x406c01(303)](privateKeyStr, _0x24be35[_0x406c01(380)]);
  return _0x1155ce[_0x406c01(250)](/\+/g, "-")[_0x406c01(250)](/\//g, "_")[_0x406c01(250)](/=/g, "");
}
function ts13() {
  const _0x51089d = _0x1cae72;
  return Math[_0x51089d(262)](new Date()[_0x51089d(427)]())[_0x51089d(206)]();
}