export type Action = {
  type: string;
  payload: string;
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

export const addMinWage = (minWage: string) => {
  return {
    type: 'ADD_MIN_WAGE',
    payload: minWage,
  };
};

export const addMaxWage = (maxWage: string) => {
  return {
    type: 'ADD_MAX_WAGE',
    payload: maxWage,
  };
};

export const addDescription = (description: string) => {
  return {
    type: 'ADD_DESCRIPTION',
    payload: description,
  };
};

export const removeDescription = (description: string) => {
  return {
    type: 'REMOVE_DESCRIPTION',
    payload: description,
  };
};

export const resetFilters = () => {
  return {
    type: 'RESET_FILTERS',
    payload: '',
  };
};
