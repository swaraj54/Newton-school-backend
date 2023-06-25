import Products from './../modal/ProductSchema.js';

export const addProduct = async (req, res) => {
    try {
        const { name, price, image, category } = req.body;

        if (!name) return res.send("Name is required!");
        if (!price) return res.send("Price is required!");
        if (!image) return res.send("Image is required!");
        if (!category) return res.send("Category is rerquired!");

        const product = new Products({
            name,
            price,
            image,
            category
        })

        await product.save();
        return res.send("Product is saved.")

    } catch (error) {
        return res.send(error)
    }
}