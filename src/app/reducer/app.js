import _ from 'lodash'

import * as type from '../action/types'

const initialState = {
	todos: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case type.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, {
					name: action.name
				}]
			};
		default:
			return state;
	}
};
