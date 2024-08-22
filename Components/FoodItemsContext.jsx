import { createContext, useContext, useState } from "react";

export const FoodItemsContext = createContext(null);

export const FoodItemsContextProvider = (props) => {

	const [fooditems, setFoodItems] = useState(fooditemsArr);

	return (
		<FoodItemsContext.Provider value={{ fooditems, setFoodItems }}>
			{props.children}
		</FoodItemsContext.Provider>
	);
};

const fooditemsArr = [
	{ id: 1, title: "KFC",image:'https://www.google.com/imgres?q=kfc%20menu&imgurl=https%3A%2F%2Ftodaykfcmenu.co.za%2Fwp-content%2Fuploads%2F2024%2F06%2FAll-Star-Lunch-Box-SF.webp&imgrefurl=https%3A%2F%2Ftodaykfcmenu.co.za%2F&docid=2oHKeTUR3eT5DM&tbnid=WhIdptxasWIrjM&vet=12ahUKEwjcipiEuYiIAxV8TkEAHTfBMtIQM3oECFcQAA..i&w=441&h=363&hcb=2&ved=2ahUKEwjcipiEuYiIAxV8TkEAHTfBMtIQM3oECFcQAA', price:'R100', added: false },
    { id: 2, title: "Wings",image:'https://www.google.com/imgres?q=wings&imgurl=https%3A%2F%2Fbakerbynature.com%2Fwp-content%2Fuploads%2F2015%2F02%2FSweet-and-Spicy-Sriracha-Chicken-Wings-0-6.jpg&imgrefurl=https%3A%2F%2Fbakerbynature.com%2Fsweet-spicy-sriracha-baked-chicken-wings%2F&docid=Ci9M4lCrPRgqfM&tbnid=eok-96qhzJ8jQM&vet=12ahUKEwiyqJytwIiIAxXNWEEAHdSLCgUQM3oECD4QAA..i&w=960&h=1200&hcb=2&ved=2ahUKEwiyqJytwIiIAxXNWEEAHdSLCgUQM3oECD4QAA', price:'R90', added: false },
    { id: 3, title: "Pizza",image:'https://www.google.com/imgres?q=pizza&imgurl=https%3A%2F%2Fwww.foodandwine.com%2Fthmb%2FWd4lBRZz3X_8qBr69UOu2m7I2iw%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fclassic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg&imgrefurl=https%3A%2F%2Fwww.foodandwine.com%2Frecipes%2Fclassic-cheese-pizza&docid=mUmiEmWVfPIjPM&tbnid=ZiJze8NWYgm1BM&vet=12ahUKEwjGk6_RxoiIAxX9SkEAHeZ4MGQQM3oECGMQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwjGk6_RxoiIAxX9SkEAHeZ4MGQQM3oECGMQAA',price:'R110', added: false },
    { id: 4, title: "Burger",image:'https://www.google.com/imgres?q=burger&imgurl=https%3A%2F%2Fassets.epicurious.com%2Fphotos%2F5c745a108918ee7ab68daf79%2F1%3A1%2Fw_2560%252Cc_limit%2FSmashburger-recipe-120219.jpg&imgrefurl=https%3A%2F%2Fwww.epicurious.com%2Frecipes%2Ffood%2Fviews%2Fclassic-smashed-cheeseburger-51261810&docid=zF63VJti-aMYyM&tbnid=mBVqgdIRxF3l2M&vet=12ahUKEwio6cXNx4iIAxVPSkEAHanjGioQM3oECGQQAA..i&w=2503&h=2503&hcb=2&ved=2ahUKEwio6cXNx4iIAxVPSkEAHanjGioQM3oECGQQAA',price:'R100', added: false },

];

export const useFoodItems = () => {
	const context = useContext(FoodItemsContext);
	return context;
};