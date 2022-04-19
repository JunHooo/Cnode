<template>
<div>
    <Header></Header>
    <SlideBar :tname="name"></SlideBar>
    <div class="content">
      <div class="header">
        <div class="title">
          <span>{{content.title}}</span>
        </div>
       <div class="instro">
         <span>• 发布于 {{content.create_at | getDate}}</span>
         <span>• 作者 {{name}}</span>
         <span>• {{content.visit_count}}次浏览</span>
         <span>• 来自 {{content.tab | getArtType}}</span>
       </div>
      </div>
      <div id="content">
        <div v-html="content.content" class="topic_content"></div>
      </div>
      <div id="reply">
        <div class="topbar">回复</div>
        <div v-for="(reply,index)  in content.replies" class="replySec" :key="index">
          <div class="replyUp">
            <router-link :to="{
          name:'UserInfo',
          params:{
            name:reply.author.loginname
          }
          }">
              <img :src="reply.author.avatar_url" alt="">
            </router-link>
            <router-link :to="{
          name:'UserInfo',
          params:{
            name:reply.author.loginname
          }
          }">
              <span>{{reply.author.loginname}}</span>
            </router-link>
            <span>
          {{index+1}}楼
        </span>
            <span v-if="reply.ups.length>0" >
          ☝ {{reply.ups.length}}
        </span>
            <span v-else>
        </span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header'
import SlideBar from '@/components/SlideBar'
export default {
name: "Article",
  components: {SlideBar, Header},
  data(){
    return{
      content:{},
      name:'',
    }
  },
  methods:{
    getArticle(){
      this.$axios.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id)
      .then(res=>{
        if(res.data.success===true){
          console.log(res)
          this.content=res.data.data
          this.name =res.data.data.author.loginname
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  watch:{
    '$route'(){
      this.getArticle();
    }
  },
  beforeMount() {
    this.getArticle()
  },
  filters:{
    getArtType(value){
      if(value==='share'){
        return '分享'
      }else if(value==='ask'){
        return '问答'
      }else if(value==='job'){
        return '招聘'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../style/markdown.css";
    .content{
      background: #ffffff;
      margin:20px 0 20px 60px;
      min-height: 80vh;
      width: 68%;
      .header{
        border-bottom:1px solid  #e5e5e5;
        .title{
          font-size: 22px;
          font-weight: 700;
          margin: 8px 0;
          display: inline-block;
          vertical-align: bottom;
          width: 75%;
          line-height: 130%;
        }
        .instro{
          padding-bottom: 10px;
          span{
            font-size: 12px;
            color: #838383;
            padding:2px;
          }
        }
      }
    }
.topbar {
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply, .topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a, #reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec{
  border-bottom:1px solid #e5e5e5;
  padding:0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0;
  display: inline-block;
}
</style>