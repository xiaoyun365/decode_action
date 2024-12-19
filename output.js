//Thu Dec 19 2024 06:56:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const l11iilii = require("../utils/initScript");
const {
  $: iiIi1Ill,
  notify: lliiIII,
  sudojia: l11ilIil,
  checkUpdate: ililli1l
} = l11iilii("塔斯汀");
const ll1l1iii = process.env.TASTI_TOKEN ? process.env.TASTI_TOKEN.split(/[\n&]/) : [];
let i1i1lIlI = "";
const li11liII = "1.0.0";
const llI11II = "https://sss-web.tastientech.com";
const i11iii1l = {
  "User-Agent": l11ilIil.getRandomUserAgent(),
  "Content-Type": "application/json",
  version: "3.2.3",
  channel: "1",
  xweb_xhr: "1",
  Referer: "https://servicewechat.com/wx557473f23153a429/378/page-frame.html",
  "Accept-Language": "zh-CN,zh;q=0.9"
};
!(async () => {
  await ililli1l(iiIi1Ill.name, li11liII, lliiIII, ll1l1iii);
  console.log("\n已随机分配 User-Agent\n\n" + (i11iii1l["user-agent"] || i11iii1l["User-Agent"]));
  for (let I11iI1Il = 0; I11iI1Il < ll1l1iii.length; I11iI1Il++) {
    {
      const iIlIII1i = I11iI1Il + 1;
      console.log("\n*****第[" + iIlIII1i + "]个" + iiIi1Ill.name + "账号*****");
      i11iii1l["user-token"] = ll1l1iii[I11iI1Il];
      i1i1lIlI += "📣====" + iiIi1Ill.name + "账号[" + iIlIII1i + "]====📣\n";
      await lI1lII1l();
      await iiIi1Ill.wait(l11ilIil.getRandomWait(2000, 2500));
    }
  }
  if (i1i1lIlI) {
    {
      await lliiIII.sendNotify("「" + iiIi1Ill.name + "」", "" + i1i1lIlI);
    }
  }
})().catch(iIiIlliI => iiIi1Ill.logErr(iIiIlliI)).finally(() => iiIi1Ill.done());
async function lI1lII1l() {
  await I1ililli();
  await iiIi1Ill.wait(l11ilIil.getRandomWait(1000, 2000));
  await liilllli();
}
async function I1ililli() {
  try {
    {
      {
        let iII1IIl1 = await l11ilIil.sendRequest(llI11II + "/api/intelligence/member/getMemberDetail", "get", i11iii1l);
        if (200 !== iII1IIl1.code) {
          return console.log("获取用户信息失败 ->", iII1IIl1.msg);
        }
        const {
          nickName: Ili1l111,
          phone: lli11iil
        } = iII1IIl1.result;
        const ii1llIII = lli11iil.slice(0, 3) + "***" + lli11iil.slice(-3) || "18888888888";
        console.log(Ili1l111 + "(" + ii1llIII + ")");
        i1i1lIlI += Ili1l111 + "(" + lli11iil + ")\n";
        await iiIi1Ill.wait(l11ilIil.getRandomWait(1000, 2000));
        const I1I11III = {
          activityId: 54,
          memberName: Ili1l111,
          memberPhone: lli11iil
        };
        iII1IIl1 = await l11ilIil.sendRequest(llI11II + "/api/sign/member/signV2", "post", i11iii1l, I1I11III);
        if (200 !== iII1IIl1.code) {
          {
            i1i1lIlI += "签到失败：" + iII1IIl1.msg + "\n";
            return console.log("签到失败 ->", iII1IIl1.msg);
          }
        }
        if (!iII1IIl1.result.rewardInfoList[0].rewardName) {
          console.log("签到成功，积分+" + iII1IIl1.result.rewardInfoList[0].point);
          i1i1lIlI += "签到成功，积分+" + iII1IIl1.result.rewardInfoList[0].point + "\n";
        } else {
          {
            console.log("签到成功，获得奖品；" + iII1IIl1.result.rewardInfoList[0].rewardName);
            i1i1lIlI += "签到成功，获得奖品；" + iII1IIl1.result.rewardInfoList[0].rewardName + "\n";
          }
        }
      }
    }
  } catch (iiillIii) {
    console.error("获取用户信息或签到时发生异常：" + iiillIii);
  }
}
async function liilllli() {
  try {
    let IllllIl1 = await l11ilIil.sendRequest(llI11II + "/api/wx/point/myPoint", "post", i11iii1l);
    if (200 !== IllllIl1.code) {
      return console.log("获取积分失败 ->", IllllIl1.msg);
    }
    console.log("当前积分：" + IllllIl1.result.point);
    i1i1lIlI += "当前积分：" + IllllIl1.result.point + "\n\n";
  } catch (iiiliIi) {
    console.error("获取积分时发生异常：" + iiiliIi);
  }
}