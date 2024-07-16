const CarRepository=require('../repository/car-repository');
const CRUDService=require('../services/CRUD-service')

class CarService extends CRUDService{
     constructor(){
        const repository=new CarRepository();
        super(repository);
     }
}

module.exports=CarService