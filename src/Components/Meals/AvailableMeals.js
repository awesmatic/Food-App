import Meals from "./Meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Aalu Puri",
      description: "Finest fish and veggies",
      img: "img/aloo-puri-or-potato-curry-with-fried-poori-popular-indian-breakfast-lunch-dinner-menu-2B7TM2Y.jpg",
      price: 60,
    },
    {
      id: "m2",
      name: "Steam Momos",
      description: "A Chinese specialty!",
      img: "img/1200px-Momo_nepal.jpg",
      price: 50,
    },
    {
      id: "m3",
      name: "Chicken Burger",
      description: "American, raw, meaty",
      img: "img/Moist-Chicken-Burgers.jpg",
      price: 90,
    },
    {
      id: "m4",
      name: "Mutton Briyani",
      img: "img/Best-Mutton-Biryani-Recipe.jpg",
      description: "Famous Hyderabadi Briyani ",
      price: 250,
    },
    {
      id: "m5",
      name: "Choole Bhature",
      img: "img/Chole Bhature.jpg",
      description: "Chole Bhature ",
      price: 250,
    },
    {
      id: "m6",
      name: "Butter Paneer",
      img: "img/butter-paneer-masala-one-pot.jpg",
      description: "Butter paneer ",
      price: 250,
    },
    {
      id: "m7",
      name: "Fried Momos",
      img: "img/Fried-Chicken-Momos.jpg",
      description: "Fried Momos ",
      price: 250,
    },
    {
      id: "m8",
      name: "Veg Soup",
      img: "img/Homemade-Vegetable-Soup-Recipe-2-1200.jpg",
      description: "Veg Soup ",
      price: 250,
    },
    {
      id: "m8",
      name: "Egg roll",
      img: "img/Kolkata egg roll.JPG",
      description: "Kolkata egg roll ",
      price: 250,
    },
    {
      id: "m9",
      name: "Paneer Paratha",
      img: "img/Palak_and_Paneer_Stuffed_Paratha_Recipe-1022.jpg",
      description: "Paneer Paratha ",
      price: 250,
    },
    {
      id: "m10",
      name: "Rasmalai",
      img: "img/Rasmalai-4.jpg",
      description: "Rasmalai",
      price: 250,
    },
    {
      id: "m11",
      name: "Jeera Rice",
      img: "img/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
      description: "Jeera Rice ",
      price: 250,
    },
    {
      id: "m12",
      name: "pizza",
      img: "img/56933159.webp",
      description: "pizza ",
      price: 250,
    },
    {
      id: "m13",
      name: "Saucy Ramen",
      img: "img/saucy-ramen-noodles-for-WP-500x500.png",
      description: "Saucy Ramen ",
      price: 250,
    },
  ];
  return (
    <div className={classes.availableMeal}>
      {DUMMY_MEALS.map((item) => (
        <Meals key={item.id} {...item}></Meals>
      ))}
    </div>
  );
};

export default AvailableMeals;
