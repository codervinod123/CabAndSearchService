const express=require('express');
const router=express.Router();

const CityController=require('../../controllers/city-controller');
const CarController=require('../../controllers/car-controller');

router.post('/city',CityController.create);
router.get('/city/:id',CityController.read);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);

router.post('/car',CarController.create);



module.exports=router