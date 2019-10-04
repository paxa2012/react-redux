export const Photoload = (photos) => {
   //console.log('action photos', photos);
    return {
        type: 'PHOTO_LOAD',
        photos
    }
};

export const like = (id) =>{
    return{
        type: 'LIKE_PHOTO',
        id
    }
};
export const unlike = (id) =>{
    return{
        type: 'UNLIKE_PHOTO',
        id
    }
};

