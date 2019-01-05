<template>
  <div class="login2">
    <div class="header">
      <div class="pic"></div>
      <p>KAN ZHUN</p>
    </div>
    <div class="main">
      <div class="phone">
        <span>+86</span>
         <input type="text"  placeholder="手机号" v-model="phone">
      </div>
      <div class="password">
        <span class="iconfont">&#xe630;</span>
        <input type="password"  placeholder="密码" v-model="password">
      </div>
      <button id="entry">进入看准</button>
    </div>
    <div class="footer">
      <p>忘记密码</p>
      <span>快捷登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login2',
  data () {
    return {
      phone:'',
      password:''

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

@font-face {
  font-family: 'iconfont';  /* project id 1000175 */
  src: url('//at.alicdn.com/t/font_1000175_eyux8gvszrd.eot');
  src: url('//at.alicdn.com/t/font_1000175_eyux8gvszrd.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1000175_eyux8gvszrd.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1000175_eyux8gvszrd.woff') format('woff'),
  url('//at.alicdn.com/t/font_1000175_eyux8gvszrd.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1000175_eyux8gvszrd.svg#iconfont') format('svg');
}

*{
  margin: 0;
  padding: 0;
}
  .login2{
    height:100vh;
    display: flex;
    flex-direction: column;
  }

  .header{
    height:24vh;
    padding-top:11vh; 
    /* background: #f00; */
  }
  .header .pic{
    width:53%;
    height: 60%;
    background: #e5e5e5;
    margin: 0 auto;
  }
  .header p{
    color: #848484;
    text-align: center;
    line-height: 9vh;
    font-size: 24px;
  }
  .main{
    height:42vh;
    
    padding:8vh 0;
    font-size: 24px;
  }
  .main .phone{
    width:91%;
    height: 7vh;
    margin:0 auto;
    background: #e5e5e5;
    border-radius: 7vh;
  }
  .phone span{
    width:32%;
    text-align: center;
    display: block;
    float: left;
    line-height: 7vh;
    color:#848484;
  }
  .phone input{
    float: left;
    background: none;
    border: none;
    font-size: 24px;
    height: 7vh;
    width: 67%;
  }
  .main .password{
    width:91%;
    height: 7vh;
    margin:0 auto;
    background: #e5e5e5;
    border-radius: 7vh;
    margin-top:4vh;
  }
  .password span{
    width:32%;
    text-align: center;
    display: block;
    float: left;
    line-height: 7vh;
    color:#848484;
    font-size: 24px;
  }
  .password input{
     float: left;
    background: none;
    border: none;
    font-size: 24px;
    height: 7vh;
    width: 67%;
  }
  #entry{
    width:91%;
    height: 7vh;
    
    background: #e5e5e5;
    border-radius: 7vh;
    border: none;
    text-align: center;
    line-height: 7vh;
    margin:0 auto;
    display: block;
    margin-top: 17vh;
    font-size: 24px;
    color: #848484;
  }
  .footer{
    height: 7vh;
    /* background: #f00; */
    font-size: 24px;
    line-height: 7vh;
    color: #848484;
    padding:0 4%;
  }
  .footer p{
    float: left;
  }
  .footer span{
    float: right;
  }
</style>
