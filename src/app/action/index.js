import * as type from './types'

export const addTodo = (name) => {
	return {
		type: type.ADD_TODO,
		name: name
	};
};
