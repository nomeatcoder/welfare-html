webpackJsonp([4],{0:function(e,t,n){e.exports=n(48)},2:function(e,t,n){"use strict";var s=n(1),r={login:function(e,t,n){s.request({url:s.getServerUrl("/user/login.do"),data:e,method:"POST",success:t,error:n})},checkUsername:function(e,t,n){s.request({url:s.getServerUrl("/user/check_valid.do"),data:{type:"username",str:e},method:"POST",success:t,error:n})},register:function(e,t,n){s.request({url:s.getServerUrl("/user/register.do"),data:e,method:"POST",success:t,error:n})},checkLogin:function(e,t){s.request({url:s.getServerUrl("/user/get_user_info.do"),method:"POST",success:e,error:t})},getQuestion:function(e,t,n){s.request({url:s.getServerUrl("/user/forget_get_question.do"),data:{username:e},method:"POST",success:t,error:n})},checkAnswer:function(e,t,n){s.request({url:s.getServerUrl("/user/forget_check_answer.do"),data:e,method:"POST",success:t,error:n})},resetPassword:function(e,t,n){s.request({url:s.getServerUrl("/user/forget_reset_password.do"),data:e,method:"POST",success:t,error:n})},getUserInfo:function(e,t){s.request({url:s.getServerUrl("/user/get_information.do"),method:"POST",success:e,error:t})},updateUserInfo:function(e,t,n){s.request({url:s.getServerUrl("/user/update_information.do"),data:e,method:"POST",success:t,error:n})},updatePassword:function(e,t,n){s.request({url:s.getServerUrl("/user/reset_password.do"),data:e,method:"POST",success:t,error:n})},loginout:function(e,t){s.request({url:s.getServerUrl("/user/logout.do"),method:"POST",success:e,error:t})}};e.exports=r},3:function(e,t,n){"use strict";var s=n(1),r={getCartCount:function(e,t){s.request({url:s.getServerUrl("/cart/get_cart_product_count.do"),success:e,error:t})}};e.exports=r},4:function(e,t){},5:function(e,t){},6:function(e,t,n){"use strict";n(4);var s=n(1),r={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){var e=s.getUrlParam("keyword");e&&$("#search-input").val(e)},bindEvent:function(){var e=this;$("#search-btn").click(function(){e.searchSubmit()}),$("#search-input").keyup(function(t){13===t.keyCode&&e.searchSubmit()})},searchSubmit:function(){var e=$.trim($("#search-input").val());e?window.location.href="./list.html?keyword="+e:s.goHome()}};r.init()},7:function(e,t,n){"use strict";n(5);var s=n(1),r=n(2),i=n(3),o={init:function(){return this.bindEvent(),this.loadUserInfo(),this.loadCartCount(),this},bindEvent:function(){$(".js-login").click(function(){s.doLogin()}),$(".js-register").click(function(){window.location.href="./register.html"}),$(".js-loginout").click(function(){r.loginout(function(e){window.location.href="./index.html"},function(e){s.errorTips(e)})})},loadUserInfo:function(){r.checkLogin(function(e){$(".user.not-login").hide().siblings(".user.login").show().find(".username").text(e.username)},function(e){})},loadCartCount:function(){i.getCartCount(function(e){$(".nav .cart-count").text(e||0)},function(e){$(".nav .cart-count").text(0)})}};e.exports=o.init()},8:function(e,t){},10:function(e,t){e.exports='{{#navList}} {{#isActive}} <li class="nav-item active"> {{/isActive}} {{^isActive}} </li><li class=nav-item> {{/isActive}} <a class=link href={{href}}>{{desc}}</a> </li> {{/navList}} '},11:function(e,t,n){"use strict";n(8);var s=n(1),r=n(10),i={option:{name:"",navList:[{name:"user-center",desc:"个人中心",href:"./user-center.html"},{name:"order-list",desc:"我的订单",href:"./order-list.html"},{name:"pass-update",desc:"修改密码",href:"./user-pass-update.html"},{name:"about",desc:"关于福利商城",href:"./about.html"}]},init:function(e){$.extend(this.option,e),this.renderNav()},renderNav:function(){for(var e=0,t=this.option.navList.length;e<t;e++)this.option.navList[e].name===this.option.name&&(this.option.navList[e].isActive=!0);var n=s.renderHtml(r,{navList:this.option.navList});$(".nav-side").html(n)}};e.exports=i},21:function(e,t){},35:function(e,t){e.exports='<div class=user-info> <div class=form-line> <span class=label>用户名：</span> <span class=text>{{username}}</span> </div> <div class=form-line> <span class=label>电 话：</span> <input class=input id=phone autocomplete=off value={{phone}} /> </div> <div class=form-line> <span class=label>邮 箱：</span> <input class=input id=email autocomplete=off value={{email}} /> </div> <div class=form-line> <span class=label>问 题：</span> <input class=input id=question autocomplete=off value={{question}} /> </div> <div class=form-line> <span class=label>答 案：</span> <input class=input id=answer autocomplete=off value={{answer}} /> </div> <span class="btn btn-submit">提交</span> </div>'},48:function(e,t,n){"use strict";n(21),n(7),n(6);var s=n(11),r=n(1),i=n(2),o=n(35),a={init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){s.init({name:"user-center"}),this.loadUserInfo()},bindEvent:function(){var e=this;$(document).on("click",".btn-submit",function(){var t={phone:$.trim($("#phone").val()),email:$.trim($("#email").val()),question:$.trim($("#question").val()),answer:$.trim($("#answer").val())},n=e.validateForm(t);n.status?i.updateUserInfo(t,function(e,t){r.successTips(t),window.location.href="./user-center.html"},function(e){r.errorTips(e)}):r.errorTips(n.msg)})},loadUserInfo:function(){var e="";i.getUserInfo(function(t){e=r.renderHtml(o,t),$(".panel-body").html(e)},function(e){r.errorTips(e)})},validateForm:function(e){var t={status:!1,msg:""};return r.validate(e.phone,"phone")?r.validate(e.email,"email")?r.validate(e.question,"require")?r.validate(e.answer,"require")?(t.status=!0,t.msg="验证通过",t):(t.msg="密码提示问题答案不能为空",t):(t.msg="密码提示问题不能为空",t):(t.msg="邮箱格式不正确",t):(t.msg="手机号格式不正确",t)}};$(function(){a.init()})}});