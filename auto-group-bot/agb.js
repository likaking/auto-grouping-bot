let counter = 0;
var C_grp = document.getElementsByClassName("Cre_grps");
let shuff = [];
let third = [];

var arr_0 = ["Tade Adeyinka","Steven Campbell", "Rose	Peake","Steven Campbell","Rose Peake","Colin Lambert","Kimberly Arnold","Kevin Henderson","Heather Quinn","Victor Nolan"];
var arr_1 = ["Paul Hart","Oliver Morgan","Brian Sanderson","Samantha Hamilton","Megan McGrath","Heather Quinn","Joan Ogden","Claire Ross","Piers Ross","Isaac Ball"];
var arr_2 = ["Karen Davidson","Adrian Mitchell","Claire McGrath","Neil Kelly","David Watson","Nicholas Payne","Samantha Butler","Evan Skinner","John Murray","Sam Rees"];
var arr_3 = ["Cameron Wilkins","Molly Marshall","Piers Scott","Amelia Lawrence","Dominic MacLeod","Bernadette Chapman","Melanie Avery","Wike Amodu","Benjamin Buckland","Dominic	Metcalfe","Christian Morgan"];
var arr_4 = ["Oliver Lyman","Wanda Dickens","Simon Brown","Blake Mackay","Audrey Walsh","Michelle Miller","Frank Martin","Anne Wilkins","Leah Miller","Chinedu Usman"];
var arr_5 = [];
var arr_6 = [];
var arr_7 = [];
var arr_8 = [];
var arr_9 = [];
var arr_10 = [];
var arr_11 = [];
var arr_12 = [];
var arr_13 = [];
var arr_14 = [];
var arr_15 = [];
var arr_16 = [];
var arr_17 = [];
var arr_18 = [];
var arr_19 = [];
var arr_20 = [];
var arr_21 = [];
var arr_22 = [];
var arr_23 = [];
var arr_24 = [];
var arr_25 = [];
var arr_26 = [];
var arr_27 = [];
var arr_28 = [];
var arr_29 = [];
var arr_30 = [];

//USE Dangote Group

let groupsSEE  = [];

let groups  = [];

//let groupsADMINSAMP  = ["Gold Group", "Diamond Group", "Platinum Group", "Kings Group", "Queens Group", "Nelson Mandela Group", "M. L. King Group", "Elon Musk Group","Gold Group2", "Diamond Group2", "Platinum Group2", "Kings Group2", "Queens Group2", "Nelson Mandela Group2", "M. L. King Group2", "Elon Musk Group2", "Gold Group3", "Diamond Group3", "Platinum Group3", "Kings Group3", "Queens Group3", "Nelson Mandela Group3", "M. L. King Group3", "Elon Musk Group3","Gold Group4", "Diamond Group4", "Platinum Group4", "Kings Group4", "Queens Group4", "Nelson Mandela Group"];


let groupsADMIN  = ["Gold Group", "Diamond Group", "Platinum Group", "Kings Group", "Queens Group"];



let describe_groups = ["For Gold lovers","For Diamond lovers","For Platinum Group lovers","For Kings Group lovers","For Queens Group lovers"];

let groupsA  = []

let groupsB  = [];

all_members = [];

groupsSEE = [...groupsADMIN];
groupsA = [...groupsADMIN];
groupsB = [...groupsADMIN];
//groups = groupsADMIN;
groups.push(...groupsADMIN);
//	onload = ()=>{console.log(groupsSEE)};

	
all_members_Logs = [];

//Find the total members in all the groups
let totalMemberAGB;
var total_Member;
var total_MembersAdmin

function revealGrpProp(){
totalMemberAGB = arr_0.length + arr_1.length + arr_2.length + arr_3.length + arr_4.length + arr_5.length +
arr_6.length + arr_7.length + arr_8.length + arr_9.length + arr_10.length + arr_11.length + arr_12.length +
arr_13.length + arr_14.length + arr_15.length + arr_16.length + arr_17.length + arr_18.length + arr_19.length +
arr_20.length + arr_21.length + arr_22.length + arr_23.length + arr_24.length + arr_25.length + arr_26.length +
arr_28.length + arr_29.length;
document.getElementById("totalMemAdmin").innerHTML = totalMemberAGB;
total_MembersAdmin = document.getElementById("gen_membersAdmin").innerHTML = groupsADMIN.length +" Avialable groups"
total_Members = document.getElementById("gen_members").innerHTML = totalMemberAGB + " people are already part of the " +groupsADMIN.length +" avialable groups"
}
revealGrpProp()


var u_re_grped = document.getElementById("success");
var UR_grp = document.getElementById("urGRP");
var MBR_name = document.getElementById("name");
var MBR_contact = document.getElementById("contact");
var av_GRPS = document.getElementById("av_grps").innerHTML = "Avialable groups";

//var Title_Event = document.getElementById("sHead").innerHTML = ;

  


let change_AVAILname = document.getElementById (grp_Avial_Changename);
var success_MSG_S = "Dear ";
var success_MSG = ", you are officially wellcomed to "+ UR_grp.innerHTML + "."  ;

//Pick A Group

var inpi = document.getElementById("name");
let rename_field = document.getElementById("rename_me");
let select_OPTIONS = document.getElementById("options");




const txtB = document.getElementById("textarea");
const txtB2 = document.getElementById("kkk");
const sel_box = document.getElementById("options");
const EDT_GRPinfo = document.getElementById("about_groups");


function rename_AllOPTIONSbx(){
let xi = document.getElementById("options").selectedIndex;
let yi = document.getElementById("options").options;
let findINDEX = yi[xi].index;
sel_box[findINDEX].innerHTML = rename_field.value;
}


function Edit_dAboutGRPS() {
doEdit();
//var text = document.createTextNode(txtB.value);
//document.getElementById("display").appendChild(text );
 let reply = "";
  for (let i = 0; i < groupsADMIN.length; i++) {
    if (sel_box.value === groupsADMIN[i]) {
  EDT_GRPinfo.value = describe_groups[i];
    //console.log(reply);
  }
  }
}
Edit_dAboutGRPS()



function fill_RenameFields(){
 sel_box.value.trim();
rename_field.value = sel_box.value ;
}

function doEdit(){
rename_field.value = sel_box.value ;
}


////////////SAVE GROUP INFO
function save_grpInfo(){
ImportantInfo();
change_AvailGroups();
change_eventDATES();
change_CompName();
change_event();
Edit_SucessMSG();
add_COMPdecri()

}



function add_COMPdecri(){
if(admin_txt_comp.value !== ""){
document.getElementById("About_THIScomp").innerHTML = admin_txt_comp.value ;
}

else{
document.getElementById("About_THIScomp").innerHTML = "This grouping event is organised by Global Impact Plc. Each group will establish a viable business in their preferred community." 
}

}
add_COMPdecri()
admin_txt_comp.value = document.getElementById("About_THIScomp").innerHTML;



function change_CompName(){
if(grp_companynAME.value !== ""){
document.getElementById("sHead").innerHTML = grp_companynAME.value ;
}

else{
document.getElementById("sHead").innerHTML = "Global Impact Plc";
}
}
change_CompName();

grp_companynAME.value = document.getElementById("sHead").innerHTML;

//For attaching events to the dash board


function change_event(){
if(grp_event.value !== ""){
document.getElementById("_Event").innerHTML = grp_event.value ;
}

else{
document.getElementById("_Event").innerHTML = "Business IQ Challenge";
}
}
change_event();

grp_event.value = document.getElementById("_Event").innerHTML;


function displayAdimEvents(){
  document.getElementById("AdminGrpAct").innerHTML = document.getElementById("sHead").innerHTML;
  document.getElementById("adminGrpEvent").innerHTML = document.getElementById("_Event").innerHTML;
  }
  displayAdimEvents()

  const monthA = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let yearA  = new Date().getFullYear()
  let CurrmonthA = new Date();
  let disMonthA = CurrmonthA.getMonth() + Number(1)


function change_eventDATES(){
let COMPOSE_date = stating_DT.value;
if(stating_DT.value !== "" ){
document.getElementById("COUNT_down").innerHTML = COMPOSE_date ;
}

else{
document.getElementById("COUNT_down").innerHTML = "2/" + disMonthA + "/" + yearA + " to " + "15/" + disMonthA + "/" + yearA ;
}
}
change_eventDATES();
stating_DT.value = document.getElementById("COUNT_down").innerHTML;



function toggle_THIS(){
if ( document.getElementById("dis_hidden").style.display === "none"){
document.getElementById("dis_hidden").style.display = "block";
}

else{
document.getElementById("dis_hidden").style.display = "none";
}

}

function toggleoo_THIS(){

if ( document.getElementById("doYOU_delete").style.display === "none"){
document.getElementById("doYOU_delete").style.display = "block";
}

else{

document.getElementById("doYOU_delete").style.display = "none";
}

}

function HIDE_brk(){
document.getElementById("BRK_BRK").style.display = "none";

}


function YES_OrNo(field){

field.style.display = "block";

HIDE_brk()

}

function _OrNo(field){


field.style.display = "none";

document.getElementById("BRK_BRK").style.display = "block";

}

//Edit groups


//Using select to assign values to rename and co;

function rename_MYgrp(){
let get_grpIndx = groupsADMIN.indexOf(sel_box.value);
if (get_grpIndx > -1 && rename_field.value !== "" && sel_box.value !== "" ){
groupsADMIN.splice(get_grpIndx,1,rename_field.value)

}
else{
alert("The rename text field is empty");
return false;
}
rename_AllOPTIONSbx()
//groups.splice(get_grpIndx,1)
Edit_dAboutGRPS()
}

function delete_MYgrp(){
let get_grpIndxi = groupsADMIN.indexOf(sel_box.value);
//groups.splice(rename_field.value,1,rename_field.value)
if (get_grpIndxi > -1){
groupsADMIN.splice(get_grpIndxi,1)
}

document.getElementById("doYOU_delete").style.display = "none";
/*
console.log(get_grpIndxi)
console.log(groups)
console.log(describe_groups)
console.log(rename_field.value)
*/
}

function del_SELBX_info(){
sel_box.remove(sel_box.selectedIndex);
}

//////////////// 2 in 1
function DEL_AboutgrpF(){
EDT_GRPinfo.value = "";
let edt_grpDesc =  groupsADMIN.indexOf(sel_box.value);
//const index = groups.findIndex(fruit => fruit === sel_box.value);
//console.log(index +" hi");
if(edt_grpDesc > -1 && rename_field.value !== "" && sel_box.value !== ""){
describe_groups.splice(edt_grpDesc,1)
}

else{
alert("There is nothing else to delete");

return false;

}

delete_MYgrp()
del_SELBX_info()
Edit_dAboutGRPS()
doEdit()
console.log(describe_groups);
console.log(groups);
}

function edit_grpCont(){
let get_grpIndxedit = groupsADMIN.indexOf(sel_box.value);
let edt_grpDesc =  describe_groups.indexOf(EDT_GRPinfo.value);
if (get_grpIndxedit > -1 && rename_field.value !== "" && sel_box.value !== "" && EDT_GRPinfo.value !==""){
describe_groups.splice(get_grpIndxedit,1,EDT_GRPinfo.value)
}

else{
alert("There is nothing left to replace")
}

}

grp_Avial_Changename.value = document.getElementById("av_grps").innerHTML;
function change_AvailGroups(){
if(grp_Avial_Changename.value !== ""){
document.getElementById("av_grps").innerHTML = grp_Avial_Changename.value ;
}
else{
document.getElementById("av_grps").innerHTML = "Available groups";
}
}
change_AvailGroups()


function use_PhoneContact(){
if ( document.getElementById("use_phone").checked === true){
document.getElementById("Phone_contact").style.display = "block";
document.getElementById("yourGRP_brk1").style.display = "block";
document.getElementById("yourGRP_brk2").style.display = "block";
}
else{
document.getElementById("Phone_contact").style.display = "none";
document.getElementById("yourGRP_brk1").style.display = "none";
document.getElementById("yourGRP_brk2").style.display = "none";
}
}

function use_otherFields(){
if ( document.getElementById("otherflds").checked === true){
document.getElementById("Name_otherFIELD").style.display = "block";
document.getElementById("other_contact").style.display = "block";
document.getElementById("oda_FLDbrk1").style.display = "block";

}
else{
document.getElementById("other_contact").style.display = "none";
document.getElementById("Name_otherFIELD").style.display = "none";
document.getElementById("oda_FLDbrk1").style.display = "none";

}
}

function hide_emailFields(){
if ( document.getElementById("use_Email").checked === true){
document.getElementById("contact").style.display = "none";
document.getElementById("emailZ_brk1").style.display = "none"
document.getElementById("emailZ_brk2").style.display = "none"
}
else{
document.getElementById("contact").style.display = "block";
document.getElementById("emailZ_brk1").style.display = "block"
document.getElementById("emailZ_brk2").style.display = "block"
}

}

function UseName_Only(){
if ( document.getElementById("use_NAMEonly").checked === true){
document.getElementById("contact").style.display = "none";
document.getElementById("emailZ_brk1").style.display = "none";
document.getElementById("emailZ_brk2").style.display = "none";
document.getElementById("other_contact").style.display = "none";
document.getElementById("Name_otherFIELD").style.display = "none";
document.getElementById("oda_FLDbrk1").style.display = "none";
document.getElementById("Phone_contact").style.display = "none";
document.getElementById("yourGRP_brk1").style.display = "none";
document.getElementById("yourGRP_brk2").style.display = "none";
}

else{
document.getElementById("Phone_contact").style.display = "block";
document.getElementById("yourGRP_brk1").style.display = "block";
}

}

let first_msg;
let Sec_msgFinal;

 let thirdMsg_nCo;
 
 Wellcome_MsgSucess = "Hello <name>, we are glad to have you in our group. You are Officially wellcomed to <Group>. We have been tasked with building a viable business organisation in our prefered community. Also connect with members of our group, to enable us form a very strong bond. Winning is the only thing we know how to do. Best of luck. #Business IQ Challenge" ;
 admin_txt_B_Success.value = Wellcome_MsgSucess;
 
 
 
function Edit_SucessMSG(){
Wellcome_MsgSucess.replace(Wellcome_MsgSucess,admin_txt_B_Success.value)
Wellcome_Msg = admin_txt_B_Success.value;
let salute_msg = Wellcome_Msg;
let Second_Msg = salute_msg.substring(salute_msg.lastIndexOf('e>') + 2)
thirdMsg_nCo = Second_Msg.substring(Second_Msg.lastIndexOf('p>')+ 2 )
first_msg = salute_msg.replace(Second_Msg," ").replace("<name>","");
Sec_msgFinal = Second_Msg.replace(thirdMsg_nCo," ").replace(" <Group>","");

}
Edit_SucessMSG()


function show_sucess(){
  document.getElementById("success").style.display = "block";
  document.getElementById("success_INNER").innerHTML = "<h2>"+ "Wellcome to " +UR_grp.innerHTML+ "</h2>" + "<br>" + "<div>" + first_msg + MBR_name.value +Sec_msgFinal+UR_grp.innerHTML + thirdMsg_nCo + "</div>" ;
}
  
  
  function close_sucess(){
  document.getElementById("success").style.display = "none";
  document.getElementById("pick_BTN").disabled = false
  }

  function killPickBtn(){
    if(document.getElementById("success").style.display === "block"){
      document.getElementById("pick_BTN").disabled = true
    }
  }
  
  

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
  
}
let Live_feeds
let compose
let dis_ur_grp
let remove_1st
let checkMyEmail = /\S+@\S+\.\S+/;

function pick_A_grp(){

shuffle(groups);
if(MBR_contact.value !== "" && MBR_name.value !== "" && checkMyEmail.test(contact.value) === true ){
remove_1st = groups.shift();

dis_ur_grp = document.getElementById("urGRP").innerHTML = remove_1st;
compose = MBR_name.value + ", " + MBR_contact.value;
Live_feeds = MBR_name.value +", "+ "Joined "  + dis_ur_grp + " on " + new Date().toLocaleString();
all_members.push(compose);
all_members_Logs.push(Live_feeds);

let msg_content = document.createTextNode(Live_feeds);
let list = document.createElement("div")
list.style.padding = "10px";
list.style.width = "95%";
list.style.marginBottom = "7px";
list.style.background = "none";
list.style.border = "1px solid rgb(71, 186, 231)";
list.style.borderStyle = "dashed";
list.appendChild(msg_content);
document.getElementById("gen_membersAdminxx").appendChild(list);
counter++;

//let gen_random_grps = groups[Math.floor(Math.random() * groups.length)];

if (groups.length === 0){
  groupsA.length = 0;
  groupsA = [...groupsADMIN];
shuff = shuffle(groupsA).reverse();
let re_shuff = shuffle(shuff)
groups.push(...re_shuff);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[0])){
arr_0.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[1])){
arr_1.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[2])){
arr_2.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[3])){
arr_3.push(inpi.value);

}

if ( document.getElementById("urGRP").innerHTML === (groupsB[4])){
arr_4.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[5])){
arr_5.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[6])){
arr_6.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[7])){
arr_7.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[8])){
arr_8.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[9])){
arr_9.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[10])){
arr_10.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[11])){
arr_11.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[12])){
arr_12.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[13])){
arr_13.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[14])){
arr_14.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[15])){
arr_15.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[16])){
arr_16.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[17])){
arr_17.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[18])){
arr_18.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[19])){
arr_19.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[20])){
arr_20.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[21])){
arr_21.push(inpi.value);
}
if ( document.getElementById("urGRP").innerHTML === (groupsB[22])){
arr_22.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[23])){
arr_23.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[24])){
arr_24.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[25])){
arr_25.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[26])){
arr_26.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[27])){
arr_27.push(inpi.value);
}

if ( document.getElementById("urGRP").innerHTML === (groupsB[28])){

arr_28.push(inpi.value);

}

if ( document.getElementById("urGRP").innerHTML === (groupsB[29])){
arr_29.push(inpi.value);
}


document.getElementById("msg_counter").innerHTML = counter + " messages";
document.getElementById("pick_BTN").disabled = true
show_sucess()
revealGrpProp()
showEveryGroup()
console.log(groupsADMIN)
console.log(groupsB)
console.log(arr_5)
}
else{alert("Please provide your name and a valid address")}
}


function clear_allLvfeeds(){
document.getElementById("gen_membersAdminxx").innerHTML = "";
counter = 0;
document.getElementById("msg_counter").innerHTML = "";

}

let dummyNames = [arr_0[0],arr_1[0],arr_2[0],arr_3[0],arr_4[0]]
let dummyGroups = [...groupsADMIN]
let Dummycounter = 0;

function dummyGrpMessage(){
  let dummyNum = dummyNames.length
  while (dummyNum > 0){
    counter++;
    Dummycounter++;
 let dummyNamesCut = dummyNames.shift();
 let dummyGroupCut = dummyGroups.shift();
 let dummyMsgAlert = dummyNamesCut + " Joined "  + dummyGroupCut + " on " + new Date().toLocaleString();
 let dummy_content = document.createTextNode(dummyMsgAlert);
 let dummylist = document.createElement("div")
 dummylist.style.padding = "10px";
 dummylist.style.width = "95%";
 dummylist.style.marginBottom = "7px";
 dummylist.style.background = "none";
 dummylist.style.border = "1px solid rgb(71, 186, 231)";
 dummylist.style.borderStyle = "dashed";
 dummylist.appendChild(dummy_content);
 document.getElementById("gen_membersAdminxx").appendChild(dummylist);
 document.getElementById("msg_counter").innerHTML = counter + " new messages";
 dummyNum--
  }
}
dummyGrpMessage()


//////Function Create group

let About_groupINFO = [];

function Create_URgroup(){
if (groupsADMIN.length > 30){
alert("Sorry!,this current version of AGB can only host 30 groups")
return false;
}

if(grp_name.value !== ""  && admin_txt_B.value !== "" ){
let OnlyGrp_Name = grp_name.value;
let Groupz_Info = admin_txt_B.value;
let grpNa_me = grp_name.value + " , " + admin_txt_B.value;
groupsADMIN.push(OnlyGrp_Name);
About_groupINFO.push(grpNa_me);
describe_groups.push(admin_txt_B.value);
  let selection_F = document.getElementById("options");
  let create_dS_F = document.createElement("option");
  create_dS_F.text = grp_name.value;
  selection_F.add(create_dS_F);
  doEdit()
  Edit_dAboutGRPS()
  revealGrpProp()
  showEveryGroup()
  groups.length = 0;
  groups.push(...groupsADMIN);
  groupsB.length = 0;
  groupsB = [...groupsADMIN];
  document.getElementById("groupsCreatedbyAdmin").innerHTML = OnlyGrp_Name +  " has been succefully created";
}
else{
  alert("Please fill all the group creation fields")
}
 
}


function shownHide(){

if ( document.getElementById("success1").style.width = (98 + "%") ){
document.getElementById("success1").style.width = 15 + "%";
document.getElementById("success1").style.height = 65 + "px";
document.getElementById("success1").style.left = 10 + "px";
document.getElementById("success1").style.top = 550 + "px";
document.getElementById("success1").style.resize = "none";
document.getElementById("Admin_control").style.display = "none";
document.getElementById("small_admin").style.display = "block";
document.getElementById("small_admin").style.height = 66 + "px";
document.getElementById("hide").style.display = "none";
document.getElementById("show").style.display = "block";
}
if (window.screen.width < 440  ){
document.getElementById("success1").style.width = 191 + "px";
document.getElementById("success1").style.height = 100 + "px";
document.getElementById("success1").style.left = 10 + "px";
document.getElementById("success1").style.top = 550 + "px";
//document.getElementById("adminHeader").style.backgroundColor = "rgba(43, 164, 212, 0.753)"
document.getElementById("success1").style.resize = "none";
document.getElementById("Admin_control").style.display = "none";
document.getElementById("small_admin").style.display = "block";
document.getElementById("small_admin").style.height = 66 + "px";
document.getElementById("adminHeader").style.width = 189.5 + "px";
document.getElementById("adminHeader").style.height = 22 + "px";
document.getElementById("Admin-Dash-board").style.width = 150 + "px";
document.getElementById("hide").style.display = "none";
document.getElementById("show").style.display = "block";
}



}


function close_it(){
if (document.getElementById("success1").style.display = "block"){
document.getElementById("success1").style.display = "none";
}
}

function SHOW(){
document.getElementById("success1").style.width = 100 + "%";
document.getElementById("success1").style.height = 700 + "px";
document.getElementById("success1").style.left = 0 + "px";
document.getElementById("success1").style.top = -1 + "px";
document.getElementById("success1").style.resize = "block";
document.getElementById("show").style.display = "none";
document.getElementById("hide").style.display = "block";
setTimeout(()=>{
document.getElementById("Admin_control").style.display = "block";
document.getElementById("small_admin").style.display = "none";
},150)
}

function Creategroups(){
if(document.getElementById("success1").style.width = (15 + "%")){
document.getElementById("success1").style.display = "block";
SHOW()
}
else{
document.getElementById("success1").style.display = "block";
document.getElementById("success1").style.left = 14 + "px";
}
}
//Creategroups()
//SHOW()

function ImportantInfo(){
document.getElementById("comeWith_BringTHIS").innerHTML = admin_txt_BVIP.value;
}

admin_txt_BVIP.value = document.getElementById("comeWith_BringTHIS").innerHTML;



// Reset the custom field

function reset_custMSG(){
document.getElementById("admin_txt_B_Success").value = "Odogwu <name>, how far na?. You are Officially wellcomed to <Group>. Bring a bottle of anointing oil and 1 million naira when coming. Also bring ur babes naked";

}

//Display all the groups with the group info, total number of members, etc.

let everyGroupCreated = [arr_0,arr_1,arr_2,arr_3,arr_4,arr_5,arr_6,arr_7,arr_8,arr_9,arr_10,arr_11,arr_12,arr_13,
  arr_14,arr_15,arr_16,arr_17,arr_18,arr_19,arr_20,arr_21,arr_22,arr_23,arr_24,arr_25,arr_26,arr_27,arr_28,arr_29];

 let getGrpName;
 let selBox = document.getElementById("options");

 let marginArr = ["80px","0px"]

  //Loop through the veryGroupCreated array, cut out all the arrays then display their contents
  function showEveryGroup(){
      document.getElementById("list_grps").innerHTML = " ";
      document.getElementById("totalMemberDB").innerHTML = " ";
      document.getElementById("EveryGroup").innerHTML = " ";
      document.getElementById("adminGrpsAll").innerHTML = " ";

    let everyGroupCreated2 = [...everyGroupCreated];
    let nameOfGroups = [...groupsADMIN];
    for (let g = 0 ; g < groupsADMIN.length; g++){
      let masterDiv = document.createElement("div");
      let eachGroupDiv = document.createElement("div");
      let grpBody = document.createElement("div");
      let grpHeader = document.createElement("div");
      let grpPara1 = document.createElement("div");
      let grpPara2 = document.createElement("div");
      let totalGrpMemb = document.createElement("div");
      let MemsInGrp = document.createElement("div");
      let motherDiv = document.createElement("div");
      let topHeaderDiv = document.createElement("div");

      let cutMargin = marginArr.shift();
      //marginArr.push(cutMargin)

      MemsInGrp.classList.add("howManyPerGrp");
      eachGroupDiv.classList.add("eachGroupDiv");
      grpPara1.classList.add("listGrpsAdmin");
      grpPara2.classList.add("listGrpsAdmin");
      grpHeader.classList.add("headerListGrp");
      totalGrpMemb.classList.add("totalPerGrp");
      topHeaderDiv.classList.add("topHeaderDiv");
      motherDiv.classList.add("motherDiv");
      //motherDiv.style.marginRight = cutMargin;
     
      let grpExt = everyGroupCreated2.shift();
      getGrpName = nameOfGroups.shift();
      
      let listGroupsnMembers = document.createTextNode(`⚬ `+ getGrpName);
      let listGroupsnMembers1 = document.createTextNode(getGrpName  + ' ' + grpExt.length + ' ' + "member" );
      let groupStats = document.createTextNode(grpExt.length + ' ' + "members" );
      let addGrpName = document.createTextNode(getGrpName);
      let addGrpTotal = document.createTextNode(grpExt.length + " members in " + getGrpName );
      let everyMember = " ";

      for(let ag = 0 ; ag < grpExt.length; ag++){
        everyMember += "🔹 " +  grpExt[ag] +  "<br/>"; 
      }
     
      rename_field.value = selBox.value
      MemsInGrp.appendChild(groupStats)
      grpHeader.appendChild(addGrpName)
      grpPara1.appendChild(listGroupsnMembers)
      grpPara1.appendChild(MemsInGrp)
      grpPara2.appendChild(listGroupsnMembers1)
      grpBody.innerHTML = everyMember
      totalGrpMemb.appendChild(addGrpTotal)
      topHeaderDiv.appendChild(grpHeader)
      topHeaderDiv.appendChild(totalGrpMemb)
      eachGroupDiv.appendChild(grpBody)
      motherDiv.appendChild(topHeaderDiv)
      motherDiv.appendChild(eachGroupDiv)
      masterDiv.appendChild(motherDiv)
      let clonemasterDiv = masterDiv.cloneNode(true);
      let cloneGrpPara1 = grpPara1.cloneNode(true);
      document.getElementById("EveryGroup").appendChild(masterDiv);
      document.getElementById("adminGrpsAll").appendChild(clonemasterDiv);
      //For groups and total memebers
      document.getElementById("list_grps").appendChild(grpPara1)
      document.getElementById("totalMemberDB").appendChild(cloneGrpPara1)
    }
    marginArr.length = 0;
    marginArr.push("115px","0px")
  }
  showEveryGroup()
 
 
let allGroupName = [...groupsADMIN];

let GName = allGroupName.length;

function appendGrpName(){
  while (GName > 0){
    let selectBx =  document.createElement("option");
    let cutOutGn = allGroupName.shift();
    selectBx.text = cutOutGn;
    selBox.options.add(selectBx)

  GName--
  }
  rename_field.value = sel_box.value ;
  Edit_dAboutGRPS()
}
appendGrpName()

//Show and hide sign up button

function onOffSignUp(){
  if(document.getElementById("signUpNow").style.display === "none"){
    document.getElementById("signUpNow").style.display = "block";
  }
  else{
    document.getElementById("signUpNow").style.display = "none"
  }
}

function onOffaboutUS(){
  if(document.getElementById("aboutUS").style.display === "none"){
    document.getElementById("aboutUS").style.display = "block";
  }
  else{
    document.getElementById("aboutUS").style.display = "none"
  }
}

//End grouping activity

function endGroupingActivity(){
  document.getElementById("groupingEndAdmin").style.display = "block";
  document.getElementById("groupingEnd").style.display = "block";
  document.getElementById("groupingEndAdmin").innerHTML = "The " + document.getElementById("_Event").innerHTML + " grouping activity has come to an end";
  document.getElementById("groupingEnd").innerHTML = "The " + document.getElementById("_Event").innerHTML + " grouping activity has come to an end";
  document.getElementById("pick_BTN").disabled = true;
}


function goLive(){
  document.getElementById("groupingEndAdmin").style.display = "block";
  document.getElementById("groupingEndAdmin").innerHTML = "";
  document.getElementById("groupingEndAdmin").innerHTML = "The " + document.getElementById("_Event").innerHTML + " grouping activity is now live"
  document.getElementById("groupingEnd").innerHTML = "";
  document.getElementById("groupingEnd").style.display = "none";
  document.getElementById("pick_BTN").disabled = false;
  setTimeout(() =>{
    document.getElementById("groupingEndAdmin").style.display = "none";
  },10000)
}
