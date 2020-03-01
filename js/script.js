var langs = {
    "한국어": "ko",
    "English": "en"
}

var currentLang = "한국어";

// 언어 선택 메뉴의 li 태그를 생성한다
function getLangElementsHTML() {
    var ret = "";

    for(var lang in langs){
        if(lang != currentLang){
            ret += "<li class=\"lang\" onclick=\"changeLang('" + lang + "')\">" + lang + "</li>"
        }
    }

    return ret;
}

// 언어 선택 메뉴의 html을 갱신한다
function updateLangElements(){
    var langs = document.getElementById("langs");
    langs.innerHTML = getLangElementsHTML();
}

// 해당 언어로 설정된 태그를 모두 찾아 반환한다
function getElementsByLang(lang) {
    return document.querySelectorAll(".lang-" + lang);
}

// 모든 요소에 css를 적용한다
function css(elements, object) {
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];

        for(var key in object) {
            element.style[key] = object[key];
        }
    }
}

// 언어를 변경한다
function changeLang(lang) {
    var elements = getElementsByLang(langs[currentLang]);
    css(elements, { display: 'none' })

    elements = getElementsByLang(langs[lang]);
    css(elements, { display: 'block' })

    currentLang = lang;

    updateLangElements();

}

// 초기화
updateLangElements();
