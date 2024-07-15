
class CRUDService {

    constructor(repository){
         this.repository=repository; 
    }

    async createEntry(data) {
        try {
            const response=await  this.repository.createEntry(data);
            return response;
        } catch (error) {
            console.log('Error has occured in service layer');
            throw { error };
        }
    }

    async deleteEntry(entryId) {
        try {
            const response=await  this.repository.deleteEntry(entryId);
            return response;
        } catch (error) {
            console.log('Error has occured in service layer');
            throw { error };
        }
    }


    // async readEntry(entryId) {
    //     try {
    //         const response=await this.repository.readEntry(entryId);
    //         return response;
    //     } catch (error) {
    //         console.log('Error has occured in service layer');
    //         throw { error };
    //     }
    // }


    // async updateEntry(entryId,data) {
    //     try {
    //         const response=await  this.repository.updateEntry(entryId,data);
    //         return response;
    //     } catch (error) {
    //         console.log('Error has occured in service layer');
    //         throw { error };
    //     }
    // }
    




}

module.exports = CRUDService;