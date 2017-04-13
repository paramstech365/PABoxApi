var mongoose = require('mongoose');
var Q = require('q');

var ProgramSchema = new mongoose.Schema({
  
  batchId: String,
  state: String,
  collegeName: String,
  detailsUrl: String,

  accrediationStatus: String,
  accrediationDate: String,

  website: String,

  degreesOffered: String,
  bachelorsDegreeCriteria: String,
  classDates: String,
  classDuration: String,
  classCapacity: String,
  campus: String,
  onCampusHousing: String,
  partTimeOption: String,
  distanceAndonlineLearning: String,
  acceptTransferStatus: String,
  seatDeposit: String,

  internationalStudents: String,
  additionalInfo: String,

  caspaParticipant: String,
  applicationDeadLine: String,
  deadLineType: String,

  curriculumDesign: String,
  courseDesign: String,

  mail: String,
  phone: String,
  email: String,

  resident: String,
  nonResident: String,

  gre: String,
  tofl: String,

  healthCareExperience: String,

  overAllGpa: String,
  preRequisiteGpa: String,
  scienceGpa: String,
  scienceGpaMethod: String,

  recommendationLettersRequired: String,
  anyOneSpecific: String,

  supplementalAppRequired: String
 
});

ProgramSchema.statics.searchPrograms = function () {
	 var deferred = Q.defer();
	 try{
	 		this.find({},function(err,programs){
	 			console.log('results'+programs);
	 			if(err){
	 				deferred.reject(err);
	 			}
	 			else
	 			{
	 				deferred.resolve(programs);
	 			}
	 		});
	 }
	 catch(ex){
	 	console.log(ex);
	 }
	 return deferred.promise;
}
module.exports = mongoose.model('Program', ProgramSchema);