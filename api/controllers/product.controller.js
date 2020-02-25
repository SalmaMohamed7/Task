const Product = require('../../models/Product')


exports.view_product_by_type = async (req,res) => {
    const {product_type} = req.body;
    const products = await Product.find({product_type: product_type})
    res.json({data: products})
}

exports.view_all_products = async (req,res) => {
    const products = await Product.find()
    res.json({data: products})
}


exports.create_product= async (req,res) => {
    try {
        const { product_type,startDate,endDate} = req.body;
    console.log("sssssssssssssssssss"+product_type+"ffffffff")
        const start_date = new Date(startDate);
        const end_date = new Date(endDate);
        console.log("sssssssd" + startDate)
        console.log("sssssssd" + start_date)
        console.log("Eeeeeeeeeed" + end_date)
		const product = await Product.findOne({ product_type }); //making sure email is unique
		if (product) return res.status(400).json({ product_type: 'product_type already exists' });
        const newProduct = new Product({
            product_type,
            time_range: [
                { start_date, end_date }
              ]
            //components
			
		});
    await Product.create(newProduct);
     res.json({msg:'Product was created successfully', data: newProduct})
    }

    catch(error) {
        // We will be handling the error later
        console.log("here catch")
        console.log(error)
    }  
 };
