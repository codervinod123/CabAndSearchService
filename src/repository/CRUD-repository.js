class CRUDRepository{
     constructor(models){
         this.model=models;
     }

     async createEntry(data){
        try {
             const response=await this.model.create(data);
             return response;
        } catch (error) {
            console.log('Error occured in repository layer',error);
            throw {error};      
        }
     }
     
     async deleteEntry(entryId){
        try {
             const reponse=await this.model.destroy(entryId);
             return reponse;
        } catch (error) {
            console.log('Error occured in repository layer',error);
            throw {error};  
        }
     }


    //  async readEntry(entryId){
    //     try {
    //          const response=await this.model.findByPk(entryId);
    //          return response;
    //     } catch (error) {
    //         console.log('Error occured in repository layer',error);
    //         throw {error};    
    //     }
    //  }

    //  async updateEntry(entryId,data){
    //     try {
    //          const response=await this.model.update(data,{where:{id:entryId}});
    //          return response;
    //     } catch (error) {
    //         console.log('Error occured in repository layer',error);
    //         throw {error};    
    //     }
    //  }


}
module.exports=CRUDRepository