(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=(a(15),a(9)),l=a(4),u=a(1);var s=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__logo"}))},m=o.a.createContext();var p=function(e){var t=o.a.useContext(m),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id})),r="element__button-like ".concat(n?"button-like_active":"");return o.a.createElement("div",{className:"element"},o.a.createElement("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("div",{className:"element__info"},o.a.createElement("h4",{className:"element__title"},e.card.name),o.a.createElement("div",{className:"element__place-like"},o.a.createElement("button",{type:"button",className:r,onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("span",{className:"element__like-count"},e.card.likes.length))),a?o.a.createElement("button",{type:"button",className:"element__remove_image",onClick:function(){e.onCardDelete(e.card)}}):null)};var d=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,r=e.onCardClick,c=e.cards,i=e.onCardLike,l=e.onCardDelete,u=o.a.useContext(m);return o.a.createElement("main",null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar",onClick:t},o.a.createElement("img",{src:u.avatar,alt:"\u043f\u043e\u0440\u0442\u0440\u0435\u0442 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430",className:"profile__avatar-icon"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__title"},u.name),o.a.createElement("button",{type:"button",className:"profile__edit-button",onClick:a}),o.a.createElement("p",{className:"profile__subtitle"},u.about)),o.a.createElement("button",{type:"button",className:"button_add-card",onClick:n})),o.a.createElement("section",{className:"elements"},c.map((function(e){return o.a.createElement(p,{card:e,onCardClick:r,onCardLike:i,onCardDelete:l,key:e._id})}))))};var _=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var f=function(e){return o.a.createElement("section",{className:e.isOpen?"popup popup_opened popup_type_".concat(e.name):"popup popup_type_".concat(e.name)},o.a.createElement("div",{className:"popup__container popup__container_type_".concat(e.name)},o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),o.a.createElement("h3",{className:"popup__title"},e.title),o.a.createElement("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("fieldset",{className:"popup__form-set"},e.children))))};var h=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(f,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:r,className:"popup__form-text popup__form-text_type_link",id:"url-input",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__form-text-error",id:"url-input-error"}),o.a.createElement("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__form-submit popup__form-submit_type_edit-avatar"}))};var v=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),c=Object(u.a)(r,2),i=c[0],l=c[1],s=o.a.useState(""),p=Object(u.a)(s,2),d=p[0],_=p[1],h=o.a.useContext(m);return o.a.useEffect((function(){l(h.name),_(h.about)}),[h]),o.a.createElement(f,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:d})}},o.a.createElement("input",{type:"text",name:"name",value:i||"",onChange:function(e){l(e.target.value)},className:"popup__form-text popup__form-text_type_name",id:"name-input",minLength:"2",maxLength:"40",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__form-text-error",id:"name-input-error"}),o.a.createElement("input",{type:"text",name:"job",value:d||"",onChange:function(e){_(e.target.value)},className:"popup__form-text popup__form-text_type_job",id:"job-input",minLength:"2",maxLength:"200",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__form-text-error",id:"job-input-error"}),o.a.createElement("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__form-submit"}))};var E=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(u.a)(r,2),i=c[0],l=c[1],s=o.a.useState(""),m=Object(u.a)(s,2),p=m[0],d=m[1];return o.a.createElement(f,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({imageName:i,imageLink:p})}},o.a.createElement("input",{type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){l(e.target.value)},className:"popup__form-text popup__form-text_type_title",id:"title-input",minLength:"1",maxLength:"30",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__form-text-error",id:"title-input-error"}),o.a.createElement("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){d(e.target.value)},className:"popup__form-text popup__form-text_type_link",id:"url-input",autoComplete:"off",required:!0}),o.a.createElement("span",{className:"popup__form-text-error",id:"url-input-error"}),o.a.createElement("input",{type:"submit",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",className:"popup__form-submit popup__form-submit_type_add-card"}))};var b=function(e){return o.a.createElement("section",{className:e.card.isOpen?"popup popup_opened popup_type_full-image":"popup popup_type_full-image"},o.a.createElement("div",{className:"popup__container popup__container_type_full-image"},o.a.createElement("img",{className:"popup__full-image",src:e.card.card.link,alt:e.card.card.name}),o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),o.a.createElement("h3",{className:"popup__title popup__title_type_full-image"},e.card.card.name)))},C=a(7),k=a(8),N=new(function(){function e(t){var a=t.url,n=t.headers;Object(C.a)(this,e),this._url=a,this._headers=n}return Object(k.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getPersonInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"sendUserInformation",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"delCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"removelikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"71f3852f-9196-47d1-bd3b-fa85f23dbdb4","Content-Type":"application/json"}});var g=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(u.a)(r,2),p=c[0],f=c[1],C=o.a.useState(!1),k=Object(u.a)(C,2),g=k[0],y=k[1],j=o.a.useState({card:{},isOpen:!1}),O=Object(u.a)(j,2),x=O[0],P=O[1],S=o.a.useState({}),L=Object(u.a)(S,2),w=L[0],A=L[1],D=o.a.useState([]),T=Object(u.a)(D,2),U=T[0],I=T[1];function q(){n(!1),f(!1),y(!1),P(Object(l.a)(Object(l.a)({},x),{},{isOpen:!1}))}return o.a.useEffect((function(){var e=[N.getInitialCards(),N.getPersonInfo()];Promise.all(e).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];A(n),I(a)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("div",{className:"page"},o.a.createElement(m.Provider,{value:w},o.a.createElement(s,null),o.a.createElement(d,{onEditProfile:function(){f(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){n(!0)},onCardClick:function(e){P({card:e,isOpen:!0})},cards:U,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));t?N.removelikeCard(e._id,t).then((function(t){var a=U.map((function(a){return a._id===e._id?t:a}));I(a)})).catch((function(e){console.log(e)})):N.likeCard(e._id,!t).then((function(t){var a=U.map((function(a){return a._id===e._id?t:a}));I(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){N.delCard(e._id).then((function(){var t=U.filter((function(t){return t._id!==e._id}));I(t)})).catch((function(e){console.log(e)}))}}),o.a.createElement(_,null),o.a.createElement(h,{isOpen:a,onClose:q,onUpdateAvatar:function(e){N.editAvatar({avatar:e.avatar}).then((function(e){A(e),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(v,{isOpen:p,onClose:q,onUpdateUser:function(e){N.sendUserInformation({name:e.name,about:e.about}).then((function(e){A(e),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(E,{isOpen:g,onClose:q,onAddPlace:function(e){N.addNewCard({name:e.imageName,link:e.imageLink}).then((function(e){I([].concat(Object(i.a)(U),[e])),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(b,{card:x,onClose:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.deb26c4e.chunk.js.map