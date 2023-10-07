export type Action = {
  type: string;
  payload: string | string[] | number[];
};

export const addLocation = (location: string) => {
  return {
    type: 'ADD_LOCATION',
    payload: location,
  };
};

export const removeLocation = (location: string) => {
  return {
    type: 'REMOVE_LOCATION',
    payload: location,
  };
};

export const addTechnology = (technology: string) => {
  return {
    type: 'ADD_TECHNOLOGY',
    payload: technology,
  };
};

export const removeTechnology = (technology: string) => {
  return {
    type: 'REMOVE_TECHNOLOGY',
    payload: technology,
  };
};

export const addVacancyType = (vacancyType: string) => {
  return {
    type: 'ADD_VACANCY_TYPE',
    payload: vacancyType,
  };
};

export const removeVacancyType = (vacancyType: string) => {
  return {
    type: 'REMOVE_VACANCY_TYPE',
    payload: vacancyType,
  };
};

export const addCompanySize = (companySize: string) => {
  return {
    type: 'ADD_COMPANY_SIZE',
    payload: companySize,
  };
};

export const removeCompanySize = (companySize: string) => {
  return {
    type: 'REMOVE_COMPANY_SIZE',
    payload: companySize,
  };
};

export const addWorkArrangement = (workArrangement: string) => {
  return {
    type: 'ADD_WORK_ARRANGEMENT',
    payload: workArrangement,
  };
};

export const removeWorkArrangement = (workArrangement: string) => {
  return {
    type: 'REMOVE_WORK_ARRANGEMENT',
    payload: workArrangement,
  };
};

export const addWageRange = (wageRange: number[]) => {
  return {
    type: 'ADD_WAGE_RANGE',
    payload: wageRange,
  };
};

export const removeWageRange = (wageRange: number[]) => {
  return {
    type: 'REMOVE_WAGE_RANGE',
    payload: wageRange,
  };
};

export const addLevel = (level: string) => {
  return {
    type: 'ADD_LEVEL',
    payload: level,
  };
};

export const removeLevel = (level: string) => {
  return {
    type: 'REMOVE_LEVEL',
    payload: level,
  };
};

export const addRole = (role: string) => {
  return {
    type: 'ADD_ROLE',
    payload: role,
  };
};

export const removeRole = (role: string) => {
  return {
    type: 'REMOVE_ROLE',
    payload: role,
  };
};

export const addGeralQuery = (geralQuery: string) => {
  return {
    type: 'ADD_GERAL_QUERY',
    payload: geralQuery,
  };
};

export const removeGeralQuery = (geralQuery: string) => {
  return {
    type: 'REMOVE_GERAL_QUERY',
    payload: geralQuery,
  };
};
