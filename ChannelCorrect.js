/**
 * @name ChannelCorrecter
 * @version 0.0.1
 * @description Will detect if you are using a bot command and auto-redirect you to the bots channel
 * @author Archer2305#7876
 * @source https://github.com/Archer2305/ChannelCorrecter/blob/main/ChannelCorrect.js
 * 
 */


// var channels =document.getElementsByClassName("containerDefault--pIXnN")
var channels =document.getElementsByClassName("containerDefault--pIXnN")
var channelName =document.getElementsByClassName("containerDefault--pIXnN").textContent
var PageName=document.getElementsByClassName("title-29uC1r")
var channelHref = document.querySelectorAll("a[data-list-item-id]")
for(var a=1;a<channels.length;a++){
   if(channels[a].textContent.includes("bot")){
     
      var redirect=channelHref[a].href
      var UserTyping= document.querySelector("span[data-slate-string]")
      if(UserTyping.textContent.startsWith("pls") ||UserTyping.textContent.startsWith("!")||UserTyping.textContent.startsWith(".")||UserTyping.textContent.startsWith("/")||UserTyping.textContent.startsWith("\\")){
         if(PageName[0].textContent!=channels[a].textContent){
         BdApi.alert("Are You In The Right Channel?" , [ BdApi.React.createElement("a", {href: redirect}, "Redirect(restarts discord ")])
         }
      }
  }   

   }


