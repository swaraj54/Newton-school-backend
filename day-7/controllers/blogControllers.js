import { Blog } from './../modals/blog.js';


export const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        if (!title) return res.send("Title not found!");
        if (!content) return res.send("Content not found!");
        if (!author) return res.send("Author is required");

        const blog = new Blog({
            title: title,
            content: content,
            author: author
        })

        await blog.save();

        return res.send("Blog saved successfully.")

    } catch (error) {
        return res.send(error);
    }
}
