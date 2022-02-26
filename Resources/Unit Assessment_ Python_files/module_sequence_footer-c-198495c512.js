(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3810,3631],{BrAc:function(e,t,r){"use strict"
var a=r("vDqi")
var n=r.n(a)
n.a.defaults.xsrfCookieName="_csrf_token"
n.a.defaults.xsrfHeaderName="X-CSRF-Token"
const o=n.a.defaults.headers.common.Accept
n.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+o
n.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=n.a},HMVb:function(e,t,r){"use strict"
r.d(t,"a",(function(){return c}))
var a=r("ODXe")
var n=r("i/8D")
var o=r("DUTp")
var s=r("IPIv")
var u={}
function i(e,t){if(!n["a"])return 16
var r=e||Object(o["a"])(e).documentElement
if(!t&&u[r])return u[r]
var a=parseInt(Object(s["a"])(r).getPropertyValue("font-size"))
u[r]=a
return a}var _=r("CyAq")
function c(e,t){var r=t||document.body
if(!e||"number"===typeof e)return e
var n=Object(_["a"])(e),o=Object(a["a"])(n,2),s=o[0],u=o[1]
return"rem"===u?s*i():"em"===u?s*i(r):s}},bZJi:function(e,t,r){"use strict"
r.d(t,"a",(function(){return B}))
var a=r("Ff2n")
var n=r("VTBJ")
var o=r("1OyB")
var s=r("vuIU")
var u=r("Ji7U")
var i=r("LK+K")
var _=r("q1tI")
var c=r.n(_)
var d=r("17x9")
var f=r.n(d)
var l=r("nAyT")
var p=r("KgFQ")
var g=r("jtGx")
var m=r("sQ3t")
var b=r("E+IV")
var h=r("UCAh")
var v=r("BTe1")
var w=r("J2CL")
var y=r("oXx0")
var S=r("jsCG")
var j=r("AdN2")
var O=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
var k,C,G,T,E,I
var N={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var B=(k=Object(l["a"])("8.0.0",{tip:"renderTip",variant:"color"}),C=Object(y["a"])(),G=Object(w["l"])(O,N),k(T=C(T=G(T=(I=E=function(e){Object(u["a"])(r,e)
var t=Object(i["a"])(r)
function r(){var e
Object(o["a"])(this,r)
for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s]
e=t.call.apply(t,[this].concat(n))
e._id=Object(v["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(s["a"])(r,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,a=e.as
var o=this.state.hasFocus
var s={"aria-describedby":this._id}
if(a){var u=Object(p["a"])(r,this.props)
var i=Object(g["a"])(this.props,r.propTypes)
return c.a.createElement(u,Object.assign({},i,s),t)}return"function"===typeof t?t({focused:o,getTriggerProps:function(e){return Object(n["a"])({},s,{},e)}}):Object(m["a"])(this.props.children,s)}},{key:"render",value:function(){var e=this
var t=this.props,r=t.renderTip,n=t.isShowingContent,o=t.defaultIsShowingContent,s=t.on,u=t.placement,i=t.mountNode,_=t.constrain,d=t.offsetX,f=t.offsetY,l=t.positionTarget,p=t.onShowContent,m=t.onHideContent,h=t.tip,v=(t.variant,Object(a["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var w=this.props.variant
w=w?"default"===w?"primary-inverse":"primary":this.props.color
return c.a.createElement(S["a"],Object.assign({},Object(g["b"])(v),{isShowingContent:n,defaultIsShowingContent:o,on:s,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:u,color:"primary"===w?"primary-inverse":"primary",mountNode:i,constrain:_,shadow:"none",offsetX:d,offsetY:f,positionTarget:l,renderTrigger:function(){return e.renderTrigger()},onShowContent:p,onHideContent:m,onFocus:this.handleFocus,onBlur:this.handleBlur}),c.a.createElement("span",{id:this._id,className:N.root,role:"tooltip"},r?Object(b["a"])(r):h))}}])
r.displayName="Tooltip"
return r}(_["Component"]),E.propTypes={children:f.a.oneOfType([f.a.node,f.a.func]).isRequired,renderTip:f.a.oneOfType([f.a.node,f.a.func]),isShowingContent:f.a.bool,defaultIsShowingContent:f.a.bool,as:f.a.elementType,on:f.a.oneOfType([f.a.oneOf(["click","hover","focus"]),f.a.arrayOf(f.a.oneOf(["click","hover","focus"]))]),color:f.a.oneOf(["primary","primary-inverse"]),placement:h["a"].placement,mountNode:h["a"].mountNode,constrain:h["a"].constrain,offsetX:f.a.oneOfType([f.a.string,f.a.number]),offsetY:f.a.oneOfType([f.a.string,f.a.number]),positionTarget:f.a.oneOfType([j["a"],f.a.func]),onShowContent:f.a.func,onHideContent:f.a.func,tip:f.a.node,variant:f.a.oneOf(["default","inverse"])},E.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},I))||T)||T)||T)},eGSd:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var a,n,o,s
var u=0
var i=[]
var _=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var c=!!r.leading
var d="maxWait"in r
var f=!("trailing"in r)||!!r.trailing
var l=d?Math.max(+r.maxWait||0,t):0
function p(t){var r=a
var s=n
a=n=void 0
u=t
if(true!==_){o=e.apply(s,r)
return o}}function g(e){u=e
i.push(setTimeout(h,t))
return c?p(e):o}function m(e){var r=e-s
var a=e-u
var n=t-r
return d?Math.min(n,l-a):n}function b(e){var r=e-s
var a=e-u
return"undefined"===typeof s||r>=t||r<0||d&&a>=l}function h(){var e=Date.now()
if(b(e))return v(e)
i.push(setTimeout(h,m(e)))}function v(e){S()
if(f&&a)return p(e)
a=n=void 0
return o}function w(){_=true
S()
u=0
a=s=n=void 0}function y(){return 0===i.length?o:v(Date.now())}function S(){i.forEach((function(e){return clearTimeout(e)}))
i=[]}function j(){var e=Date.now()
var r=b(e)
for(var u=arguments.length,_=new Array(u),c=0;c<u;c++)_[c]=arguments[c]
a=_
n=this
s=e
if(r){if(0===i.length)return g(s)
if(d){i.push(setTimeout(h,t))
return p(s)}}0===i.length&&i.push(setTimeout(h,t))
return o}j.cancel=w
j.flush=y
return j}},gCYW:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var a=r("QF4Q")
var n=r("i/8D")
var o=r("EgqM")
var s=r("DUTp")
function u(e){var t={top:0,left:0,height:0,width:0}
if(!n["a"])return t
var r=Object(a["a"])(e)
if(!r)return t
if(r===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var i=e===document?document:Object(s["a"])(r)
var _=i&&i.documentElement
if(!_||!Object(o["a"])(_,r))return t
var c=r.getBoundingClientRect()
var d
for(d in c)t[d]=c[d]
if(i!==document){var f=i.defaultView.frameElement
if(f){var l=u(f)
t.top+=l.top
t.bottom+=l.top
t.left+=l.left
t.right+=l.left}}return{top:t.top+(window.pageYOffset||_.scrollTop)-(_.clientTop||0),left:t.left+(window.pageXOffset||_.scrollLeft)-(_.clientLeft||0),width:(null==t.width?r.offsetWidth:t.width)||0,height:(null==t.height?r.offsetHeight:t.height)||0,right:i.body.clientWidth-t.width-t.left,bottom:i.body.clientHeight-t.height-t.top}}},msTH:function(e,t,r){"use strict"
var a=r("ouhR")
var n=r.n(a)
var o=r("Y/W1")
var s=r.n(o)
var u=r("gI0r")
var i=r("HGxv")
var _=r("8WeW")
Object(_["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"es-ES":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"th":{"user_content_aaf0fb5a":"เนื้อหาของผู้ใช้"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
r("jQeR")
r("0sPK")
var c=i["default"].scoped("user_content")
const d={translateMathmlForScreenreaders(e){var t,r
if(!(null!==(t=ENV)&&void 0!==t&&null!==(r=t.FEATURES)&&void 0!==r&&r.new_math_equation_handling)){const t=n()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const r=n()('<span class="hidden-readable"></span>')
r.html(t)
return r}},toMediaCommentLink(e){const t=n()(`<a\n        id='media_comment_${Object(u["a"])(n()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(u["a"])(n()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(u["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(u["a"])(n()(e).attr("data-alt"))}'\n      />`)
t.html(n()(e).html())
return t},convert(e,t={}){const r=n()("<div />").html(e)
r.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return d.toMediaCommentLink(this)}))
r.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){r.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=n()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=s.a.uniqueId("uc_")
let r="/object_snippet"
ENV.files_domain&&(r=`//${ENV.files_domain}${r}`)
const a=n()(`<form\n            action='${Object(u["a"])(r)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(u["a"])(t)}'\n            id='form-${Object(u["a"])(t)}'\n          />`)
a.append(n()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
a.append(n()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
n()("body").append(a)
setTimeout(()=>a.submit(),0)
return n()(`<iframe\n            class='user_content_iframe'\n            name='${Object(u["a"])(t)}'\n            style='width: ${Object(u["a"])(e.data("uc_width"))}; height: ${Object(u["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(u["a"])(c.t("User Content"))}'\n          />`)}))
r.find("img.equation_image").each((e,t)=>{const r=n()(t)
const a=d.translateMathmlForScreenreaders(r)
r.removeAttr("x-canvaslms-safe-mathml")
r.after(a)})}return r.html()}}
t["a"]=d},rCtJ:function(e,t,r){"use strict"
r.r(t)
var a=r("ouhR")
var n=r.n(a)
r("fY8A")
var o=r("An8g")
var s=r("BrAc")
var u=r("HGxv")
var i=r("8WeW")
Object(i["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar"},"es-ES":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de alumnos","select_group_to_grade_6df28d80":"Seleccionar grupo para evaluar"},"fa":{"must_select_a_student_group_first_15c6a3cb":"ابتدا باید یک گروه دانشجویی را انتخاب کنید","select_group_to_grade_6df28d80":"انتخاب گروه برای نمره"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmä"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","select_group_to_grade_6df28d80":"採点するグループを選択する"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for vurdering"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for vurdering"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","select_group_to_grade_6df28d80":"Wybierz grupę do oceny"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para nota"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","select_group_to_grade_6df28d80":"Выберите группу для оценки"},"sl":{"must_select_a_student_group_first_15c6a3cb":"Najprej je treba izbrati skupino študentov","select_group_to_grade_6df28d80":"Izberite skupino za ocenjevanje"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en elevgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"th":{"must_select_a_student_group_first_15c6a3cb":"จะต้องเลือกกลุ่มผู้เรียนก่อน","select_group_to_grade_6df28d80":"เลือกกลุ่มที่จะให้เกรด"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","select_group_to_grade_6df28d80":"选择要评分的组"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","select_group_to_grade_6df28d80":"選擇要評分的群組"}}'))
r("jQeR")
r("0sPK")
var _=u["default"].scoped("module_sequence_footer")
var c=r("q1tI")
var d=r.n(c)
var f=r("i8i4")
var l=r.n(f)
var p=r("FZ6K")
var g=r("dwl/")
class m extends c["Component"]{constructor(e){super(e)
this.state={selectedStudentGroupId:e.selectedStudentGroupId||"0"}
this.onStudentGroupSelected=this.onStudentGroupSelected.bind(this)}onStudentGroupSelected(e){if("0"!==e){s["a"].put(`/api/v1/courses/${this.props.courseId}/gradebook_settings`,{gradebook_settings:{filter_rows_by:{student_group_id:e}}})
this.setState({selectedStudentGroupId:e})}}render(){const e=this.props.filterSpeedGraderByStudentGroup&&"0"===this.state.selectedStudentGroupId
return d.a.createElement(d.a.Fragment,null,this.props.filterSpeedGraderByStudentGroup&&Object(o["a"])(g["a"],{categories:this.props.groupCategories,label:_.t("Select Group to Grade"),onChange:this.onStudentGroupSelected,value:this.state.selectedStudentGroupId}),Object(o["a"])(p["a"],{className:"btn button-sidebar-wide",disabled:e,disabledTip:_.t("Must select a student group first"),href:this.props.speedGraderUrl}))}}function b(){if(ENV.speed_grader_url){const e=document.getElementById("speed_grader_link_container")
l.a.render(Object(o["a"])(m,{courseId:ENV.COURSE_ID,filterSpeedGraderByStudentGroup:ENV.SETTINGS.filter_speed_grader_by_student_group,groupCategories:ENV.group_categories||[],selectedStudentGroupId:ENV.selected_student_group_id,speedGraderUrl:ENV.speed_grader_url}),e)}}n()(b)}}])

//# sourceMappingURL=module_sequence_footer-c-198495c512.js.map