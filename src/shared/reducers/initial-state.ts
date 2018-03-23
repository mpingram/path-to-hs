import AppState from "shared/types/app-state";
import Gender from "shared/enums/gender";
import { fromJS, List } from  "immutable";

import { 
  createIndexByID, 
  getHSSchools,
  getHSProgramIDs, 
  getESProgramIDs, 
  getHSProgramIDsByType,
  initializeOutcomes,
} from "./reducer-utils";

import {getAllPrograms} from "shared/util/data-access";
const allPrograms = getAllPrograms();

let initialState: AppState = fromJS({ 
  studentData: {
    gender: Gender.NOANSWER,
    location: {
      address: "",
      tier: "",
      geo: {latitude: 0, longitude: 0},
    },
    gradeLevel: 0,
    prevGradeLevel: 0,
    iep: false,
    ell: false,
    attendancePercentage: 0,
    gpa: null,
    skippedGrade7OrRepeatedGrade8: false,

    currESProgramID: undefined,
    siblingHSSchoolIDs: [],
    seTestPercentile: 0,
    nweaPercentileMath: 0,
    nweaPercentileRead: 0,
    subjGradeMath: null,
    subjGradeRead: null,
    subjGradeSci: null,
    subjGradeSocStudies: null,
  },

  selectedHSProgramID: null,

  hsData: {
    programs: List(allPrograms), 
    index: createIndexByID(allPrograms),
    hsSchools: getHSSchools(allPrograms),
    hsProgramIDs: getHSProgramIDs(allPrograms),
    esProgramIDs: getESProgramIDs(allPrograms),
    hsProgramIDsByType: getHSProgramIDsByType(allPrograms),

    outcomes: initializeOutcomes(allPrograms)
  }
});

export default initialState;
