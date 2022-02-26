(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3753,3631],{"65NJ":function(e,t,n){"use strict"
var s=n("ouhR")
var i=n.n(s)
n("w2hD")
i.a.fn.scrollToVisible=function(e){const t={}
const n=i()(e)
if(0===n.length)return
let s=n.offset(),a=n.outerWidth(),o=n.outerHeight(),r=s.top,c=r+o,l=s.left,u=l+a,d="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),f=this.scrollLeft(),_=this.outerHeight(),h=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
r-=e.top
c-=e.top
l-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){_=i()(window).height()
i()("#wizard_box:visible").length>0&&(_-=i()("#wizard_box:visible").height())
h=i()(window).width()
r-=d
l-=f
c-=d
u-=f}r<0||_<o&&c>_?t.scrollTop=r+d:c>_&&(t.scrollTop=c+d-_+20)
l<0?t.scrollLeft=l+f:u>h&&(t.scrollLeft=u+f-h+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},G4i8:function(e,t,n){var s={"./__tests__/lti.resourceImported.test.js":["LFe7",4134],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4135],"./__tests__/lti.showAlert.test.js":["+y7l",4136],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4137],"./lti.enableScrollEvents.js":["HVU3",4197],"./lti.fetchWindowSize.js":["OANa",4198],"./lti.frameResize.js":["bSyB",4127],"./lti.removeUnloadMessage.js":["tjuu",4138],"./lti.resourceImported.js":["FC2N",4199],"./lti.screenReaderAlert.js":["YYEg",4200],"./lti.scrollToTop.js":["W/R1",4201],"./lti.setUnloadMessage.js":["6fDN",4139],"./lti.showAlert.js":["onLg",4202],"./lti.showModuleNavigation.js":["NSTA",4203],"./requestFullWindowLaunch.js":["8IHO",4204],"./toggleCourseNavigationMenu.js":["ECMy",3629,4205]}
function i(e){if(!n.o(s,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=s[e],i=t[0]
return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(s)}
i.id="G4i8"
e.exports=i},THl1:function(e,t,n){"use strict"
n.r(t)
var s=n("ouhR")
var i=n.n(s)
n("gI0r")
var a=n("M+ds")
n("fY8A")
var o=n("UWEG")
var r=n("oG6o")
var c=n("jFoo")
var l=n("3lLS")
var u=n.n(l)
u()(()=>{const e=i()("#tool_form")
const t=function(){const t=e.find("button")
e.show()
t.attr("disabled",false)
setTimeout(()=>{t.attr("disabled",true).text(t.data("expired_message"))},15e4)
e.submit((function(){i()(this).find(".load_tab,.tab_loaded").toggle()}))}
const n=function(){e.attr("target","_blank")
t()}
switch(e.data("tool-launch-type")){case"window":e.show()
n()
break
case"self":e.removeAttr("target")
try{e.submit()}catch(e){}break
default:try{e.submit()}catch(e){}i()("#tool_content").bind("load",()=>{if("https:"!==document.location.protocol||i()("#tool_form")[0].action.indexOf("https:")>-1){i()("#insecure_content_msg").hide()
e.hide()}})
setTimeout(()=>{if(i()("#insecure_content_msg").is(":visible")){i()("#load_failure").show()
n()}},3e3)}const s=e.data("tool-id")||"unknown"
const c=e.data("tool-path")
const l=e.data("message-type")||"tool_launch"
Object(a["a"])(l,s,c)
let u
let d,f
const _=i()(window)
u=i()(".tool_content_wrapper")
const h=new r["a"](d)
i()("iframe#tool_content")
const m=u.find(".before_external_content_info_alert, .after_external_content_info_alert")
m.on("focus",(function(e){u.find("iframe").css("border","2px solid #0374B5")
i()(this).removeClass("screenreader-only-tool")}))
m.on("blur",(function(e){u.find("iframe").css("border","none")
i()(this).addClass("screenreader-only-tool")}))
i()("body").hasClass("ic-full-screen-lti-tool")||(f=u.offset().top+i()("#footer").outerHeight(true))
u.length&&!i()("body").hasClass("ic-full-screen-lti-tool")&&_.resize(()=>{u.data("height_overridden")||h.resize_tool_content_wrapper(_.height()-f-i()("#sequence_footer").outerHeight(true))}).triggerHandler("resize")
null!=ENV.LTI&&null!=ENV.LTI.SEQUENCE&&i()("#module_sequence_footer").moduleSequenceFooter({assetType:"Lti",assetID:ENV.LTI.SEQUENCE.ASSET_ID,courseID:ENV.LTI.SEQUENCE.COURSE_ID})
i()("#content").on("click","#mark-as-done-checkbox",(function(){o["a"].toggle(this)}))})
Object(c["b"])()},UWEG:function(e,t,n){"use strict"
var s=n("ouhR")
var i=n.n(s)
n("dhbk")
t["a"]={toggle(e){const t=i()(e).data.bind(i()(e))
return i.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
i()(e).toggleClass("btn-success")
i()("i",e).toggleClass("icon-empty icon-complete")
i()(".mark-done-labels span",e).toggleClass("visible")})}}},aq8L:function(e,t,n){"use strict"
var s=n("HGxv")
var i=n("8WeW")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"es-ES":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Está seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ali ste prepričani, da želite to izbrisati?"}}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"th":{"buttons":{"cancel":"ยกเลิก","delete":"ลบ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"แน่ใจว่าต้องการลบหรือไม่"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR")
n("0sPK")
var a=s["default"].scoped("instructure_misc_plugins")
var o=n("ouhR")
var r=n.n(o)
var c=n("gI0r")
var l=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
r.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(c["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(c["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(r.a.raw(n))}
r.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){const e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const s=t.innerWidth()
e.remove()
return n-s}
r.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
r.a.fn.undim=function(e){return this.animate({opacity:1},e)}
r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let s=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!s){e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const s=e.prepareData?e.prepareData.call(t,n):{}
s.authenticity_token=Object(l["a"])()
r.a.ajaxJSON(e.url,"DELETE",s,n=>{e.success.call(t,n)},(n,s,i,a)=>{e.error&&r.a.isFunction(e.error)?e.error.call(t,n,s,i,a):r.a.ajaxJSON.unhandledXHRs.push(s)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){s=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=r()(e.message).dialog(r.a.extend({},{modal:true,close:i,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:o,click(){s=true
r()(this).dialog("close")}}]},t))
return}s=confirm(e.message)}i()}
r.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
r.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let s=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(s="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let a=false
for(t=0;t<r.a._checkFragments.fragmentList.length;t++){const e=r.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(a=true)}a||r.a._checkFragments.fragmentList.push({doc:i,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(()=>{s&&s.length>0?i.triggerHandler("document_fragment_change",s):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){const e=r.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const s=n.doc
if(s[0].location.hash!=n.fragment){s.triggerHandler("document_fragment_change",s[0].location.hash)
n.fragment=s[0].location.hash
r.a._checkFragments.fragmentList[t]=n}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
r.a.fn.showIf=function(e){if(r.a.isFunction(e))return this.each((function(t){r()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
r.a.fn.disableIf=function(e){r.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
r.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}r()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const s=this.width()
const i=this.height()
const a=(e.container||this).zIndex()
t=r()(document.createElement("div"))
t.css({width:s+6,height:i+6,top:n.top-3,left:n.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
r()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()}))
e&&e.scroll&&r()("html,body").scrollToVisible(t)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
r.a.fn.fillWindowWithMe=function(e){const t=r.a.extend({minHeight:400},e),n=r()(this),s=r()("#wrapper"),i=r()("#main"),a=r()("#not_right_side"),o=r()(window),c=r()(this).add(t.alsoResize)
function l(){c.height(0)
const e=o.height()-(s.offset().top+s.outerHeight())+(i.height()-a.height()),l=Math.max(400,e)
c.height(l)
r.a.isFunction(t.onResize)&&t.onResize.call(n,l)}l()
o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",l)
return this}
r.a.fn.autoGrowInput=function(e){e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||r()(this).width(),n="",s=r()(this),i=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),letterSpacing:s.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(()=>{if(n===(n=s.val()))return
i.text(n)
const a=i.width(),o=a+e.comfortZone>=t?a+e.comfortZone:t,r=s.width(),c=o<r&&o>=t||o>t&&o<e.maxWidth
c&&s.width(o)})}
i.insertAfter(s)
r()(this).bind("keyup keydown blur update change",a)}))
return this}
r.a},fhP7:function(e,t,n){"use strict"
n.d(t,"k",(function(){return s}))
n.d(t,"e",(function(){return i}))
n.d(t,"f",(function(){return a}))
n.d(t,"g",(function(){return o}))
n.d(t,"h",(function(){return r}))
n.d(t,"l",(function(){return c}))
n.d(t,"i",(function(){return l}))
n.d(t,"b",(function(){return u}))
n.d(t,"j",(function(){return d}))
n.d(t,"c",(function(){return f}))
n.d(t,"d",(function(){return _}))
n.d(t,"a",(function(){return h}))
const s="@"
const i="mentions-marker"
const a="span#"+i
const o="mention-menu"
const r="span#mention-menu"
const c=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const l="mentions.NavigationEvent"
const u="mentions.InputChangeEvent"
const d="mentions.SelectionEvent"
const f={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const _={[f.up]:"UpArrow",[f.down]:"DownArrow",[f.enter]:"Enter"}
const h={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,t)=>`${e}-mention-popup-item-${t}`}},jFoo:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
n.d(t,"b",(function(){return m}))
var s=n("fhP7")
var i=n("VTBJ")
const a="error"
const o="unsupported_subject"
const r="wrong_origin"
const c="bad_request"
const l=({targetWindow:e,origin:t,subject:n,message_id:s})=>{const l=(a={})=>{const o={subject:n+".response"}
s&&(o.message_id=s)
e?e.postMessage(Object(i["a"])(Object(i["a"])({},o),a),t):console.error("Error sending response postMessage: target window does not exist")}
const u=()=>{l({})}
const d=(e,t)=>{const n={code:e}
t&&(n.message=t)
l({error:n})}
const f=e=>{d(a,e)}
const _=e=>{d(c,e)}
const h=()=>{d(r)}
const m=()=>{d(o)}
return{sendResponse:l,sendSuccess:u,sendError:d,sendGenericError:f,sendBadRequestError:_,sendWrongOriginError:h,sendUnsupportedSubjectError:m}}
var u=l
const d={}
const f=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const _=["A2ExternalContentReady","LtiDeepLinkingResponse",s["i"],s["b"],s["j"]]
async function h(e,t=false){if(e.data.source&&e.data.source.includes("react-devtools"))return false
let s
try{s="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}const i=s.subject||s.messageType
const a=u({targetWindow:e.source,origin:e.origin,subject:i,message_id:s.message_id})
if(_.includes(i))return false
if(!f.includes(i)){t&&a.sendUnsupportedSubjectError()
return false}try{const o=await n("G4i8")(`./${i}.js`)
const r=o.default({message:s,event:e,responseMessages:a})
!r&&t&&a.sendSuccess()
return true}catch(e){console.error(`Error loading or executing message handler for "${i}": ${e}`)
t&&a.sendGenericError(e.message)
return false}}function m(){var e,t
const n=null===(e=ENV)||void 0===e||null===(t=e.FEATURES)||void 0===t?void 0:t.lti_platform_storage
window.addEventListener("message",e=>{""!==e.data&&h(e,n)})}},msTH:function(e,t,n){"use strict"
var s=n("ouhR")
var i=n.n(s)
var a=n("Y/W1")
var o=n.n(a)
var r=n("gI0r")
var c=n("HGxv")
var l=n("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"es-ES":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"th":{"user_content_aaf0fb5a":"เนื้อหาของผู้ใช้"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
n("jQeR")
n("0sPK")
var u=c["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=i()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=i()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=i()(`<a\n        id='media_comment_${Object(r["a"])(i()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(r["a"])(i()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(r["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(r["a"])(i()(e).attr("data-alt"))}'\n      />`)
t.html(i()(e).html())
return t},convert(e,t={}){const n=i()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=i()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const s=i()(`<form\n            action='${Object(r["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(r["a"])(t)}'\n            id='form-${Object(r["a"])(t)}'\n          />`)
s.append(i()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
s.append(i()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
i()("body").append(s)
setTimeout(()=>s.submit(),0)
return i()(`<iframe\n            class='user_content_iframe'\n            name='${Object(r["a"])(t)}'\n            style='width: ${Object(r["a"])(e.data("uc_width"))}; height: ${Object(r["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(r["a"])(u.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=i()(t)
const s=d.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(s)})}return n.html()}}
t["a"]=d},oG6o:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var s=n("ouhR")
var i=n.n(s)
class a{constructor(e){this.minToolHeight=e||450}sanitizedWrapperId(e){var t
return null===e||void 0===e||null===(t=e.toString())||void 0===t?void 0:t.replace(/[^a-zA-Z0-9_-]/g,"")}tool_content_wrapper(e){let t=i()(`div[data-tool-wrapper-id*='${this.sanitizedWrapperId(e)}']`)
t.length<=0&&1===i()(".tool_content_wrapper").length&&(t=i()(".tool_content_wrapper"))
return t}resize_tool_content_wrapper(e,t){let n=e
"number"!==typeof n&&(n=this.minToolHeight)
const s=t||this.tool_content_wrapper()
s.height(!e||this.minToolHeight>n?this.minToolHeight:n)}}}}])

//# sourceMappingURL=external_tools_show-c-c0a993bce2.js.map