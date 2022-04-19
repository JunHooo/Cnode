<template>
  <div class="main">
    <div class="navbar">
      <span  @click="selected" :class="{hit:hit==='全部'}">全部</span>
      <span  @click="selected" :class="{hit:hit==='精华'}">精华</span>
      <span  @click="selected" :class="{hit:hit==='分享'}">分享</span>
      <span  @click="selected" :class="{hit:hit==='问答'}">问答</span>
      <span  @click="selected" :class="{hit:hit==='招聘'}">招聘</span>
      <span  @click="selected" :class="{hit:hit==='客户端测试'}">客户端测试</span>
    </div>
    <ul class="postlist">
      <li v-for="(post,index) in postlist" :key="index">
        <img :src="post.author.avatar_url" alt="">
        <div class="count">
          <span>{{post.reply_count}}</span>/{{post.visit_count}}
        </div>
        <span :class="[{top:post.top===true ||post.good===true},{tab:post.tap!==null}]">
          {{post | getType}}
        </span>
        <div class="text">
          <router-link :to="{
            name:'Article',
            params:{
              id:post.id
            }
          }">
            <a href="" :title="post.title">{{post.title}}</a>
          </router-link>
        </div>
        <span class="time">{{post.last_reply_at | getDate}}</span>
      </li>
    </ul>
   <Pagination @handleList="handle"></Pagination>
  </div>
</template>

<script lang="ts">
import Pagination from './Pagination.vue';

export default {
  name: 'PostList',
  components: {Pagination},
  data(){
    return{
      postlist:[],
      post:'',
      pageList:1,
      type:'all',
      hit:false,
    }
  },
  methods:{
    getData(){
        this.$axios.get('https://cnodejs.org/api/v1/topics',{
          params:{
            page:this.pageList,
            limit:20,
            tab:this.type
          }
        }).then(res=>{
            this.postlist=res.data.data;
        }).catch(error=>{
          console.log(error);
        })
    },
    handle(value){
      this.pageList=value
      this.getData()
    },
    selected(type){
      this.hit=type.target.innerHTML
      let value=type.target.innerHTML
      switch (value){
        case '分享':this.type='share'
          break;
        case '招聘':this.type='job'
          break;
        case '精华':this.type='good'
          break;
        case '问答':this.type='ask'
          break;
        default :this.type='all'
          break
      }
      console.log(this.type);
      this.getData()
    }
  },
  beforeMount() {
    this.getData()
  }
};
</script>

<style lang="scss" scoped>
.main{
  margin: 20px auto;
  background: #ffffff;
  position: relative;
  height: 100%;
  width: 90%;

  .navbar{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    .hit{
      background:#80bd01 ;
      color:#ffffff;
    }
    span{
      color:#80bd01;
      padding: 2px;
      margin-right:20px ;
      &:hover{
        color:#005580
      }
    }
  }

  ul{
    li{
      display: flex;
      align-items: center;
      padding:10px 0 10px 10px;
      border-top: 1px solid #f0f0f0;
      &:hover{
        background: #f5f5f5
      }
        a{
          position: relative;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 70vw;
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          line-height: 30px;
          text-decoration: #333333;
          &:hover{
            text-decoration:underline
          }
        }
      .tab{
        padding: 0 2px;
        background: #e5e5e5;
        color:#999999;
        border-radius: 3px;
        line-height: 20px;
        height: 20px;
        width: 30px;
        font-size: 12px;
        margin-right: 10px;
      }
      .top{
        background: #80bd01;
        color:#ffffff;
      }
      img{
        width: 30px;
        height: 30px;
        border-radius: 3px;
      }
      .count{
        display: flex;
        justify-content:center;
        padding: 0 4px;
        background: #ffffff;
        font-size: 14px;
        color: #b4b4b4;
        min-width: 80px;
        span{
          font-size: 14px;
          color: #9e78c0;
        }
      }
      .time{
        position: absolute;
        color:#778087;
        right: 0;
        margin-right: 10px;
      }
    }

  }
}

</style>