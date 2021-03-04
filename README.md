# SkillShop App

SkillShop jest aplikacją stworzoną by umożliwić wykwalifikowanym specjalistom oraz ich klientom szybką i pozbawioną pośredników komunikację. Każdy z zalogowanych użytkowników może nieodpładnie dodać nieograniczoną liczbę ogłoszeń lub skontaktować się z firmami oraz indywidualnymi fachowcami z całej Polski.

## 1. Struktura aplikacji

Projekt SkillShop został utworzony przy pomocy biblioteki React (strona front-endowa) oraz platformy Firebase (strona back-endowa). Na aplikację składają się poniższe komponenty:<br/>
<br/>
-> App<br/>
--> Navbar<br/>
--->SearchBar<br/>
---> SignUpUser<br/>
---> SignIn User<br/>
---> AddService<br/>
---> UserPanel<br/>
----> UserService<br/>
-----> ModifyService<br/>
--> Main<br/>
---> LandingPage<br/>
---> ServiceList<br/>
----> Service<br/>
-----> ServiceDetails<br/>
--> Footer<br/>

<ins>1 App</ins> -  Komponent root'owy, stanowiący kontener dla wszystkich pozostałych. Poza tym są w nim zdefiniowane wszystkie stany (patrz pkt 3) oraz odbywa się w nim pobieranie danych - listy usług przechowywanych za pomocą usługi Cloud Firestore (patrz pkt 2).<br/>

<ins>2 Navbar</ins> - Komponent nagłówka. Zawiera logo (stanowiące również odnośnik, który po kliknięciu przenosi użytkownika do strony startowej aplikacji), pasek umożliwiający wyszukiwanie konkretnych usług oraz przyciski, które po naciśnięciu umożliwiają poruszanie się po głębiej zagęszczonych komponentach aplikacji. Przed zalogowaniem się użytkownik widzi przyciski "Rejestracja" oraz "Logowanie". Tak jak ich nazwy wskazują odsyłają one komponentów umożliwających założenie konta lub autentykację osoby korzystających ze SkillShop. Po zalogowaniu się przyciski "Rejestracja" oraz "Logowanie" znikają, a pojawiają się kolejne: "Dodaj usługę", "Panel Użytkownika" oraz "Wyloguj użytkownika". Ich działanie zostanie opisane poniżej.<br/>

<ins>2.1 SearchBar</ins> - Komponent zawiera input oraz przycisk wyszukania. Po naciśnięciu przycisku użytkownik jest odsyłany do komponentu ServiceList, który wyświetla listę usług pobranych z bazy danych ale przefiltrowanych na podstawie wartości wpisanej w input.<br/>
<ins>2.2 AddService</ins> - Komponent zostaje wyrenderowany po naciśnięciu przycisku "Dodaj usługę". Zawiera szereg inputów odpowiadających za poszczególne pola dokumentu kolekcji "Services" w firebasie (patrz pkt 2). Za każdym razem kiedy dany input jest wypełniany równocześnie update'owany jest stan "form" w komponencie. Stan ten odwzorowuje dokument kolekcji services w Cloud Firestore. Z chwilą naciśnięcia przycisku stan "form" jest przekazywany jako argument do metody "add", która dodaje nowy dokument do ww. kolekcji.<br/>
<ins>2.3 UserPanel</ins> - Wyświetla te usługi które zostały dodane przez zalogowanego obecnie użytkownika. Są one filtrowane na podstawie pola "user" w dokumentach kolekcji. <br/>
<ins>2.3.1 UserService</ins> - Komponent umożliwiający modyfikacje lub usunięcie usługi dodanej przez zalogowanego użytkownika. Zawiera dwa przyciski. Po naciśnięciu przycisku "modyfikuj" renderowany jest komponent "ModifyService". Po naciśnięciu przycisku "usuń" wykonywana jest metoda "delete" usuwająca service z kolekcji na Firebase. <br/>
<ins>2.3.1.1 ModifyService</ins> - Komponent w wyglądzie i działaniu podobny do AddService (w istocie wykorzystujący te same klasy CSS). Jedyna znacząca różnica polega na tym, że po naciśnięciu przycisku wykonywnana jest metoda "update" (zamiast "add"), która modyfikuje istniejące pola dokumentu w Firestore. <br/>

<ins>3. Main</ins> - Komponent, w którym wyświetlana jest większość informacji na stronie. Służy w istocie za kontener dla komponentów LandingPage i ServiceList. Zawiera również znacznik Switch, zawierający route'y dla ww. komponentów. <br/>

<ins>3.1 LandingPage</ins> - Stanowi niejako "stronę startową". Składają się na niego "kafelki", umożliwające po naciśnięciu przeniesienie do komponentu ServiceList z listą usług wyfiltrowaną na podstawie odpowiedniej kategorii. <br/>

<ins>3.2 ServiceList</ins> - Podobnie jak "UserPanel" wyświetla listę usług na podstawie kolekcji Services. Jest widoczny również dla niezalogowanych użytkowników. Usługi mogą zostać wyświetlone wszysktie (bez żadnych filtrów), wyfiltrowane na podstawie kategorii lub na podstawie wartości wpisanej w input komponentu SearchBar.
<ins>3.2.1 Service</ins> - Komponent zawierający podstawowe informacje dot. danej usługi. Zawiera button "Szczegóły" odsyłający do komponentu ServiceDetails.
<ins>3.2.1.1 ServiceDetails</ins> Komponent zawierający szczegółowe informacje dot. danej usługi. Zalogowanym użytkownikom umożliwia wyświetlenie danych kontaktowych do osoby, która umieściła ofertę w aplikacji. Niezalogowanych odsyła do okien rejestracji lub logowania.
<ins>4 Footer</ins> Stopka strony aplikacji.
 
K
k
g



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
