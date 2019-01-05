<template>
  <div class="login1">
    <div class="logo">
      <div class="pic"></div>
      <p>KAN ZHUN</p>
    </div>

    <div class="main">
      <div class="phone">
        <span>+86	&or;</span>
         <input type="text"  placeholder="手机号" v-model="phone">
      </div>
      <div class="yzm">
        <span class="iconfont">&#xe62f;</span>
        <input type="text"  placeholder="验证码" v-model="yzm">
        <button id="send">发送验证码</button>
      </div>
      
      <p>收不到验证码，尝试语音接收</p>
      <button id="entry">进入看准</button>
    </div>

    <div class="footer">
      <input type="radio" name="" id="aa"><label for="aa">用户隐私协议</label>
      <span>密码登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login1',
  data () {
    return {
      yzm:'',
      phone:''
    }
  }
}
</script>


<style scoped>
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

    @font-face {
  font-family: 'iconfont';  /* project id 1000175 */
  src: url('//at.alicdn.com/t/font_1000175_u0iv9vfw2b.eot');
  src: url('//at.alicdn.com/t/font_1000175_u0iv9vfw2b.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1000175_u0iv9vfw2b.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1000175_u0iv9vfw2b.woff') format('woff'),
  url('//at.alicdn.com/t/font_1000175_u0iv9vfw2b.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1000175_u0iv9vfw2b.svg#iconfont') format('svg');
}
  *{
    margin: 0;
    padding: 0;
  }

  .login1{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .logo{
    height: 150px;
    padding: 50px 54px 0 54px;
  }
  .logo .pic{
    width: 128px;
    height: 75px;
    background:#e5e5e5;
    margin: 0 auto;
  }
  .logo p{
    line-height: 43px;
    text-align: center;
    color:#e5e5e5;
  }
  .main{
     /* height: 195px;  */
    flex:1; 
    padding:39px 10px 0 10px;

  }
  .main .phone{
    height: 31px;
    background:#e5e5e5;
    border-radius: 15px;
  }
  .phone span{
    width: 60px;
    text-align: center;
    line-height: 31px;
    color:#848484;
    font-size: 12px;
    display: block;
    float: left;
  }
  .phone input{
    border: none;
    background: #e5e5e5;
    height: 25px;
    line-height: 25px;
    float:left;
    width:140px;
    margin-top: 3px;
  }
  .yzm{
    height: 26px;
    background:#e5e5e5;
    border-radius: 15px;
    margin-top:20px;
    padding-top: 5px;
   
  }
  .yzm span{
    height: 26px;
    width:14px;
    padding: 0px 20px 0 20px;
    
  }
  .yzm input{
    width: 70px;
    border: none;
    background: #e5e5e5;
    border-right: 1px solid #848484;

  }
  .main .yzm #send{
    width:90px;
    height: 15px;
    background: #e5e5e5;
    border:none;
     
    color:#848484;
  }
  .main p{
    color:#848484;
    font-size: 12px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  #entry{
    height: 31px;
    background:#e5e5e5;
    border-radius: 15px;
    text-align: center;
    line-height: 31px;
    width: 214px;
    border:none;
    margin: 0 auto;
    color: #848484;
    display: block;
  }

  .footer{
    height: 35px;
    padding: 30px 15px 0 13px;
    /* background: #f00; */
    font-size: 12px;
    color: #848484;
  }
  .footer span{
    float: right;
  }
</style>
