import {nanoid} from 'nanoid'

const CREATE = 'post/CREATE';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

const initialPost = [
    { 
        postId: 'testpostid',
        username: '홍길동',
        createdAt: '2022-01-01',
        title: 'TIL',
        done: 0,
        check: [
            {
                text: '밥 먹기',
                checked: 0
            },
            {
                text: '밥 먹기',
                checked: 0
            },
            {
                text: '밥 먹기',
                checked: 0
            }
        ],
    },
]

export function createPost(payload) {
    payload={
        postId: nanoid(10),
        username: '',
        createdAt: '0000-00-00',
        title: '',
        done: 0,
        check: [
            {
                text: '',
                checked: 0
            }
        ]
    }
	return { type: CREATE, payload };
}

export function updatePost(payload) {
    payload={
        postId: '',
        username: '',
        title: '',
        check: [
            {
                text: '',
                checked: 0
            }
        ]
    }
	return { type: UPDATE, payload };
}

export function deletePost(payload) {
	return { type: DELETE, payload };
}

// Reducer
export default function reducer(state = initialPost, action = {}) {
	switch (action.type) {
	case 'post/CREATE': {
        return state;
    }
	case 'post/UPDATE': {
        return state;
    }
	case 'post/DELETE': {
        return state;
    }
	default: return state;
	}
}