const CREATE = 'comment/CREATE';
const UPDATE = 'comment/UPDATE';
const DELETE = 'comment/DELETE';

const initialComment = [
    { 
        postId: 'testpostid',
        comments: [
            {
                commentId: 'testcomme1',
                commentUsername: "김영희",
                commentText: "화이팅하세요!",
                commentCreatedAt: "0000-00-00"
            },
            
            {
                commentId: 'testcomme2',
                commentUsername: "유재석",
                commentText: "반갑습니다.",
                commentCreatedAt: "0000-00-00"
            }
        ]
    },
]

export function createComment(payload) {
    payload={
        postId: '',
        commentId: '',
        commentUsername: '',
        commentText: '',
        commentCreatedAt: ''
    }
	return { type: CREATE, payload };
}

export function updateComment(payload) {
    payload={
        postId: '',
        commentId: '',
        commentUsername: '',
        commentText: ''
    }
	return { type: UPDATE, payload };
}

export function deleteComment(payload) {
	return { type: DELETE, payload };
}

// Reducer
export default function reducer(state = initialComment, action = {}) {
	switch (action.type) {
        case 'comment/CREATE': {
            return state;
        }
        case 'comment/UPDATE': {
            return state;
        }
        case 'comment/DELETE': {
            return state;
        }
        default: return state;
	}
}