<template>
  <el-carousel :interval="4000" type="card" height="120px">
    <el-carousel-item>
      <img src="../../../assets/images/banner/banner1.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../../assets/images/banner/banner2.png" alt="">

    </el-carousel-item>
    <el-carousel-item>
      <img src="../../../assets/images/banner/banner3.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../../assets/images/banner/banner4.png" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel__item img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  user-select: none;
  pointer-events: none;
}

.el-carousel {
  padding-top: 10px;
  background: #8bc17d;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.el-carousel__indicators--outside button {
  background-color: #fff;
}
</style>
