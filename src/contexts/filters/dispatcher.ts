import { Action } from './actions';

export type Filters = {
  location: string;
  technologies: string[];
  vacancyTypes: string[];
  companySizes: string[];
  workArrangements: string[];
  wageRange: number[];
  levels: string[];
  role: string;
  geralQuery: string;
};

export const initialState: Filters = {
  location: '',
  technologies: [],
  vacancyTypes: [],
  companySizes: [],
  workArrangements: [],
  wageRange: [],
  levels: [],
  role: '',
  geralQuery: '',
};

export const filtersDispatcher = (
  state = initialState,
  action: Action,
): Filters => {
  switch (action.type) {
    case 'ADD_LOCATION':
      if (typeof action.payload !== 'string') return state;
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
      if (typeof action.payload !== 'string') return state;
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
      if (typeof action.payload !== 'string') return state;
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
      if (typeof action.payload !== 'string') return state;
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
      if (typeof action.payload !== 'string') return state;
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
    case 'ADD_WAGE_RANGE':
      if (typeof action.payload !== 'number') return state;
      return {
        ...state,
        wageRange: action.payload,
      };
    case 'REMOVE_WAGE_RANGE':
      return {
        ...state,
        wageRange: [],
      };
    case 'ADD_LEVEL':
      if (typeof action.payload !== 'string') return state;
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
      if (typeof action.payload !== 'string') return state;
      return {
        ...state,
        role: action.payload,
      };
    case 'REMOVE_ROLE':
      return {
        ...state,
        role: '',
      };
    case 'ADD_GERAL_QUERY':
      if (typeof action.payload !== 'string') return state;
      return {
        ...state,
        geralQuery: action.payload,
      };
    case 'REMOVE_GERAL_QUERY':
      return {
        ...state,
        geralQuery: '',
      };
    default:
      return state;
  }
};
