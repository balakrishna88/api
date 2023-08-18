import blog_model from "../models/blog_model";


export const blog = async (req, res, next) => {

    let allblogs;
    try{
        allblogs = await blog_model.find();

    }catch (err){
        print(`------------->${err}`);
    }



    return res.status(200).json({ allblogs });

};

export const getBlogByID = async (req, res, next) => {
    const blogID = req.params.id;
    let blog;
    try{
        blog = await blog_model.findById(blogID);
    } catch(err){
    return res.status(500).json({ message: `------->${err}` })
    }

    return res.status(200).json({ blog });
};
    


export const addblog = async (req, res, next) => {
    const {title,description} = req.body;

   const blog = new blog_model({title,description});

    try{
        blog.save();
    }catch(err){
        console.log(`---------------> ${err}`);
    }

    res.status(200).json({message:"your blog saved"});

};

export const updateBlog = async (req, res,next) => {

    const blogID = req.params.id;
    const {title,description} = req.body;
    try{
        await blog_model.findByIdAndUpdate(blogID, {
            title, 
            description, 
            image, 
            dateAndTime,
        });
    }catch(err){
        return res.status(500).json({message: `------>${err}`});
    }

return res.status(200).json({message: `blog is updated`});

};


export const deleteBlog = async (req, res,next) => {

    const blogID = req.params.id;
    
    try{
        await blog_model.findByIdAndDelete(blogID);
    }catch(err){
        return res.status(500).json({message: `------>${err}`});
    }

return res.status(200).json({message: `deleted blog successfully`});

};