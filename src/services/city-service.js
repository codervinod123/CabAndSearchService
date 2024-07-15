const CRUDService=require('./CRUD-service');
const CityRepository=require('../repository/city-repository');


class CityService extends CRUDService{
       constructor(){
          const repository=new CityRepository();
          super(repository);
       }

}

module.exports=CityService;