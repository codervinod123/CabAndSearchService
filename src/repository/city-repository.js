const {City}=require('../models/index');
const CRUDRepository=require('./CRUD-repository');

class CityRepository extends CRUDRepository{
      constructor(){
         super(City);
      }
}

module.exports=CityRepository;

