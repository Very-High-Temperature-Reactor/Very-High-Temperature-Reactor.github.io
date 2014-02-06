contents.power_applications = {
  index: 5,
  caption: "Zastosowanie reaktorów chłodzonych helem w energetyce",
  text: '<p id="power_applications">Zaletą generatorów energii zbudowanych na podstawie VHTR jest produkcja ciepła wysokotemperaturowego. Im wyższa temperatura jest wytwarzana, tym większą sprawność ma proces produkcji energii elektrycznej oraz zwiększa się ilość procesów przemysłowych, w których to ciepło może zostać wykorzystane.</p>'+
  '<h1>Energia cieplna</h1>'+
  '<p>VHTR jest rozwinięciem technologii HTGR bazującej na chłodzeniu rdzenia z moderatorem grafitowym, helem. W stosunku do swojego poprzednika, pozwala podnieść temperaturę wylotu gazu chłodzącego do 1000 &deg; C. Produkcja ciepła odbywa się za pomocą cyklu z pośrednim wymiennikiem ciepła (IHX - <i>ang.</i> intermediate heat exchanger). Użycie pośredniego cyklu izoluje fizycznie instalację wykorzystującą ciepło od reaktora, co nie wymusza na niej zachowania standardów bezpieczeństwa jądrowego (zmniejsza jej koszt). To rozwiązanie pozwala także na większe zróżnicowanie warunków termicznych dla każdego z zastosowań ciepła reaktorowego w stosunku do warunków panujących w rdzeniu. Te różnice dotyczą temperatury, ciśnienia, a także częstotliwości zmian ilości dostarczanego ciepła dla poszczególnych procesów przemysłowych.</p>'+
  '<h2>Pierwotny obieg</h2>'+
  '<div class="thumbnail">'+
    '<img src="img/vhtr_primary.png" alt="Obieg pierwotny VHTR" class="img-thumbnail" width="60%"/>'+
    '<div class="caption">Rys. 1. Schemat obiegu pierwotnego reaktora VHTR <a name="b_vhtr_rep"></a>.</div>'+
  '</div>'+
  '<p>Na rys. 1 został przedstawiony układ obiegu pierwotnego chłodzenia reaktora. Chłodny hel wpływa od dołu do rdzenia, przez zewnętrzną powłokę kanału łączącego rdzeń z jednostką konwersji energii (PCU - <i>ang.</i> power conversion unit), która generuje energię elektryczną. Wewnątrz reaktora unosi się on przy ściankach do górnej części, a następnie wpływa do rdzenia, gdzie jest jest ogrzewany. Gorący hel wypływa środkową częścią kanału łączącego do PCU. Po przejściu przez turbinę część helu jest wysyłana do IHX, żeby podgrzać drugi obieg.'+
  '</p>'+
  '<h2>Drugi obieg</h2>'+
  '<p>Drugi obieg (rys. 2) pozwala na transfer ciepła, które można wykorzystać w rozmaitych procesach przemysłowych, z których produkcja wodoru jest pierwszym kandydatem. Za wymiennikiem ciepła znajduje się trzeci obieg wymiany ciepła, który zwiększa stopień izolacji reaktora i chroni przed dalszym przedostawaniem się zanieczyszczeń i niestabilności temperaturowych. '+
  '</p>'+
  '<div class="thumbnail">'+
    '<img src="img/vhtr_secondary.png" alt="Obieg drugi VHTR" class="img-thumbnail" width="70%"/>'+
    '<div class="caption">Rys. 2. Schemat drugiego obiegu reaktora VHTR <a name="b_vhtr_rep"></a>.</div>'+
  '</div>'+
  '<p>Hel, albo inny odpowiedni nośnik ciepła (jak np. ciekła sól) dostaje się do wymiennika ciepła (IHX) w którym jest podgrzewany przez pierwotny obieg chłodzący. Zastosowanie soli NaBR<sub>4</sub>-NaF w wymienniku ciepła, w środkowym obiegu, pozwala na zwiększenie wydajności procesu wymiany energii termicznej o 0,2-0,6% w porównaniu do helu o niskim ciśnieniu. Wymiary IHX oraz wymiennika ciepła do produkcji wodoru są mniejsze odpowiednio o 15% i 35% niż w przypadku stosowania helu. Zmniejszenie rozmiaru jest konsekwencją lepszego transportu ciepła przez sól niż przez hel.</p>'+
  '<h2>Zastosowania energii termicznej</h2>'+
  '<p>Produkcja wodoru jest obszarem, który jest najważniejszym zastosowaniem ciepła z VHTR. Użycie ciepła z reaktora pozwala na produkcję wodoru za pomocą elektrolizy wysokotemperaturowej oraz oddzielania termochemicznego z wody za pomocą <a href="http://en.wikipedia.org/wiki/Sulfur%E2%80%93iodine_cycle">IS</a>. Elektroliza w wysokiej temperaturze bazuje na zasadzie, że energia potrzebna w procesie elektrolizy maleje wraz ze wzrostem temperatury. Termochemiczne oddzielanie wodoru bazuje na serii reakcji zachodzących w wysokiej temperaturze, których rezultatem jest tlen i wodór. Reakcje tego typu wymagają temperatur od 900 &deg;C do 1000 &deg;C. Innym sposobem produkcji wodoru jest <a href="http://pl.wikipedia.org/wiki/Gazyfikacja_w%C4%99gla">gazyfikacja węgla</a> zachodząca w temperaturze 800 - 1800 &deg;C. Ciepło z reaktora może zostać wykorzystane też w innych zastosowaniach takich jak odsalanie wody, ogrzewanie domów, wytapianie żelaza i szkła, synteza mocznika, produkcja cementu i wiele innych (zob. rys. 3).</p>'+
  '<div class="thumbnail">'+
    '<img src="img/heat_appl.png" alt="Obieg drugi VHTR" class="img-thumbnail" width="90%"/>'+
    '<div class="caption">Rys. 3. Wybrane procesy przemysłowe wraz z wymaganymi temperaturami oraz temperatury osiągalne w poszczególnych modelach reaktorów. <a name="b_kallman"></a>.</div>'+
  '</div>'+
  '<h1>Energia elektryczna</h1>'+
  '<p>Do produkcji energii elektrycznej jest wykorzystywany bezpośredni <a href="http://otzs.w.interia.pl/rzeczywisty/rzeczywisty.htm">cykl Braytona</a>. Modeluje on układ generatora składający się z kompresora, elementu grzewczego i turbiny (rys. 1). Gaz po wyjściu z turbiny przechodzi przez <a href="http://pl.wikipedia.org/wiki/Rekuperator">rekuperator</a>, a następnie przez dwa kompresory zanim z powrotem trafi do zbiornika reaktora.</p>',
  bibliography: {
    vhtr_rep: '<a href="http://large.stanford.edu/courses/2013/ph241/kallman1/docs/chapin.pdf"><i>A Very High Temperature Reactor: A Technical Summary</i></a>',
    hydraulic: '<a href="http://www.inl.gov/technicalpublications/Documents/3479829.pdf">C. H. Oh, C. Davis, R. Barner, P. Pickard: <i>Thermal Hydraulic Analysis of HTGR Coupled with Hydrogen Plant</i></a>',
    kallman: '<a href="http://large.stanford.edu/courses/2013/ph241/kallman1/">B. Kallman: <i>The Very High Temperature Reactor</i></a>'
  }
};