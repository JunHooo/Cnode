<template>
  <div class="autherinfo">
    <div class="authersummay">
      <div class="topbar">作者</div>
      <router-link :to="{
          name:'UserInfo',
          params:{
            name:userinfo.loginname
          }
          }">
        <img :src="userinfo.avatar_url" alt="">
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="(list,index) in topcilimitby5" :key="index">
          <router-link :to="{
        name:'Article',
        params:{
          id:list.id,
        }
        }">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="(list,index) in replylimitby5" :key="index">
          <router-link :to="{
        name:'Article',
        params:{
          id:list.id,
        }
        }">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  props:['tname'],
  data(){
    return {
      userinfo:{},
      name:''
    }
  },
  methods:{
    getData(){
      this.$axios.get("https://cnodejs.org/api/v1/user/"+this.tname)
          .then(res=>{
            this.userinfo = res.data.data;
          })
          .catch(function (err) {
            console.log(err)
          })
    }
  },
  watch:{
      tname(newVal){
        this.name = newVal
        newVal &&  this.getData();
      },
  },
  computed: {
    topcilimitby5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      } else {
        return this.userinfo.recent_topics
      }
    },
    replylimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      } else {
        return this.userinfo.recent_replies
      }
    },
  },
}
</script>

<style scoped>
.authersummay, .recent_replies, .recent_topics {
  background-color: #fff;
}
.autherinfo {
  width: 328px;
  float: right;
  margin-top: 0;
}
li{
  padding: 3px 0 ;
}
.recent_replies ul, .recent_topics ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0;
}
</style>
