(this["webpackJsonpehr-frontend"]=this["webpackJsonpehr-frontend"]||[]).push([[0],{104:function(e,t,o){},125:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(28),r=o.n(i),c=(o(104),o(83)),s=o.n(c),d=o(54),l=o(6);var b=o(73),j=o.n(b),h=o(50);var m=function(){return Object(l.jsxs)("div",{className:j.a.header,children:[Object(l.jsx)("div",{className:j.a.logo,children:"EHR"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:"/patient-dashboard",children:"Patient Dashboard"})}),Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:"/doctor-dashboard",children:"Doctor Dashboard"})})]})]})},_=o(76),u=o.n(_),g=o(85),x=o(53),O=o(48),p=o.n(O),f=o.p+"static/media/microphone-motion.b7346d20.gif";var C=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),o=t[0],a=t[1],i=Object(d.useReactMediaRecorder)({video:!1}),r=(i.status,i.startRecording),c=i.stopRecording,s=i.mediaBlobUrl;function b(){return(b=Object(g.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:console.log(s,"mediablobUrl");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s&&console.log(s,"mediaBlobURL inside use Effect")}),[s]),Object(l.jsxs)("div",{className:p.a.audioControlMainContainer,children:[Object(l.jsx)("div",{className:p.a.microPhoneImageContainer,onClick:function(e){console.log(e)},children:o?Object(l.jsx)("iframe",{src:"https://tokbox.com/embed/embed/ot-embed.js?embedId=51a139ec-80b3-401b-b680-0f13045b6ba3&room=DEFAULT_ROOM&iframe=true",width:"100%",height:"600px",style:{border:"none"},scrolling:"auto",allow:"microphone; camera"}):Object(l.jsxs)("div",{style:{height:"600px",width:"100%"},className:p.a.imageContainer,children:[Object(l.jsx)("img",{src:f,className:p.a.microPhoneImage})," "]})}),Object(l.jsx)("div",{className:p.a.leaveMeetingButton,style:{backgroundColor:o?"#bd0d0dfc":"#007d00"},children:o?Object(l.jsx)("span",{onClick:function(){return b.apply(this,arguments)},children:"Leave Meeting"}):Object(l.jsx)("span",{onClick:function(){r(),a(!0)},children:"Start Meeting"})}),Object(l.jsx)("audio",{src:s||"",controls:!0,loop:!0})]})},v=o(15);var D=function(){return Object(l.jsx)("div",{children:"Landing Page"})};var I=function(){return Object(l.jsx)("div",{className:"patient-dashboard",children:"Pateint Dashboard"})},B=o(38),N=o.n(B),P=o(129);o(79);var M=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),o=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(x.a)(i,2),c=r[0],s=r[1];return Object(l.jsxs)("div",{className:N.a.meetingBoard,children:[Object(l.jsx)("div",{className:N.a.meetingBoardLeftSection,children:Object(l.jsx)("div",{className:N.a.meetingBoardMicContainer,children:Object(l.jsx)(C,{})})}),Object(l.jsxs)("div",{className:N.a.meetingBoardRightSection,children:[Object(l.jsx)("div",{className:N.a.doctorProfile,children:Object(l.jsx)("button",{onClick:s.bind({},!0),children:"Click Here"})}),Object(l.jsx)("div",{className:N.a.patientInfo,children:Object(l.jsx)("button",{onClick:a.bind({},!0),children:"Click Here"})}),Object(l.jsx)(P.a,{width:400,placement:"right",closable:!1,onClose:a.bind({},!1),visible:o,children:"This is Doctor Info"}),Object(l.jsx)(P.a,{width:400,placement:"right",closable:!1,onClose:s.bind({},!1),visible:c,children:"This is Patient Info"})]})]})},R="/doctor-dashboard",k="/patient-dashboard",A="/",L="/meeting-board/:id";var S=function(){return Object(l.jsx)("div",{children:"Error 404"})},T=o(69),w=o.n(T),y=o(127),E=o(128),H=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}];var U=function(){return Object(l.jsxs)("div",{className:w.a.doctorDashboardContainer,children:[Object(l.jsx)("div",{className:w.a.doctorDashboardLeftContainer}),Object(l.jsx)("div",{className:w.a.doctorDashboardRightContainer,children:Object(l.jsx)(y.b,{itemLayout:"horizontal",dataSource:H,renderItem:function(e){return Object(l.jsx)(y.b.Item,{children:Object(l.jsx)(y.b.Item.Meta,{avatar:Object(l.jsx)(E.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:Object(l.jsx)("a",{href:"https://ant.design",children:e.title}),description:"Ant Design, a design language for background applications, is refined by Ant UED Team"})})}})})]})};var X=function(){return Object(l.jsx)(h.a,{children:Object(l.jsxs)("div",{className:s.a.App,children:[Object(l.jsx)(m,{}),Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{exact:!0,path:A,component:D}),Object(l.jsx)(v.a,{exact:!0,path:R,component:U}),Object(l.jsx)(v.a,{exact:!0,path:L,component:M}),Object(l.jsx)(v.a,{exact:!0,path:k,component:I}),Object(l.jsx)(v.a,{component:S})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root"))},38:function(e,t,o){e.exports={meetingBoard:"meeting_board_meetingBoard__2juNe",meetingBoardLeftSection:"meeting_board_meetingBoardLeftSection__3ITBH",meetingBoardRightSection:"meeting_board_meetingBoardRightSection__2KaCr",meetingBoardMicContainer:"meeting_board_meetingBoardMicContainer__2M8b8",patientInfo:"meeting_board_patientInfo__Csx9Z",doctorProfile:"meeting_board_doctorProfile__31PsE"}},48:function(e,t,o){e.exports={audioControlMainContainer:"audio_control_audioControlMainContainer__3pqqJ",audioControlContainer:"audio_control_audioControlContainer__IyK1T",microPhoneIcon:"audio_control_microPhoneIcon__2NHU-",callCutButton:"audio_control_callCutButton__Ds00s",microPhoneImageContainer:"audio_control_microPhoneImageContainer__2UXXR",microPhoneImage:"audio_control_microPhoneImage__3eCYF",microPhoneIconContainer:"audio_control_microPhoneIconContainer__1IW0z",leaveMeetingButton:"audio_control_leaveMeetingButton__ke6a9",imageContainer:"audio_control_imageContainer__xHheR"}},69:function(e,t,o){e.exports={doctorDashboardContainer:"doctor_dashboard_doctorDashboardContainer__1OQh1",doctorDashboardLeftContainer:"doctor_dashboard_doctorDashboardLeftContainer__2Ry8G",doctorDashboardRightContainer:"doctor_dashboard_doctorDashboardRightContainer__wCMCY"}},73:function(e,t,o){e.exports={header:"header_header__1woVj",logo:"header_logo__3xE9u"}},83:function(e,t,o){e.exports={App:"App_App__2htTF"}}},[[125,1,2]]]);
//# sourceMappingURL=main.9732e73c.chunk.js.map