

$(document).ready(function initProfile() {
    function createElement(s)
{
    return document.createElement(s)
}
    const IMAGE_CLASS_NAME = "je";
    const briefIntro = $("table")[0].children[0].children[1].children[0].innerHTML
    const lastLoginDate = briefIntro.substring(briefIntro.indexOf("最后登录："),briefIntro.lastIndexOf("，")).replace("最后登录：","").split("-")

    //get resource user info
    const userinfo = $(".text-info")[1].children
    const userintohtml = $(".text-info")[1].innerHTML
    var diff = 0
    if(userintohtml.includes("成功率"))
    {
        var successrate = userinfo[2].innerHTML.replace("%","")

    }else
    {
        var successrate = "--"
        diff++;
    }
    const date = userinfo[0].innerHTML
    const sendcard = userinfo[1].innerHTML

    const receivecard = userinfo[3-diff].innerHTML
    if(userintohtml.includes("登记率"))
    {
        var receiverate = userinfo[4-diff].innerHTML.replace("%","")
    }else
    {
        diff++;
        receiverate="--";
    }

    const takeactivity = userinfo[5-diff].innerHTML
    const participate_number = userinfo[6-diff].innerHTML

    //Declear and initalize elements
    const root_table = createElement("div");
    const style_ele = createElement("style");
    const col1 = createElement("div");
    const col2 = createElement("div");
    const col3 = createElement("div");
    const col4 = createElement("div");
    const registerImage =createElement("img");
    const sendImage = createElement("img");
    const receiveImage = createElement("img");
    const exchangeImage = createElement("img");
    const registerDateText = createElement("div");
    const sendText = createElement("div");
    const receiveText = createElement("div");
    const organizeActivityText = createElement("div");
    const joinActivityText = createElement("div");
    const successRateProgressParent = createElement("div");
    const registerRateProgressParent = createElement("div");
    const successRateProgress = createElement("div");
    const registerRateProgress = createElement("div");

    //set up root tabel
    /*addClass(root_table,'row')
    addClass(root_table,'text-center')*/
    root_table.classList.add("row");
    root_table.classList.add("text-center");

    //set up the 4 columns
    /*var sls = "col-sm-3"
    addClass(col1,sls)
    addClass(col2,sls)
    addClass(col3,sls)
    addClass(col4,sls)*/
    col1.classList.add("col-sm-3");
    col2.classList.add("col-sm-3");
    col3.classList.add("col-sm-3");
    col4.classList.add("col-sm-3");

    //set up images
    //addClass(registerImage,IMAGE_CLASS_NAME)
    registerImage.classList.add(IMAGE_CLASS_NAME);
    registerImage.src="https://cdn.jsdelivr.net/gh/askask11/files@main/log-in.svg";
    //addClass(sendImage,IMAGE_CLASS_NAME)
    sendImage.classList.add(IMAGE_CLASS_NAME);
    sendImage.src="https://cdn.jsdelivr.net/gh/askask11/files@main/sendmail.svg"
    receiveImage.classList.add(IMAGE_CLASS_NAME);
    //addClass(receiveImage,IMAGE_CLASS_NAME)
    receiveImage.src="https://cdn.jsdelivr.net/gh/askask11/files@main/getmail.svg"
    exchangeImage.classList.add(IMAGE_CLASS_NAME);
    //addClass(exchangeImage,IMAGE_CLASS_NAME)
    exchangeImage.src="https://cdn.jsdelivr.net/gh/askask11/files@main/exchange.svg"

    //set up texts
    registerDateText.innerHTML="注册于 <strong>"+date+"</strong><br>最后登录 <strong>"+lastLoginDate[0]+"年"+lastLoginDate[1]+"月"+lastLoginDate[2]+"日"+"</strong>"
    sendText.innerHTML="累计发片 <strong>"+sendcard+"</strong>张"
    receiveText.innerHTML="累计收片 <strong>"+receivecard+"</strong>张"
    organizeActivityText.innerHTML="发起活动 <strong>"+takeactivity+"</strong>次"
    joinActivityText.innerHTML="参加活动 <strong>"+participate_number+"</strong>次"

    //set up progress bar parents
    //addClass(registerRateProgressParent,"progress")
    //addClass(successRateProgressParent,"progress")
    registerRateProgressParent.classList.add("progress")
    successRateProgressParent.classList.add("progress")

    //set up progress bars
    /*addClass(successRateProgress,"progress-bar")
    addClass(successRateProgress,"progress-bar-info")
    addClass(successRateProgress,"progress-bar-striped")*/
    successRateProgress.classList.add("progress-bar")
    successRateProgress.classList.add("progress-bar-info")
    successRateProgress.classList.add("progress-bar-striped")
    $(successRateProgress).attr("role", "progressbar")
    successRateProgress.setAttribute("aria-valuenow", successrate)
    successRateProgress.setAttribute("aria-valuemin", 0)
    successRateProgress.setAttribute("aria-valuemax",100)
    successRateProgress.style.setProperty("width", successrate+"%")
    successRateProgress.innerHTML = "成功率"+successrate+"%"
    successRateProgress.addEventListener("mouseover",()=>{successRateProgress.classList.add("active")})
    successRateProgress.addEventListener("mouseout",()=>{successRateProgress.classList.remove("active")})

    //addClass(registerRateProgress,"progress-bar")
    //addClass(registerRateProgress,"progress-bar-success")
    //addClass(registerRateProgress,"progress-bar-striped")
    registerRateProgress.classList.add("progress-bar")
    registerRateProgress.classList.add("progress-bar-success")
    registerRateProgress.classList.add("progress-bar-striped")
    registerRateProgress.setAttribute("role", "progressbar")
    registerRateProgress.setAttribute("aria-valuenow", receiverate)
    registerRateProgress.setAttribute("aria-valuemin", 0)
    registerRateProgress.setAttribute("aria-valuemax",100)
    registerRateProgress.style.setProperty("width", receiverate+"%")
    registerRateProgress.innerHTML = "登记率"+receiverate+"%"
    registerRateProgress.addEventListener("mouseover",()=>{registerRateProgress.classList.add("active")})
    registerRateProgress.addEventListener("mouseout",()=>{registerRateProgress.classList.remove("active")})
    //set up style
    style_ele.innerHTML=" .je {\n" +
        "            width: 50px !important;\n" +
        "            height: initial !important;\n" +
        "            border-radius: initial !important;\n" +
        "            margin-right: initial !important;\n" +
        "            border: initial !important;\n" +
        "        }";
    //adding children to components


    successRateProgressParent.appendChild(successRateProgress)
    registerRateProgressParent.appendChild(registerRateProgress)

    col1.appendChild(registerImage)
    col1.appendChild(registerDateText)
    col2.appendChild(sendImage)
    col2.appendChild(sendText)
    col2.appendChild(successRateProgressParent)
    col3.appendChild(receiveImage)
    col3.appendChild(receiveText)
    col3.appendChild(registerRateProgressParent)
    col4.appendChild(exchangeImage)
    col4.appendChild(organizeActivityText)
    col4.appendChild(joinActivityText)
    root_table.appendChild(col1)
    root_table.appendChild(col2)
    root_table.appendChild(col3)
    root_table.appendChild(col4)
    $("head")[0].appendChild(style_ele)
    $(".text-info")[1].innerHTML = "";
    $(".text-info")[1].appendChild(root_table);
    $("#icon-credit").html("部分图标来源<a href=\"https://www.freepik.com\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a>，侵删")
})
