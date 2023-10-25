import { Action } from './actions';

export type Filters = {
  id: string;
  location: string;
  technologies: string[];
  vacancyTypes: string[];
  companySizes: string[];
  workArrangements: string[];
  minWage: string;
  maxWage: string;
  levels: string[];
  role: string;
  description: string;
};

export const initialState: Filters = {
  id: '',
  location: '',
  technologies: [],
  vacancyTypes: [],
  companySizes: [],
  workArrangements: [],
  minWage: '',
  maxWage: '',
  levels: [],
  role: '',
  description: '',
};

export const filtersDispatcher = (
  state = initialState,
  action: Action,
): Filters => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'REMOVE_LOCATION':
      return {
        ...state,
        location: '',
      };
    case 'ADD_TECHNOLOGY':
      return {
        ...state,
        technologies: [...state.technologies, action.payload],
      };
    case 'REMOVE_TECHNOLOGY':
      return {
        ...state,
        technologies: state.technologies.filter(
          technology => technology !== action.payload,
        ),
      };
    case 'ADD_VACANCY_TYPE':
      return {
        ...state,
        vacancyTypes: [...state.vacancyTypes, action.payload],
      };
    case 'REMOVE_VACANCY_TYPE':
      return {
        ...state,
        vacancyTypes: state.vacancyTypes.filter(
          vacancyType => vacancyType !== action.payload,
        ),
      };
    case 'ADD_COMPANY_SIZE':
      return {
        ...state,
        companySizes: [...state.companySizes, action.payload],
      };
    case 'REMOVE_COMPANY_SIZE':
      return {
        ...state,
        companySizes: state.companySizes.filter(
          companySize => companySize !== action.payload,
        ),
      };
    case 'ADD_WORK_ARRANGEMENT':
      return {
        ...state,
        workArrangements: [...state.workArrangements, action.payload],
      };
    case 'REMOVE_WORK_ARRANGEMENT':
      return {
        ...state,
        workArrangements: state.workArrangements.filter(
          workArrangement => workArrangement !== action.payload,
        ),
      };
    case 'ADD_LEVEL':
      return {
        ...state,
        levels: [...state.levels, action.payload],
      };
    case 'REMOVE_LEVEL':
      return {
        ...state,
        levels: state.levels.filter(level => level !== action.payload),
      };
    case 'ADD_ROLE':
      return {
        ...state,
        role: action.payload,
      };
    case 'REMOVE_ROLE':
      return {
        ...state,
        role: '',
      };
    case 'ADD_MIN_WAGE':
      return {
        ...state,
        minWage: action.payload,
      };
    case 'ADD_MAX_WAGE':
      return {
        ...state,
        maxWage: action.payload,
      };
    case 'ADD_DESCRIPTION':
      return {
        ...state,
        description: action.payload,
      };
    case 'REMOVE_DESCRIPTION':
      return {
        ...state,
        description: '',
      };
    case 'ADD_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'REMOVE_ID':
      return {
        ...state,
        id: action.payload,
      };
    case 'RESET_FILTERS':
      return initialState;
    default:
      return state;
  }
};
