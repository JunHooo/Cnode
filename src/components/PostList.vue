<template>
  <div class="main">
    <div class="navbar">
      <span>全部</span>
      <span>精华</span>
      <span>分享</span>
      <span>问答</span>
      <span>招聘</span>
      <span>客户端测试</span>
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
          <a href="" :title="post.title">{{post.title}}</a>
        </div>
        <span class="time">{{post.last_reply_at | getDate}}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PostList',
  data(){
    return{
      postlist:[],
      post:'',
    }
  },
  methods:{
    getData(){
        this.$axios.get('https://cnodejs.org/api/v1/topics',{
          page:1,
          limit:20,
        }).then(res=>{
          this.postlist=res.data.data;
          console.log(this.postlist)
        }).catch(error=>{
          console.log(error);
        })
    }
  },
  filters:{
    getType(value){
      if(value.top===true) {
        value = '置顶'
      }
      else if (value.good ===true ) {
        value='精品'
      }else if(value.tab==='share'){
        value='分享'
      }else if(value.tab==='job'){
        value='招聘'
      }else if(value.tab==='ask'){
        value='问答'
      }
      return value
    },
    getDate(date){
      let now =new Date().getTime()
      let lastDate =new Date(date).getTime()
      let diff=(now-lastDate)/1000
      let result;
      if(diff<60){
        result=Math.round(diff)+'秒之前'
      }else if(diff<3600){
        result=Math.round(diff/60)+'分之前'
      }else if(diff<86400){
        result=Math.round(diff/3600)+'小时前'
      }else if(diff<2592000){
        result=Math.round(diff/86400)+'天前'
      }else if(diff<31104000){
        result=Math.round(diff/2592000)+'月前'
      }else{
        result=Math.round(diff/31104000)+'年前'
      }
      return result
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
    span{
      color:#80bd01;
      padding: 10px 10px;
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
          border:1px solid red;
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
        font-size: 12px;
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