const CRUDRepository=require('../repository/CRUD-repository');
const {Car}=require('../models/index');

class CarRepository extends CRUDRepository{
      constructor(){
        super(Car);
      }
}

module.exports=CarRepository