<template>
<div class="nav">
    <div class="container">
      <img src="../assets/cnodejs_light.svg" alt="">
      <form class="reach" >
        <label>
          <input type="text" autocomplete="off"  icon="el-icon-search">
        </label>
      </form>
      <div class="link">
        <span><router-link to="/">首页</router-link></span>
        <span><router-link to="/HelloWorld">新手入门</router-link></span>
        <span>API</span>
        <span>关于</span>
        <span>注册</span>
        <span>登录</span>
      </div>
    </div>
</div>
</template>

<script lang="ts">
export default {
name: "Header"
}
</script>

<style lang="scss" scoped>
  .nav{
    position: relative;
    top:0;
    left:0;
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
    background:#444444;
    height: 50px;

    .container{
      position: absolute;
      color:#cccccc;
      font-size: 13px;
      right:5%;
      left: 5%;
      width: 90%;
      height:50px;
      line-height: 50px;

      img{
        line-height:34px;
        color: #ccc;
        height: auto;
        max-width: 120px;
        margin-top: 10px;
      }
      .reach {
        display: inline-block;
        position: absolute;
        margin-left: 50px;
        max-width: 20%;

        input{
          max-height: 30px;
          border-radius: 15px 15px;
          border-color: #282727;
          box-shadow: none ;
          background: #888888;



          &:hover{
            background: white;
          }
        }
      }
      .link{
        position: absolute;
        display: inline-block;
        line-height: 50px;
        right: 0;
        span{
          margin-bottom: 4px;
          padding: 10px 15px;
        }
        a:hover{
          color:#ffffff
        }
      }
    }
  }
</style>