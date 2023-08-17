"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_collapse_item = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_collapse_item + _easycom_uni_collapse)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "手风琴效果"
        }),
        b: common_vendor.p({
          title: "手风琴效果"
        }),
        c: common_vendor.p({
          title: "禁用状态",
          disabled: true
        }),
        d: common_vendor.p({
          accordion: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/mac/vecchioZ/uniapp-demo/heima-shop/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
