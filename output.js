//Thu Dec 19 2024 05:04:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const initScript = require("../utils/initScript");
const {
  $,
  notify,
  sudojia,
  checkUpdate
} = initScript("蜜雪冰城");
const crypto = require("crypto");
const mxbcList = process.env.MXBC_TOKEN ? process.env.MXBC_TOKEN.split(/[\n&]/) : [];
let message = "";
const currentVersion = "1.0.0";
const baseUrl = "https://mxsa.mxbc.net";
const appId = "d82be6bbc1da11eb9dd000163e122ecb";
const headers = {
  Host: "mxsa.mxbc.net",
  app: "mxbc",
  appchannel: "xiaomi",
  "User-Agent": sudojia.getRandomUserAgent(),
  "Content-Type": "application/json",
  Accept: "*/*",
  Referer: "https://servicewechat.com/wx7696c66d2245d107/123/page-frame.html",
  "Accept-Encoding": "gzip, deflate, br"
};
!(async () => {
  await checkUpdate($.name, currentVersion, notify, mxbcList);
  console.log("\n已随机分配 User-Agent\n\n" + (headers["user-agent"] || headers["User-Agent"]));
  for (let _0x43fb81 = 0; _0x43fb81 < mxbcList.length; _0x43fb81++) {
    const _0x39b9a8 = _0x43fb81 + 1;
    headers["Access-Token"] = mxbcList[_0x43fb81];
    $.isLogin = true;
    console.log("\n*****第[" + _0x39b9a8 + "]个" + $.name + "账号*****");
    message += "📣====" + $.name + "账号[" + _0x39b9a8 + "]====📣\n";
    await main();
    await $.wait(sudojia.getRandomWait(2000, 2500));
  }
  message && (await notify.sendNotify("「" + $.name + "」", "" + message));
})().catch(_0x1aefac => $.logErr(_0x1aefac)).finally(() => $.done());
async function main() {
  await getUserInfo();
  if (!$.isLogin) {
    console.error("Token 失效");
    return;
  }
  await $.wait(sudojia.getRandomWait(1000, 2000));
  await signIn();
  await $.wait(sudojia.getRandomWait(1000, 2000));
  await getPoints();
}
async function getUserInfo() {
  try {
    const _0xce7492 = await sudojia.sendRequest(baseUrl + "/api/v1/customer/info?appId=d82be6bbc1da11eb9dd000163e122ecb&t=" + ts13() + "&sign=" + getSHA256withRSA("appId=" + appId + "&t=" + ts13()), "get", headers);
    if (0 !== _0xce7492.code) {
      console.error(_0xce7492.msg);
      $.isLogin = false;
      return;
    }
    console.log(_0xce7492.data.mobilePhone + "登陆成功~");
    message += "用户：" + _0xce7492.data.mobilePhone + "\n";
  } catch (_0x430ddb) {
    console.error("获取用户信息时发生异常：" + _0x430ddb);
    $.isLogin = false;
  }
}
async function signIn() {
  try {
    const _0x5a584f = await sudojia.sendRequest(baseUrl + "/api/v1/customer/signin?appId=" + appId + "&t=" + ts13() + "&sign=" + getSHA256withRSA("appId=" + appId + "&t=" + ts13()), "get", headers);
    if (0 !== _0x5a584f.code) {
      console.error("签到失败：" + _0x5a584f.msg);
      return;
    }
    console.log("签到成功，雪王币+" + _0x5a584f.data.ruleValuePoint);
    console.log("已连续签到" + _0x5a584f.data.ruleValueGrowth + "天");
    message += "签到成功，已连续签到" + _0x5a584f.data.ruleValueGrowth + "天\n";
  } catch (_0x25cc88) {
    console.error("签到时发生异常：" + _0x25cc88);
  }
}
async function getPoints() {
  try {
    const _0x5f192a = await sudojia.sendRequest(baseUrl + "/api/v1/customer/info?appId=" + appId + "&t=" + ts13() + "&sign=" + getSHA256withRSA("appId=" + appId + "&t=" + ts13()), "get", headers);
    if (0 !== _0x5f192a.code) {
      console.error(_0x5f192a.msg);
      return;
    }
    console.log("当前雪王币：" + _0x5f192a.data.customerPoint);
    message += "当前雪王币：" + _0x5f192a.data.customerPoint + "\n\n";
  } catch (_0x220b88) {
    console.error("获取雪王币时发生异常：" + _0x220b88);
  }
}
const privateKeyStr = "\n-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCtypUdHZJKlQ9L\nL6lIJSphnhqjke7HclgWuWDRWvzov30du235cCm13mqJ3zziqLCwstdQkuXo9sOP\nIh94t6nzBHTuqYA1whrUnQrKfv9X4/h3QVkzwT+xWflE+KubJZoe+daLKkDeZjVW\nnUku8ov0E5vwADACfntEhAwiSZUALX9UgNDTPbj5ESeII+VztZ/KOFsRHMTfDb1G\nIR/dAc1mL5uYbh0h2Fa/fxRPgf7eJOeWGiygesl3CWj0Ue13qwX9PcG7klJXfToI\n576MY+A7027a0aZ49QhKnysMGhTdtFCksYG0lwPz3bIR16NvlxNLKanc2h+ILTFQ\nbMW/Y3DRAgMBAAECggEBAJGTfX6rE6zX2bzASsu9HhgxKN1VU6/L70/xrtEPp4SL\nSpHKO9/S/Y1zpsigr86pQYBx/nxm4KFZewx9p+El7/06AX0djOD7HCB2/+AJq3iC\n5NF4cvEwclrsJCqLJqxKPiSuYPGnzji9YvaPwArMb0Ff36KVdaHRMw58kfFys5Y2\nHvDqh4x+sgMUS7kSEQT4YDzCDPlAoEFgF9rlXnh0UVS6pZtvq3cR7pR4A9hvDgX9\nwU6zn1dGdy4MEXIpckuZkhwbqDLmfoHHeJc5RIjRP7WIRh2CodjetgPFE+SV7Sdj\nECmvYJbet4YLg+Qil0OKR9s9S1BbObgcbC9WxUcrTgECgYEA/Yj8BDfxcsPK5ebE\n9N2teBFUJuDcHEuM1xp4/tFisoFH90JZJMkVbO19rddAMmdYLTGivWTyPVsM1+9s\ntq/NwsFJWHRUiMK7dttGiXuZry+xvq/SAZoitgI8tXdDXMw7368vatr0g6m7ucBK\njZWxSHjK9/KVquVr7BoXFm+YxaECgYEAr3sgVNbr5ovx17YriTqe1FLTLMD5gPrz\nugJj7nypDYY59hLlkrA/TtWbfzE+vfrN3oRIz5OMi9iFk3KXFVJMjGg+M5eO9Y8m\n14e791/q1jUuuUH4mc6HttNRNh7TdLg/OGKivE+56LEyFPir45zw/dqwQM3jiwIz\nyPz/+bzmfTECgYATxrOhwJtc0FjrReznDMOTMgbWYYPJ0TrTLIVzmvGP6vWqG8rI\nS8cYEA5VmQyw4c7G97AyBcW/c3K1BT/9oAj0wA7wj2JoqIfm5YPDBZkfSSEcNqqy\n5Ur/13zUytC+VE/3SrrwItQf0QWLn6wxDxQdCw8J+CokgnDAoehbH6lTAQKBgQCE\n67T/zpR9279i8CBmIDszBVHkcoALzQtU+H6NpWvATM4WsRWoWUx7AJ56Z+joqtPK\nG1WztkYdn/L+TyxWADLvn/6Nwd2N79MyKyScKtGNVFeCCJCwoJp4R/UaE5uErBNn\nOH+gOJvPwHj5HavGC5kYENC1Jb+YCiEDu3CB0S6d4QKBgQDGYGEFMZYWqO6+LrfQ\nZNDBLCI2G4+UFP+8ZEuBKy5NkDVqXQhHRbqr9S/OkFu+kEjHLuYSpQsclh6XSDks\n5x/hQJNQszLPJoxvGECvz5TN2lJhuyCupS50aGKGqTxKYtiPHpWa8jZyjmanMKnE\ndOGyw/X4SFyodv8AEloqd81yGg==\n-----END PRIVATE KEY-----\n";
function getSHA256withRSA(_0x398abc) {
  const _0x234ad8 = crypto.createSign("RSA-SHA256").update(_0x398abc);
  const _0x1155ce = _0x234ad8.sign(privateKeyStr, "base64");
  return _0x1155ce.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}