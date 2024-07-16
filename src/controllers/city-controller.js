const CityService=require('../services/city-service');
const cityService=new CityService();



const create=async(req , res)=>{
    try {
         const city=await cityService.createEntry(req.body);
         return res.status(200).json({
             data : city,
             success : true,
             message : 'Entry has added successfully',
             error : {}, 
         })
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}


const read=async(req , res)=>{
    try {
         const city=await cityService.readEntry(req.params.id);
         return res.status(200).json({
             data : city,
             success : true,
             message : 'Entry has fetched successfully',
             error : {}, 
         })
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}


const destroy=async(req , res)=>{
    try {
         const city=await cityService.deleteEntry(req.params.id);
         return res.status(200).json({
             data : city,
             success : true,
             message : 'Entry has deleted successfully',
             error : {}, 
         })
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}


const update=async(req , res)=>{
    try {
         const city=await cityService.updateEntry(req.params.id,req.body);
         return res.status(200).json({
             data : city,
             success : true,
             message : 'Entry has updated successfully',
             error : {}, 
         })
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}




module.exports={
    create,
    read,
    destroy,
    update
};
