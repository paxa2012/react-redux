import Unsplash, { toJson } from 'unsplash-js';


export const unsplash = new Unsplash({
    applicationId: "d75ac8c9dc798f770fa28d96ac9340f246b7b38ab3f3c7e2ace157868c32415e",
    secret: "7d3ffc3161dd156e69edbe66e7803462e481f7750f7a6614355f7b2a10420b12",
    callbackUrl: "http://localhost:8080/auth"
    //callbackUrl: "http://paxa220688.pw/auth",
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const setAccessTokenUnplash = (code) => {
   // console.log(code)
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json =>
            localStorage.setItem('token', json.access_token)
        )
};

export const listPhoto = (start, end, access_token) => {

    unsplash.auth.setBearerToken(access_token);
    
    return unsplash.photos.listPhotos(start, end, "latest")
        .then(res => res.json());    
         
};

export const likePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);

    unsplash.photos.likePhoto(id)
        .then(toJson)
        /*.then(json => {
           // console.log(json);
        });*/
};

export const unLikePhoto = (id, token) => {
    unsplash.auth.setBearerToken(token);

    unsplash.photos.unlikePhoto(id)
        .then(toJson)
       /* .then(json => {
            //console.log(json);
        });*/
};