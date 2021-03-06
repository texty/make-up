/**
 * Created by yevheniia on 17.03.20.
 */
d3.xml("img/names.svg").then(function(data) {

   d3.select("#interactive2").node().append(data.documentElement);

    const dictionary = [
        { key: "Філлер", value:" засіб, що використовується для збільшення об’єму там, де його недостатньо. Найчастіше – для заповнення зморшок, збільшення об’єму губ тощо. Так називають і засіб, що вводиться ін’єкційно косметологом, і косметику з «ефектом наповнення»" },
        { key: "Гоммаж", value: " відлущувальний косметичний засіб для шкіри (працює як скраб, але містить не механічні крупинки, що відлущують ороговілий шар шкіри, а спеціальні компоненти, які викликають швидке відлущування)" },
        { key: "Ексфоліант (ексфоліатор)", value: "Ексфоліація = пілінг. Фактично ексфоліантом можна назвати як будь який скраб, так і гоммаж чи засіб з кислотою, що відлущує ороговілий шар шкіри" },
        { key: "Гідролат", value: "«квіткова вода». По суті, це дистильована вода з розчиненими у ній рослинними екстрактами. Виглядає як каламутна водичка з вираженим запахом певної рослини. Використовують як тонік, ефірну олію для ванни чи навіть пропонують нею розводити глиняні маски"},
        { key: "Убтан", value: "дуже дрібна суміш трав та глин, яка працює як скраб, проте відлущувальні частки в ньому, на відміну від більшості скрабів, дуже дрібні."},
        { key: "Шиммер", value: " засіб з лінійки декоративної косметики для надання шкірі блиску"},
        { key: "Міст", value: "спрей, що може працювати як закріплювач для макіяжу, освіжити шкіру (як термальна вода), зволожувати (як крем) чи навіть заміняти матуючі серветки чи пудру, прибираючи блиск"},
        { key: "Кумарин", value: "органічна сполука у вигляді безбарвних кристалів із запахом свіжого сіна. Застосовують у парфумерній промисловості. Є в парфумах типу Chanel Les Exclusifs de Chanel 1932 або Prada Luna Rossa Black"},
        { key: "Нерол(Неролі)", value: "органічна сполука, названа від прізвища дружини князя Неролі (Італія). Це безбарвна рідина з приємним запахом троянд. Застосовують у парфумерії. Є в парфумах типу Chanel Les Exclusifs de Chanel 1932"},
        { key: "Бельді", value: "мило для хамаму (турецької бані)"},
        { key: "Пінас", value: "вітрильно-гребне судно невеликої осадки, поширене в XVI-XVIII ст. Використовувалось у мілководних акваторіях для перевезення вантажів, військових операцій, переслідування, патрулювання, супроводження кораблів вищого класу"},
        { key: "Лібурна", value: "староримське легке військове судно без вітрил з двома рядами весел довжиною близько 30 м і водотоннажністю до 80 т"},
        { key: "Редан", value: "1. Уступ на днищі швидкохідного катера, літаючого човна або поплавка гідролітака, що зменшує опір під часу руху по воді. 2. Фортифікаційна споруда, що має форму кутового виступу вперед"},
        { key: "Беффруа", value: "міська башта в багатьох містах Північно-Західної Європи доби Середньовіччя"},
        { key: "Донжон", value: "головна сторожова башта у середньовічному замку, де часто розміщували й житлові приміщення"},
        { key: "Горжа", value: "1. Тильна частина середньовічного укріплення (кріпосної стіни, валу тощо) або звернутий до тилу вихід з укріплення. 2. Вузький прохід між горами"},
        { key: "Редюїт", value: "укріплений пункт всередині фортеці або польового укріплення, який є останнім оплотом гарнізону під час оборони. Споруджувалися в 16 – на початку 20 ст"},
        { key: "Кліпер", value: "американське швидке вантажне вітрильне судно ХІХ ст" }
    ];


    const svg = d3.select("#interactive2 svg");

    d3.selectAll("#interactive2 svg text")
        .on("mouseover touchstart", function(){
            const selectedText = d3.select(this).text();            
            d3.selectAll("#interactive2 svg text").style("font-size","65px");
            d3.selectAll("#interactive2 svg text tspan").style("font-size","65px");
            d3.select(this).style("font-size","80px");
            d3.select(this).selectAll("tspan").style("font-size","80px");

            var result = dictionary.filter(function(element) {
                return element.key == selectedText;
            });
            d3.select("#test-answer").html(result[0].key.replace('(', ' (') + " = " + result[0].value)
        });
});