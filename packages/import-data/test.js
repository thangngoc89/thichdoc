const _ = require("lodash");

const data = [
  {
    username: "dang.ng.dong.vy"
  },
  {
    username: "ng.thanh.son"
  },
  {
    username: "le.ng.huong.tra"
  },
  {
    username: "ng.quang.lap"
  },
  {
    username: "tung.leo"
  },
  {
    username: "phong.viet"
  },
  {
    username: "phuong.huyen"
  },
  {
    username: "ng.ngoc.thach"
  },
  {
    username: "le.hung.trong"
  },
  {
    username: "tuan.anh"
  },
  {
    username: "minh.nhat"
  },
  {
    username: "rosie.nguyen"
  },
  {
    username: "ploy"
  },
  {
    username: "anh.khang"
  },
  {
    username: "quynh.thy"
  },
  {
    username: "leng.keng"
  },
  {
    username: "le.huu.nam"
  },
  {
    username: "duy.khanh.zhou.zhou"
  },
  {
    username: "hamlet.truong"
  }
];

const list1 = data.map(u => u.username);

const data2 = require("../../data/data.json");
const list2 = data2.map(u => u.username);

console.log(list2.length);
console.log(_.difference(list2, list1));
