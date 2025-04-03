// questions.js
const questions = {
    '1': [
    { 
        question: "Чему равно максимальное значение корреляционной функции стационарного случайного процесса с ограниченной средней мощностью?", 
        options: ["Математическому ожиданию", "Энергии", "Коэффициенту эксцесса", "Дисперсии"], 
        correct: 3 
    },
     { 
        question: "В соответствии с каким критерием производится синтез согласованных фильтров?", 
        options: ["Минимум среднеквадратической ошибки воспроизведения формы сигнала на выходе фильтра", "Максимум отношения сигнал/шум на выходе фильтра", "Максимум корреляции входного и выходного сигнала", "Минимум дисперсии выходного шума"], 
        correct: 1 
    },
     { 
        question: "Что собой представляет обозначение z-1 для дискретного сигнала?", 
        options: ["Не имеет особого смысла кроме единичной отрицательной степени", "Задержка на интервал дискретизации", "Смещение отсчета влево", "Значение отсчета, обратное относительно исходного"], 
        correct: 1 
    },
     { 
        question: "Какой параметр колебательного контура полностью определяет длительность переходного процесса в нем?", 
        options: ["Добротность при произвольной резонансной частоте", "Половина полосы пропускания", "Резонансная частота", "Емкость контура"], 
        correct: 1 
    },
     { 
        question: "Какая особенность появляется в спектре аналогового сигнала с ограниченной энергией после его дискретизации?", 
        options: ["Дискретность по оси частот", "Смещение по частоте на частоту дискретизации", "Периодичность с периодом, равным частоте дискретизации", "Спектр не изменяется"], 
        correct: 2 
    },
     { 
        question: "В каких случаях плотность вероятности не меняет вида при линейных преобразованиях случайных сигналов?", 
        options: ["Входной процесс - нормальный", "Полоса процесса на входе меньше полосы цепи", "Полоса процесса и цепи одинаковы", "Всегда изменяется"], 
        correct: 0 
    },
    { 
        question: "При каких условиях обеспечивается нормализация случайного сигнала в линейной цепи?", 
        options: ["Полоса процесса на входе меньше полосы цепи", "Полоса входного случайного процесса много больше полосы цепи", "Полоса процесса и цепи одинаковы", "Плотность вероятности процесса не изменяется"], 
        correct: 1 
    },
     { 
        question: "В каких цепях выполняется принцип суперпозиции?", 
        options: ["В нелинейных инерционных цепях", "В параметрических цепях", "В нелинейных безынерционных цепях", "В линейных цепях"], 
        correct: 3 
    },
     { 
        question: "Что такое дисперсия случайного процесса?", 
        options: ["Первый абсолютный центральный момент", "Второй начальный момент", "Третий начальный момент", "Второй центральный момент"], 
        correct: 3 
    },
     { 
        question: "Как по спектральной плотности мощности G(f) определить дисперсию?", 
        options: ["Максимальное значение G(f)", "Значение G(f) при w = 0", "Площадь, ограниченная G(f)", "Максимальное значение G(f), деленное на полосу"], 
        correct: 2 
    },
     { 
        question: "Как изменяется скорость случайного процесса при увеличении интервала корреляции?", 
        options: ["Уменьшается", "Увеличивается", "Зависит от величины дисперсии", "Не изменяется"], 
        correct: 0 
    },
     { 
        question: "Напряжение на выходе транзисторного мультивибратора:", 
        options: ["прямоугольные импульсы", "синусоидальное напряжение", "треугольные импульсы", "выпрямленное напряжение", "постоянное напряжение"], 
        correct: 0 
    },
     { 
        question: "В МОП-транзисторе с индуцированным каналом ток стока при нулевом напряжении затвора", 
        options: ["отрицательный", "положительный", "равен 0", "убывает"], 
        correct: 2 
    },
     { 
        question: "Что подается на узел синхронизации осциллографа при «Внутренней» синхронизации?", 
        options: ["Исследуемое колебание с выхода предварительного усилителя канала Y", "Колебание от встроенного калибратора осциллографа", "Второе (не исследуемое) колебание, подаваемое на осциллограф одновременно с исследуемым колебанием", "Переменное напряжение 220 В 50 Гц от встроенного в осциллограф блока питания"], 
        correct: 0 
    },
     { 
        question: "Что подается на узел синхронизации осциллографа при «Внешней» синхронизации?", 
        options: ["Исследуемое колебание с выхода предварительного усилителя канала Y", "Колебание от встроенного калибратора осциллографа", "Второе (не исследуемое) колебание, подаваемое на осциллограф одновременно с исследуемым колебанием", "Переменное напряжение 220 В 50 Гц от встроенного в осциллограф блока питания"], 
        correct: 2 
    },
     { 
        question: "Генератор гармонических колебаний предназначен для получения", 
        options: ["последовательности прямоугольных импульсов", "синусоидальных колебаний", "колебаний сложной формы", "случайных процессов"], 
        correct: 1 
    },
     { 
        question: "Длительностью паузы импульсного сигнала называется", 
        options: ["интервал времени от конца импульса до начала следующего импульса", "интервал времени от начала импульса до конца этого импульса", "интервал времени от начала импульса до начала следующего импульса", "интервал времени от конца импульса до конца следующего импульса"], 
        correct: 0 
    },
     { 
        question: "Длительностью импульса называется", 
        options: ["интервал времени от начала одного импульса до начала следующего импульса", "интервал времени от начала импульса до конца этого импульса", "интервал времени, в течение которого напряжение нарастает до максимального значения", "интервал времени от конца одного импульса до конца следующего импульса"], 
        correct: 1 
    },
     { 
        question: "Для преобразования малых электрических сигналов в электрические сигналы большей величины и такой же формы используются:", 
        options: ["усилители", "делители частоты", "детекторы", "генераторы"], 
        correct: 0 
    },
     { 
        question: "Для чего скручивают провода витой пары", 
        options: ["чтобы компактнее разместить их в защитной оболочке", "для уменьшения помех от внешних источников", "для четкого разделения каждой пары проводов", "для лучшей изоляции проводников"], 
        correct: 1 
    },
     { 
        question: "Зависимость коэффициента усиления усилителя от частоты входного напряжения при неизменной амплитуде входного напряжения называется:", 
        options: ["полосой пропускания", "амплитудной характеристикой", "входной характеристикой", "частотной характеристикой"], 
        correct: 2 
    },
    { 
        question: "Колебательный контур состоит из:", 
        options: ["источника тока и катушки индуктивности", "конденсатора и резистора", "катушки индуктивности и конденсатора", "резистора и катушки индуктивности"], 
        correct: 2 
    },
     { 
        question: "Какой параметр периодического напряжения можно измерить с помощью электронно-лучевого осциллографа?", 
        options: ["Размах", "Средневыпрямленное значение", "Среднеквадратическое отклонение", "Действующее значение"], 
        correct: 0 
    },
     { 
        question: "Что такое МАС-адрес?", 
        options: ["адрес, выбираемый пользователем при входе в сеть", "адрес, выбираемый пользователем при установке оборудования", "адрес, назначаемый динамически при входе в сеть", "адрес, назначаемый производителем оборудования и являющийся уникальным"], 
        correct: 3 
    },
     { 
        question: "Одноранговые сети - это...", 
        options: ["сети с одним выделенным сервером", "сети, разделенные на подсети", "сети, где все компьютеры равноправны", "сети с несколькими серверами"], 
        correct: 2 
    },
     
        // Добавьте больше вопросов для теста 1
    ],
    '2': [
        { 
        question: "Основная задача, решаемая протоколом IP", 
        options: ["маршрутизация", "добавление заголовка", "анализ правильности доставки пакета", "анализ правильности отправки пакета"], 
        correct: 0 
    },
     { 
        question: "Относительная погрешность измерения - это...", 
        options: ["отношение абсолютной погрешности к действительному значению измеряемой величины", "отношение абсолютной погрешности к установленному пределу измерений", "разность между результатом измерения и действительным значением измеряемой величины", "разность между результатом измерения и установленным пределом измерений"], 
        correct: 0 
    },
     { 
        question: "При усилении электрических сигналов усилителем...", 
        options: ["должна изменяться частота усиливаемого сигнала", "не должна изменяться амплитуда усиливаемых сигналов", "не должна изменяться форма усиливаемых сигналов", "не должна изменяться мощность усиливаемых сигналов"], 
        correct: 2 
    },
    { 
        question: "Какой элемент реализует операцию логического умножения?", 
        options: ["Логический элемент \"Стрелка Пирса\"", "Логический элемент ИЛИ", "Логический элемент НЕ", "Логический элемент И"], 
        correct: 3 
    },
     { 
        question: "Сетевой кабель, обеспечивающий наибольшую скорость передачи данных", 
        options: ["витая пара", "опто-волокно", "коаксиальный кабель", "телефонная линия"], 
        correct: 1 
    },
     { 
        question: "Случайную составляющую погрешности измерения можно уменьшить путём:", 
        options: ["Перехода от абсолютной формы выражения погрешности к относительной форме", "Увеличения установленного предела измерения", "Увеличения доверительной вероятности", "Проведения многократных измерений и усреднения их результатов"], 
        correct: 3 
    },
     { 
        question: "Триггером называется устройство, обладающее двумя состояниями устойчивого равновесия и способное скачком переходить из одного состояния в другое в следующем случае:", 
        options: ["при воздействии внешнего управляющего сигнала", "после истечения определенного временного интервала", "при механическом воздействии", "при наличии заложенной в триггер программы"], 
        correct: 0 
    },
     { 
        question: "Что называют спектром периодического сигнала?", 
        options: ["совокупность амплитуд и начальных фаз гармоник периодического сигнала", "сумма гармоник периодического сигнала", "основная частота периодического сигнала", "размах периодического сигнала"], 
        correct: 0 
    },
     { 
        question: "Что называют параллельной передачей данных?", 
        options: ["данные передаются последовательно пакетами", "данные передаются поочередно бит за битом", "данные передаются одновременно по нескольким проводам", "данные передаются в различные моменты времени по одному проводу"], 
        correct: 2 
    },
     { 
        question: "Электронное устройство, которое осуществляет формирование переменного напряжения при воздействии постоянного напряжения:", 
        options: ["электрический фильтр", "генератор электрических колебаний", "усилитель постоянного тока", "выпрямитель переменного тока"], 
        correct: 1 
    },
     { 
        question: "Идеализированный элемент, необратимо преобразующий электрическую энергию в другие виды энергии:", 
        options: ["емкость", "индуктивность", "сопротивление", "источник тока"], 
        correct: 2 
    },
     { 
        question: "Единица измерения проводимости", 
        options: ["Ампер", "Вольт", "Ом", "Сименс"], 
        correct: 3 
    },
     { 
        question: "Идеализированный элемент, АЧХ комплексного входного сопротивления которого имеет постоянное значение при любой частоте:", 
        options: ["сопротивление", "емкость", "индуктивность", "совершенный трансформатор"], 
        correct: 0 
    },
     { 
        question: "Идеализированный элемент, АЧХ комплексного входного сопротивления которого возрастает по линейному закону при увеличении частоты:", 
        options: ["сопротивление", "емкость", "индуктивность", "проводимость"], 
        correct: 2 
    },
     { 
        question: "Как изменится резонансная частота последовательного колебательного контура при увеличении емкости в 4 раза?", 
        options: ["не изменится", "увеличится в 2 раза", "увеличится в 4 раза", "уменьшится в 2 раза"], 
        correct: 3 
    },
     { 
        question: "Как изменится резонансная частота последовательного колебательного контура при увеличении индуктивности в 4 раза?", 
        options: ["не изменится", "увеличится в 2 раза", "увеличится в 4 раза", "уменьшится в 2 раза"], 
        correct: 3 
    },
   { 
        question: "Что такое DNS?", 
        options: ["удаленный файл-сервер", "сервер доменных имен", "мощный поисковый сервер", "сервер динамической настройки узла"], 
        correct: 1 
    },
     { 
        question: "Как изменится полоса пропускания последовательного контура при увеличении сопротивления потерь в 4 раза?", 
        options: ["не изменится", "уменьшится в 2 раза", "увеличится в 4 раза", "уменьшится в 4 раза"], 
        correct: 2 
    },
     { 
        question: "Как изменится полоса пропускания последовательного контура при увеличении индуктивности в 4 раза?", 
        options: ["не изменится", "уменьшится в 2 раза", "увеличится в 4 раза", "уменьшится в 4 раза"], 
        correct: 3 
    },
     { 
        question: "Как изменится полоса пропускания последовательного контура при увеличении емкости в 4 раза?", 
        options: ["не изменится", "уменьшится в 2 раза", "увеличится в 4 раза", "уменьшится в 4 раза"], 
        correct: 0 
    },
     { 
        question: "Для чего нужна синхронизация в осциллографах при исследовании периодических процессов?", 
        options: ["Для обеспечения устойчивого изображения на экране", "Для получения правильного размера изображения по вертикали", "Для получения правильного размера изображения по горизонтали", "Для получения правильного размера изображения части процесса по вертикали"], 
        correct: 0 
    },
     { 
        question: "Величина, обратная периоду гармонического колебания", 
        options: ["начальная фаза", "амплитуда", "полная фаза", "частота"], 
        correct: 3 
    },
    { 
        question: "Идеализированный элемент, запасающий энергию электрического поля", 
        options: ["емкость", "индуктивность", "сопротивление", "источник тока"], 
        correct: 0
		 },
	{ 
        question: "Идеализированный элемент, запасающий энергию магнитного поля", 
        options: ["емкость", "индуктивность", "сопротивление", "источник тока"],
        correct: 1 
    },
	{ 
        question: "Источником электрической энергии называется …", 
        options: ["элемент, запасающий энергию электрического поля", "элемент, преобразующий различные виды энергии в электрическую энергию", "элемент, преобразующий электрическую энергию в другие виды энергии", "элемент, запасающий энергию магнитного поля"], 
        correct: 1 
    },
	{ 
        question: "Единица измерения угловой частоты гармонического колебания", 
        options: ["Гц", "В", "рад/с", "с"], 
        correct: 2 
    }
        // Добавьте больше вопросов для теста 2
    ],
	'3': [
    // Вопросы по электронике и электротехнике
    {
        question: "Полупроводниковый диод имеет структуру",
        options: ["p-n", "n-p-n", "p-n-p", "p-n-p-n", "n-p-n-p"],
        correct: 0
    },
    {
        question: "Чему равен размах периодического напряжения, показанного на рисунке?",
        options: ["2 В", "12 В", "10 В", "6 В"],
        image: "images/voltage_graph.jpg",
        correct: 2
    },
    {
        question: "На сколько квантов разбивается диапазон преобразуемого АЦП напряжения, если разрядность выходных кодов АЦП равна 8?",
        options: ["64", "256", "1024", "4096"],
        correct: 1
    },
    {
        question: "На сколько квантов разбивается диапазон преобразуемого АЦП напряжения, если разрядность выходных кодов АЦП равна 12?",
        options: ["64", "256", "1024", "4096"],
        correct: 3
    },
    {
        question: "Какой фильтр имеет амплитудно-частотную характеристику, приведенную на рисунке?",
        options: ["Фильтр нижних частот", "Фильтр верхних частот", "Полосовой фильтр", "Режекторный фильтр"],
        image: "images/filter_response1.jpg",
        correct: 2
    },
    {
        question: "Какой фильтр имеет амплитудно-частотную характеристику, приведенную на рисунке?",
        options: ["Фильтр нижних частот", "Фильтр верхних частот", "Полосовой фильтр", "Режекторный фильтр"],
        image: "images/filter_response2.jpg",
        correct: 3
    },
	{
        question: "Какое преобразование выражает следующая формула?",
        options: [
            "Прямое дискретное преобразование Фурье",
            "Обратное дискретное преобразование Фурье",
            "Прямое дискретное преобразование Гильберта",
            "Обратное дискретное преобразование Гильберта"
        ],
        image: "images/formula2.jpg",
        correct: 1
    },
    {
        question: "Чему равно среднеквадратическое (действующее) значение гармонического колебания амплитудой 10 В?",
        options: ["5 В", "6,37 В", "7,07 В", "10 В"],
        correct: 2
    },
    {
        question: "Чему равен период модуляции амплитудно-модулированного колебания, если его график на экране осциллографа имеет вид (коэффициент развертки осциллографа Кр = 2 мкс/дел)?",
        options: ["10 мкс", "6 мкс", "20 мкс", "50 мкс"],
        image: "images/oscillogram.jpg",
        correct: 0
    },
    {
        question: "Известен результат измерения напряжения: 10 В, погрешность 2 %. Что можно сказать о истинном значении измеренного напряжения?",
        options: [
            "Равно 10,2 В",
            "Находится в пределах от 9,9 В до 10,1 В",
            "Находится в пределах от 9,8 В до 10,2 В",
            "Равно 9,8 В"
        ],
        correct: 2
    },
    {
        question: "Значение f2 на графике определяет для усилителя:",
        options: [
            "верхнюю граничную частоту нелинейных искажений",
            "нижнюю граничную частоту нелинейных искажений",
            "нижнюю граничную частоту полосы пропускания",
            "верхнюю граничную частоту полосы пропускания"
        ],
        image: "images/amplifier_response.jpg",
        correct: 3
    },
    {
        question: "Диапазон от f1 до f2 на графике определяет...",
        options: [
            "верхнюю граничную частоту нелинейных искажений усилителя",
            "нижнюю граничную частоту нелинейных искажений усилителя",
            "полосу задерживания усилителя",
            "полосу пропускания усилителя"
        ],
        image: "images/frequency_range.jpg",
        correct: 3
    },
    {
        question: "Значение f1 на графике определяет для усилителя:",
        options: [
            "верхнюю граничную частоту нелинейных искажений",
            "нижнюю граничную частоту нелинейных искажений",
            "нижнюю граничную частоту полосы пропускания",
            "верхнюю граничную частоту полосы пропускания"
        ],
        image: "images/amplifier_response2.jpg",
        correct: 2
    },
    {
        question: "На рисунке приведена схема включения транзистора с общим(ей)...",
        options: ["стоком", "базой", "коллектором", "эмиттером"],
        image: "images/transistor_circuit1.jpg",
        correct: 3
    },
    {
        question: "На рисунке приведена схема включения транзистора с общим(ей)...",
        options: ["стоком", "базой", "коллектором", "эмиттером"],
        image: "images/transistor_circuit2.jpg",
        correct:1
    },
    {
        question: "Однополупериодной схеме выпрямления соответствует временная диаграмма выходного напряжения:",
        options: ["Диаграмма 1", "Диаграмма 2", "Диаграмма 3", "Диаграмма 4"],
        // image: "images/rectifier_diagrams.png",
		tables: [ // Массив таблиц истинности (изображений)
        "images/rectifier_diagram1.jpg",
        "images/rectifier_diagram2.jpg",
        "images/rectifier_diagram3.jpg",
        "images/rectifier_diagram4.jpg"
    ],
        correct: 0
    },
    {
        question: "Приведены временные диаграммы напряжения на входе (а) и выходе устройства (б). Данное устройство – ...",
       
		options: [
            "двухполупериодный выпрямитель",
            "сглаживающий фильтр",
            "трехфазный выпрямитель",
            "стабилизатор напряжения"
        ],
        image: "images/voltage_diagrams.jpg",
        correct: 0
    },
    {
        question: "Схеме включения транзистора с общей базой соответствует рисунок:",
        options: ["Рисунок 1", "Рисунок 2", "Рисунок 3", "Рисунок 4"],
		tables: [ // Массив таблиц истинности (изображений)
        "images/transistor_configs1.jpg",
        "images/transistor_configs2.jpg",
        "images/transistor_configs.jpg",
        "images/transistor_configs3.jpg"
    ],
        
        correct: 2
    },
    {
        question: "Схеме включения транзистора с общим коллектором соответствует рисунок:",
        options: ["Рисунок 1", "Рисунок 2", "Рисунок 3", "Рисунок 4"],
     tables: [ // Массив таблиц истинности (изображений)
        "images/transistor_configs1.jpg",
        "images/transistor_configs2.jpg",
        "images/transistor_configs.jpg",
        "images/transistor_configs3.jpg"
    ],
        correct: 1
    },
    {
        question: "Выражение для закона Джоуля-Ленца имеет вид",
        options: ["Формула 1", "Формула 2", "Формула 3", "Формула 4"],
		tables: [ // Массив таблиц истинности (изображений)
        "images/joule_law1.jpg",
        "images/joule_law2.jpg",
        "images/joule_law3.jpg",
        "images/joule_law4.jpg"
    ],
        correct: 3
    },
    {
        question: "Выражение для закона электромагнитной индукции имеет вид",
        options: ["Формула 1", "Формула 2", "Формула 3", "Формула 4"],
		tables: [ // Массив таблиц истинности (изображений)
        "images/faraday_law1.jpg",
        "images/faraday_law2.jpg",
        "images/faraday_law3.jpg",
        "images/faraday_law4.jpg"
    ],
       
        correct: 0
    },
    {
        question: "Энергия, запасаемая индуктивностью, имеет вид",
        options: ["Формула 1", "Формула 2", "Формула 3", "Формула 4"],
		tables: [ // Массив таблиц истинности (изображений)
        "images/inductor_energy1.jpg",
        "images/inductor_energy1.jpg",
        "images/inductor_energy1.jpg",
        "images/inductor_energy1.jpg"
    ],
        correct: 2
    },
    {
        question: "Выражение, записанное по первому закону Кирхгофа для узла (1) заданной цепи имеет вид",
        options: [
            "– i1 – i2 – i3 = 0",
            "– i1 – i2 + i3 = 0",
            "– i1 + i2 + i3 = 0",
            "i1 + i2 + i3 = 0"
        ],
        image: "images/kirchhoff_circuit.png",
        correct: 2
    },
    {
        question: "Выражение, записанное по второму закону Кирхгофа для контура 1 заданной цепи, имеет вид",
        options: [
            "– uR1 – uR2 = e",
            "– uR1 + uR2 = e",
            "uR1 + uR2 = e",
            "uR1 + uR2 = – e"
        ],
        image: "images/kirchhoff_loop1.png",
        correct: 2
    },
    {
        question: "Выражение, записанное по второму закону Кирхгофа для контура 2 заданной цепи, имеет вид",
        options: [
            "– uR2 – uR3 = e",
            "– uR2 + uR3 = 0",
            "uR2 + uR3 = 0",
            "uR2 – uR3 = – e"
        ],
        image: "images/kirchhoff_loop2.png",
        correct: 1
    },
    {
        question: "Эквивалентное сопротивление трех последовательно соединенных резисторов R1 = 3 кОм, R2 = 2 кОм и R3 = 1 кОм равно...",
        options: ["0,5 кОм", "1 кОм", "3 кОм", "6 кОм"],
        correct: 3
    },
    {
        question: "Эквивалентное сопротивление двух параллельно соединенных резисторов R1 = 4 кОм и R2 = 4 кОм равно...",
        options: ["2 кОм", "4 кОм", "6 кОм", "8 кОм"],
        correct: 0
    },
	{
        question: "Комплексная проводимость емкостного элемента имеет вид (j – мнимая единица)",
        options: ["jωC", "– jωC", "– 1/jωC", "1/jωC"],
        correct: 0
    }
],
    '4': [
         {
        question: "Амплитуда гармонического напряжения равна 1 В, тогда его действующее значение...",
        options: ["1 В", "1,41 В", "0,707 В", "0,637 В"],
        correct: 2
    },
    {
        question: "Гармоническое напряжение описывается выражением u = cos(2π1000t) В, тогда период колебаний напряжения равен...",
        options: ["0,5 мс", "1 мс", "2 мс", "4 мс"],
        correct: 1
    },
    {
        question: "Комплексное сопротивление индуктивного элемента имеет вид (j – мнимая единица):",
        options: ["jωL", "– jωL", "– 1/jωL", "1/jωL"],
        correct: 0
    },
    {
        question: "Комплексная проводимость индуктивного элемента имеет вид (j – мнимая единица):",
        options: ["jωL", "– jωL", "– 1/jωL", "1/jωL"],
        correct: 3
    },
    {
        question: "Выражение для активной мощности цепи можно представить в виде (U и I – действующие значения напряжения и тока, φ – разность фаз между напряжением и током):",
        options: ["U I", "U I cosφ", "U/I", "U I sinφ"],
        correct: 1
    },
    {
        question: "Выражение для реактивной мощности цепи можно представить в виде (U и I – действующие значения напряжения и тока, φ – разность фаз между напряжением и током)",
        options: ["U I", "U I cosφ", "U/I", "U I sinφ"],
        correct: 3
    },
    {
        question: "Резонансная частота ω0 последовательного колебательного контура c параметрами элементов L = 1 мГн, С = 1 нФ равна...",
        options: ["103 рад/с", "104 рад/с", "105 рад/с", "106 рад/с"],
        correct: 3
    },
    {
        question: "Длительность импульса напряжения, изображённого на графике равна...",
        options: ["40 мкс", "20 мкс", "30 мкс", "10 мкс"],
        image: "images/pulse_width.jpg",
        correct: 3
    },
    {
        question: "Комплексное сопротивление емкостного элемента имеет вид (j – мнимая единица)",
        options: ["jωC", "– jωC", "– 1/jωC", "1/jωC"],
        correct: 3
    },
   {
        question: "На рисунке изображено условное обозначение элемента, выполняющего логическую операцию:",
        options: ["сложения (ИЛИ)", "умножения (И)", "инверсии (НЕ)", "стрелка Пирса (ИЛИ-НЕ)"],
        image: "images/logic_gate1.jpg",
        correct: 0
    },
    {
        question: "На рисунке изображено условное обозначение элемента, выполняющего логическую операцию:",
        options: ["умножения (И)", "сложения (ИЛИ)", "инверсии (НЕ)", "стрелка Пирса (ИЛИ-НЕ)"],
        image: "images/logic_gate2.jpg",
        correct: 2
    },
    {
        question: "На рисунке изображено условное обозначение элемента, выполняющего логическую операцию:",
        options: ["функция Шеффера (И-НЕ)", "сложения (ИЛИ)", "инверсии (НЕ)", "умножения (И)"],
        image: "images/logic_gate3.jpg",
        correct: 0
    },
    {
        question: "Из какого количества байт состоит IP-адрес?",
        options: ["1", "2", "3", "4"],
        correct: 3
    },
    {
        question: "Импульсное напряжение, изображённое на графике, имеет период:",
        options: ["10 мкс", "20 мкс", "40 мкс", "60 мкс"],
        image: "images/pulse_graph1.jpg",
        correct: 1
    },
    {
        question: "Импульсное напряжение, изображённое на графике, имеет длительность паузы:",
        options: ["40 мкс", "20 мкс", "60 мкс", "10 мкс"],
        image: "images/pulse_graph2.jpg",
        correct: 3
    },
    {
        question: "Какая из таблиц истинности соответствует логическому элементу «И»?",
        options: ["Таблица 1", "Таблица 2", "Таблица 3", "Таблица 4"],
        image: "images/truth_tables.jpg",
		tables: [ // Массив таблиц истинности (изображений)
        "images/truth_tables1.jpg",
        "images/truth_tables2.jpg",
        "images/truth_tables3.jpg",
        "images/truth_tables4.jpg"
    ],
        correct: 0
    },
    {
        question: "Какая из таблиц истинности соответствует логическому элементу «И-НЕ»?",
        options: ["Таблица 1", "Таблица 2", "Таблица 3", "Таблица 4"],
        image: "images/truth_tables12.jpg",
		tables: [ // Массив таблиц истинности (изображений)
        "images/truth_tables1.jpg",
        "images/truth_tables2.jpg",
        "images/truth_tables3.jpg",
        "images/truth_tables4.jpg"
    ],
        correct: 3
    },
    {
        question: "Какая из таблиц истинности соответствует логическому элементу «ИЛИ-НЕ»?",
        options: ["Таблица 1", "Таблица 2", "Таблица 3", "Таблица 4"],
        image: "images/truth_tables13.jpg",
		tables: [ // Массив таблиц истинности (изображений)
        "images/truth_tables1.jpg",
        "images/truth_tables2.jpg",
        "images/truth_tables3.jpg",
        "images/truth_tables4.jpg"
    ],
        correct: 2
    },
     {
        question: "Какой фильтр имеет амплитудно-частотную характеристику, приведенную на рисунке?",
        options: ["Фильтр нижних частот", "Фильтр верхних частот", "Полосовой фильтр", "Режекторный фильтр"],
        image: "images/filter_response3.jpg",
        correct: 1
    },
    {
        question: "Какой фильтр имеет амплитудно-частотную характеристику, приведенную на рисунке?",
        options: ["Фильтр нижних частот", "Фильтр верхних частот", "Полосовой фильтр", "Режекторный фильтр"],
        image: "images/filter_response4.jpg",
        correct: 0
    },
    {
        question: "Какое преобразование выражает следующая формула?",
        options: [
            "Прямое дискретное преобразование Фурье",
            "Обратное дискретное преобразование Фурье",
            "Прямое дискретное преобразование Гильберта",
            "Обратное дискретное преобразование Гильберта"
        ],
        image: "images/formula1.jpg",
        correct: 0
    },
    
    ],
    '5': [
        // Вопросы для уровня C1
        {
        "question": "Запишите десятичное число 22 в двоичной системе счисления",
        "options": ["10110", "10011", "11010", "10101"],
        "correct": 0
    },
    {
        "question": "Чему равна амплитуда гармонического колебания [В], если его график на экране осциллографа имеет вид (цена деления осциллографа по вертикали - 1 В/дел)?",
        "options": ["1 В", "2 В", "3 В", "4 В"],
		image: "images/ampl.jpg",
        "correct": 2
    },
    {
        "question": "Три последовательно соединенных резистора с сопротивлениями R1 = 1 Ом, R2 = 2 Ом и R3 = 16,5 Ом подключены к источнику энергии с ЭДС e = 60 В и внутренним сопротивлением Ri = 0,5 Ом. Определите ток в данной цепи [А]",
        "options": ["2 А", "3 А", "4 А", "5 А"],
        "correct": 1
    },
    {
        "question": "Периодическая последовательность импульсов имеет период T = 2 мс. Какая частота (Гц) у первой гармоники спектра этого колебания?",
        "options": ["250 Гц", "500 Гц", "750 Гц", "1000 Гц"],
        "correct": 1
    },
    {
        "question": "По заданной внешней характеристике реального источника энергии определить внутреннее сопротивление этого источника [Ом]",
        "options": ["5 Ом", "10 Ом", "15 Ом", "20 Ом"],
		image: "images/energy.jpg",
        "correct": 1
    },
    {
        "question": "Определите добротность последовательного колебательного контура c параметрами элементов L = 1 мГн, С = 1 нФ, R = 50 Ом",
        "options": ["10", "20", "30", "40"],
        "correct": 1
    },
    {
        "question": "Определите напряжение U [В] между зажимами заданной цепи, если R1 = 20 Ом, R2 = 5 Ом, I = 2 А",
        "options": ["6 В", "8 В", "10 В", "12 В"],
		image: "images/energy1.jpg",
        "correct": 1
    },
    {
        "question": "Определить эквивалентную емкость заданной цепи [мкФ], если C1 = 10 мкФ, C2 = C3 = 5 мкФ",
        "options": ["5 мкФ", "10 мкФ", "15 мкФ", "20 мкФ"],
		image: "images/energy2.jpg",
        "correct": 0
    },
    {
        "question": "Определить частоту [Гц] изображенного на рисунке гармонического тока",
        "options": ["250 Гц", "500 Гц", "750 Гц", "1000 Гц"],
		image: "images/energy3.jpg",
        "correct": 1
    },
    {
        "question": "К источнику питания, ЭДС которого E = 10 В, подключена нагрузка. Определите внутреннее сопротивление источника Ri [Ом], если сопротивление нагрузки R = 18 Ом, а напряжение на нагрузке UR = 9 В.",
        "options": ["1 Ом", "2 Ом", "3 Ом", "4 Ом"],
		image: "images/energy4.png",
        "correct": 1
    }

    ],
    '6': [
        // Вопросы для уровня C2
      {
    question: "Какая из таблиц истинности соответствует логическому элементу на схеме?",
    image: "images/logic_gate_scheme.png", // Изображение схемы
    options: ["Таблица 1", "Таблица 2", "Таблица 3", "Таблица 4"],
    tables: [ // Массив таблиц истинности (изображений)
        "images/filter_response1.jpg",
        "images/filter_response1.jpg",
        "images/filter_response1.jpg",
        "images/filter_response1.jpg"
    ],
    correct: 1 // Индекс правильной таблицы
},
        {
            question: "What would you have done if you ___ the answer?",
            options: ["know", "knew", "have known", "had known"],
            correct: 3
        },
        {
            question: "There’s no point in ___ to convince him.",
            options: ["trying", "try", "to try", "tries"],
            correct: 0
        },
        {
            question: "Hardly had she left the house ___ it started to rain.",
            options: ["when", "than", "then", "and"],
            correct: 0
        },
        {
            question: "Were I to have known, I ___ told you.",
            options: ["will have", "would have", "would", "will"],
            correct: 1
        },
        {
            question: "He did it regardless ___ the consequences.",
            options: ["of", "with", "to", "at"],
            correct: 0
        },
        {
            question: "It looks as if they ___ the match.",
            options: ["are win", "have win", "will win", "were winning"],
            correct: 3
        },
        {
            question: "He went to the party ___ minded to have a good time.",
            options: ["open", "with opening", "openly", "open-minded"],
            correct: 3
        },
        {
            question: "Not until she had finished her homework ___ watch TV.",
            options: ["she could", "she could have", "could she", "could she have"],
            correct: 2
        },
        {
            question: "He has been working ___ for over a year now.",
            options: ["intermittent", "intermittently", "intermittentness", "intermitting"],
            correct: 1
        }
    ]
    // Добавьте вопросы для других тестов
};