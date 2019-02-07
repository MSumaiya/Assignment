const calculatePrice = (userType, productType, price, publishedDate) => {
	try{
		let date = publishedDate.toDateString();
		let today = new Date().toDateString();
		let rebate = 0;
		let productTypePrice = 0;
		let output = 0;
		let newProductRebate = 25;
		let oldProductRebate = 35;
		
		productTypePrice = (productType === 0) ? newProductRebate : oldProductRebate;
		rebate = (userType === 0) ? 0 : 5;
		rebate = (productType === 0 && date === today) ?  rebate += 10 : rebate += 0;
		
		output = price + productTypePrice - rebate;
		
		return output;
	} catch (err) {
		console.error(err);
	}
}
let date = new Date();
console.log(calculatePrice(0,0,1, date));
