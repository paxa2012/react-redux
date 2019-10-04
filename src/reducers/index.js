const reducer = (state = [], action) => {

switch(action.type) {
    case 'PHOTO_LOAD':
        return [
            ...state, ...action.photos
        ]

    case 'LIKE_PHOTO':
        return state.map((photo) => {
            if(photo.id == action.id){
               photo.liked_by_user = !photo.liked_by_user;
               photo.likes = photo.likes + 1;
               return photo;
            }
            return photo;
        });
    case 'UNLIKE_PHOTO':
        return state.map(photo =>{
            if(photo.id == action.id){
                photo.liked_by_user = !photo.liked_by_user;
                photo.likes = photo.likes - 1;
                return photo;
             }
             return photo;
        });
        
        
    default:
        return state;
    }
}
export default reducer