<template>
  <div id="profile-main">
    <nav-basic>
      <div slot="text">我的VS</div>
    </nav-basic>
    <profile-info></profile-info>
    <profile-option>
      <profile-option-item></profile-option-item>
      <profile-option-item>
        <img src="../../assets/images/profile/svgs/receipt.svg" alt="" slot="icon">
        <p slot="text">待收货</p>
      </profile-option-item>
      <profile-option-item>
        <img src="../../assets/images/profile/svgs/pay.svg" alt="" slot="icon">
        <p slot="text">退换 / 售后</p>
      </profile-option-item>
      <profile-option-item>
        <img src="../../assets/images/profile/svgs/order.svg" alt="" slot="icon">
        <p slot="text">全部订单</p>
      </profile-option-item>
    </profile-option>
    <div class="information">
      <profile-option>
        <profile-option-item>
          <h2 slot="icon">0</h2>
          <p slot="text">优惠券</p>
        </profile-option-item>
        <profile-option-item>
          <h2 slot="icon">2,959.00</h2>
          <p slot="text">V条额度</p>
        </profile-option-item>
        <profile-option-item>
          <h2 slot="icon">455</h2>
          <p slot="text">V豆</p>
        </profile-option-item>
        <profile-option-item>
          <h2 slot="icon">0</h2>
          <p slot="text">红包</p>
        </profile-option-item>
        <profile-option-item>
          <img src="../../assets/images/profile/svgs/assets.svg" alt="" slot="icon" style="height: 36px">
          <p slot="text">我的资产</p>
        </profile-option-item>
      </profile-option>
    </div>
    <ProfileTools></ProfileTools>
    <shop-delimiter>
      <p slot="text">为你推荐</p>
    </shop-delimiter>
    <shop-preview></shop-preview>
  </div>
</template>

<script>
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileOption from "./ProfileOption";
import NavBasic from "../../components/index/nav/NavBasic";
import ShopDelimiter from "../shopping/ShopDelimiter";
import ShopPreview from "../shopping/ShopPreview";
import ProfileOptionItem from "./ProfileOptionItem";
import ProfileTools from "./ProfileTools";


export default {
  name: "ProfileMain",
  components:{
    ProfileInfo,
    ProfileOption,
    NavBasic,
    ShopDelimiter,
    ShopPreview,
    ProfileOptionItem,
    ProfileTools
  }
};
</script>

<style scoped>
.information h2 {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.information p{
  margin-top: 8px;
}
</style>
