const CarService=require('../services/car-service');
const carService=new CarService();

const create=async(req,res)=>{
    try {
        const city=await carService.createEntry(req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : 'Car has added successfully',
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
    create
}