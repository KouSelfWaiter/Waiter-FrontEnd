import Home from "./HomePage/HomePage";
import Error from "./ErrorPage/ErrorPage";
import MealDetails from "./MealDetailsPage/MealDetailsPage";
import Category from "./CategoryPage/CategoryPage"
//Bu kod, farklı sayfaların bileşenlerine erişim sağlamak için yol belirtilen dört ayrı modülü içe aktarıyor. Örnek Home bileşeni, ../pages/HomePage/HomePage yoluyla içe aktarılır ve ana sayfa için bir bileşen sağlar.

export { Home, Error, MealDetails, Category};